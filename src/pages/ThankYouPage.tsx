import { useState, useEffect } from 'react';
import { Language, UI_STRINGS } from '../data/surveyData';

const ThankYouPage = () => {
    const [lang, setLang] = useState<Language>('en');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('surveyLanguage') as Language;
        if (savedLang) setLang(savedLang);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber) return;

        const results = JSON.parse(localStorage.getItem('surveyResults') || '{}');
        const formData = new FormData();
        formData.append('form-name', 'survey-results');
        formData.append('uid', results.uid);
        formData.append('phoneNumber', phoneNumber);

        // Add survey meta data
        formData.append('type', results.type);
        formData.append('language', results.language);

        // Add answers
        Object.keys(results).forEach(key => {
            if (key !== 'type' && key !== 'language') {
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
            <h1 className="question-text">{UI_STRINGS[lang].thankYou}</h1>

            {!submitted ? (
                <>
                    <p style={{ fontSize: '16px', color: '#555' }}>
                        {UI_STRINGS[lang].phoneRequest}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="tel"
                            className="phone-input"
                            placeholder={UI_STRINGS[lang].phonePlaceholder}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <button type="submit" className="fixed-bottom-btn">
                            {UI_STRINGS[lang].submit}
                        </button>
                    </form>
                </>
            ) : (
                <div style={{ marginTop: '40px' }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
                        ✓ 제출 완료되었습니다.
                    </p>
                    <p style={{ marginTop: '10px', color: '#666' }}>감사합니다!</p>
                </div>
            )}
        </div>
    );
};

export default ThankYouPage;
