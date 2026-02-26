import { useState, useEffect } from 'react';
import { Language, UI_STRINGS } from '../data/surveyData';

const ThankYouPage = () => {
    const [lang, setLang] = useState<Language>('en');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [instaId, setInstaId] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('surveyLanguage') as Language;
        if (savedLang) setLang(savedLang);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber && !instaId) {
            alert("Please provide either a phone number or an Instagram ID.");
            return;
        }

        const results = JSON.parse(localStorage.getItem('surveyResults') || '{}');
        const formData = new FormData();
        formData.append('form-name', 'survey-results');
        formData.append('uid', results.uid);
        formData.append('phoneNumber', phoneNumber);
        formData.append('instaId', instaId);

        // Add survey meta data
        formData.append('type', results.type);
        formData.append('language', results.language);

        // Add answers
        Object.keys(results).forEach(key => {
            if (key !== 'type' && key !== 'language' && key !== 'uid') {
                formData.append(key, results[key]);
            }
        });

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
            setSubmitted(true);
            localStorage.removeItem('surveyResults');
            localStorage.removeItem('surveyLanguage');
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <div className="thank-you-view">
            <h1 className="question-text" style={{ marginBottom: '10px' }}>{UI_STRINGS[lang].thankYou}</h1>

            {!submitted ? (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <img
                            src="/dist/oliveyoung.jpg"
                            alt="Olive Young Event"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>

                    <p style={{
                        fontSize: '15px',
                        color: '#444',
                        lineHeight: '1.6',
                        textAlign: 'center',
                        marginBottom: '25px',
                        whiteSpace: 'pre-wrap',
                        fontWeight: '500'
                    }}>
                        {UI_STRINGS[lang].phoneRequest}
                    </p>

                    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input
                            type="tel"
                            className="phone-input"
                            placeholder={UI_STRINGS[lang].phonePlaceholder}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            style={{ marginBottom: '0' }}
                        />
                        <input
                            type="text"
                            className="phone-input"
                            placeholder={UI_STRINGS[lang].instaPlaceholder}
                            value={instaId}
                            onChange={(e) => setInstaId(e.target.value)}
                        />
                        <button type="submit" className="fixed-bottom-btn" style={{ position: 'static', marginTop: '10px' }}>
                            {UI_STRINGS[lang].submit}
                        </button>
                    </form>
                </div>
            ) : (
                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#e8f5e9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        color: '#2e7d32',
                        fontSize: '30px'
                    }}>
                        ✓
                    </div>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                        {lang === 'ko' ? '제출 완료되었습니다.' : 'Submission Complete.'}
                    </p>
                    <p style={{ marginTop: '10px', color: '#666' }}>
                        {lang === 'ko' ? '참여해주셔서 감사합니다!' : 'Thank you for your participation!'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ThankYouPage;
