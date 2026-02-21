import { useState, useEffect } from 'react';

const AdminResultsPage = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/.netlify/functions/get-results')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch results. Make sure environment variables (SITE_ID, NETLIFY_AUTH_TOKEN) are set.');
                return res.json();
            })
            .then(data => {
                setResults(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="admin-container">Loading...</div>;
    if (error) return <div className="admin-container" style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="admin-container" style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', zIndex: 10 }}>
            <h1 style={{ marginBottom: '20px' }}>Survey Results Admin</h1>
            <p style={{ fontSize: '14px', marginBottom: '20px', color: '#666' }}>
                Total Submissions: {results.length}
            </p>

            <div style={{ overflowX: 'auto' }}>
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Phone</th>
                            <th>Language</th>
                            <th>Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((sub: any) => (
                            <tr key={sub.id}>
                                <td>{new Date(sub.created_at).toLocaleDateString()}</td>
                                <td>{sub.data.type}</td>
                                <td>{sub.data.phoneNumber}</td>
                                <td>{sub.data.language}</td>
                                <td>
                                    <details>
                                        <summary>View All Qs</summary>
                                        <pre style={{ fontSize: '10px' }}>
                                            {JSON.stringify(sub.data, null, 2)}
                                        </pre>
                                    </details>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminResultsPage;
