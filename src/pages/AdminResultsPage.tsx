/// <reference types="vite/client" />
import { useState, useEffect, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { SURVEY_DATA } from '../data/surveyData';

const ResultBox = ({ sub, questions }: { sub: any, questions: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Data formatting as requested by user
    const submissionNumber = sub.number || 'N/A';
    const type = sub.type || 'Unknown';
    const language = sub.language || 'Unknown';
    const isEvent = !!sub.phoneNumber ? 'T' : 'F';

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
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{language} | #{submissionNumber}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>{new Date(sub.created_at).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: '#888', marginTop: '4px' }}>
                    <div>Type: {type}</div>
                    <div>Event: <strong style={{ color: isEvent === 'T' ? 'var(--primary-color)' : '#999' }}>{isEvent}</strong></div>
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
                    {sub.phoneNumber && (
                        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #eee', fontSize: '14px' }}>
                            <strong>연락처:</strong> {sub.phoneNumber}
                        </div>
                    )}
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

    useEffect(() => {
        setLoading(true);
        fetch('/.netlify/functions/get-results')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch results.');
                return res.json();
            })
            .then(data => {
                // Netlify Submissions come as an array of objects with a 'data' property
                const merged: Record<string, any> = {};
                data.forEach((item: any) => {
                    const submissionData = item.data || {};
                    const uid = submissionData.uid || item.id;

                    if (!merged[uid]) {
                        merged[uid] = {
                            ...submissionData,
                            id: item.id,
                            number: item.number,
                            created_at: item.created_at
                        };
                    } else {
                        // Merge fields, prioritizing non-empty values
                        Object.keys(submissionData).forEach(key => {
                            if (submissionData[key]) {
                                merged[uid][key] = submissionData[key];
                            }
                        });
                        // Keep the latest timestamp and largest number
                        if (new Date(item.created_at) > new Date(merged[uid].created_at)) {
                            merged[uid].created_at = item.created_at;
                            merged[uid].number = item.number;
                        }
                    }
                });

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
                'No': res.number || 'N/A',
                'Language': res.language,
                'Type': res.type,
                'Event': !!res.phoneNumber ? 'T' : 'F',
                'Phone': res.phoneNumber || '',
                'Submitted At': new Date(res.created_at).toLocaleString()
            };

            // Add all questions
            const uniqueQs = SURVEY_DATA.questions;

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

    if (error) return <div className="admin-container" style={{ color: 'red', textAlign: 'center', padding: '40px' }}>Error: {error}</div>;

    const getQuestionsForType = (_type: string) => {
        return SURVEY_DATA.questions;
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

