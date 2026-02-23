/// <reference types="vite/client" />
import { useState, useEffect, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { SURVEY_DATA } from '../data/surveyData';

const ResultBox = ({ sub, questions }: { sub: any, questions: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = sub.phoneNumber || 'Unknown';
    const country = sub.language || 'Unknown';

    return (
        <div style={{
            border: '1px solid #eee',
            borderRadius: '8px',
            marginBottom: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            backgroundColor: '#fff'
        }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: isOpen ? '#f9f9f9' : '#fff'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{country} / {id}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>{new Date(sub.created_at).toLocaleString()}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#888' }}>UID: {sub.uid || 'N/A'}</div>
                <div style={{ fontSize: '14px', color: '#444', marginTop: '4px' }}>
                    <strong>유형:</strong> {sub.type}
                </div>
            </div>

            {isOpen && (
                <div style={{ padding: '15px', borderTop: '1px solid #eee', backgroundColor: '#fff' }}>
                    {questions.map((q: any) => (
                        <div key={q.id} style={{ marginBottom: '12px' }}>
                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                                Q. {q.text.ko}
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--primary-color)', marginTop: '2px' }}>
                                A. {sub[q.id] || 'N/A'}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const AdminResultsPage = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Authentication state
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const ADMIN_PW = import.meta.env.VITE_ADMIN_PW;

    const handleLogin = () => {
        if (passwordInput === ADMIN_PW) {
            setIsAuthorized(true);
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    useEffect(() => {
        if (!isAuthorized) return;

        setLoading(true);
        fetch('/.netlify/functions/get-results')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch results.');
                return res.json();
            })
            .then(data => {
                // Deduplicate and merge by UID
                const merged: Record<string, any> = {};
                data.forEach((item: any) => {
                    const uid = item.data.uid || item.id;
                    if (!merged[uid]) {
                        merged[uid] = { ...item.data, id: item.id, created_at: item.created_at };
                    } else {
                        // Merge phone number and answers if available
                        merged[uid] = { ...merged[uid], ...item.data };
                        // Keep the latest timestamp
                        if (new Date(item.created_at) > new Date(merged[uid].created_at)) {
                            merged[uid].created_at = item.created_at;
                        }
                    }
                });

                // Convert to array and sort by latest first
                const sorted = Object.values(merged).sort((a, b) =>
                    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );

                setResults(sorted);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const exportToExcel = () => {
        const exportData = results.map(res => {
            const row: any = {
                'ID (Phone)': res.phoneNumber || 'Unknown',
                'UID': res.uid || 'N/A',
                'Country/Language': res.language,
                'Type': res.type,
                'Submitted At': new Date(res.created_at).toLocaleString()
            };

            // Add all questions
            const allQs = [...SURVEY_DATA.market.questions, ...SURVEY_DATA.package.questions];
            const uniqueQs = Array.from(new Set(allQs.map(q => q.id))).map(id => allQs.find(q => q.id === id));

            uniqueQs.forEach(q => {
                if (q) row[`Q: ${q.text.ko}`] = res[q.id] || '';
            });

            return row;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Results");
        XLSX.writeFile(workbook, `Survey_Results_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    const paginatedResults = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return results.slice(start, start + itemsPerPage);
    }, [results, currentPage]);

    const totalPages = Math.ceil(results.length / itemsPerPage);

    if (!isAuthorized) {
        return (
            <div className="admin-container" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    padding: '30px 24px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'center',
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#fff', fontWeight: 'bold' }}>Admin Login</h2>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.3)',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: '#fff',
                                fontSize: '16px',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                            placeholder="비밀번호"
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        입장
                    </button>
                </div>
            </div>
        );
    }

    if (error) return <div className="admin-container" style={{ color: 'red', textAlign: 'center', padding: '40px' }}>Error: {error}</div>;

    const getQuestionsForType = (type: string) => {
        if (type.includes('시장검증')) return SURVEY_DATA.market.questions;
        return SURVEY_DATA.package.questions;
    };

    return (
        <div className="admin-results-page">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ marginBottom: '10px', color: '#333' }}>응답자수 : {results.length} 명</h1>
                    <button
                        onClick={exportToExcel}
                        disabled={results.length === 0}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'var(--primary-color)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: results.length === 0 ? 'not-allowed' : 'pointer',
                            opacity: results.length === 0 ? 0.6 : 1,
                            fontSize: '14px',
                            fontWeight: 'bold',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        Excel Download
                    </button>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Fetching results...</div>
                ) : (
                    <>
                        <div className="results-list">
                            {paginatedResults.map((sub: any) => (
                                <ResultBox
                                    key={sub.id || sub.uid}
                                    sub={sub}
                                    questions={getQuestionsForType(sub.type)}
                                />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ddd', cursor: 'pointer' }}
                                >
                                    Prev
                                </button>
                                <span style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ddd', cursor: 'pointer' }}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminResultsPage;

