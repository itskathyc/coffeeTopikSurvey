import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, SURVEY_DATA, UI_STRINGS } from '../data/surveyData';

const SurveyPage = () => {
    const navigate = useNavigate();
    const [lang, setLang] = useState<Language>('en');
    const [setType, setSetType] = useState<'market' | 'package'>('market');
    const [currentStep, setCurrentStep] = useState(0);
    const [uid, setUid] = useState<string>('');
    const [answers, setAnswers] = useState<Record<string, string>>({});

    useEffect(() => {
        const savedLang = localStorage.getItem('surveyLanguage') as Language;
        if (savedLang) setLang(savedLang);

        // 50:50 random assignment
        const randomSet = Math.random() < 0.5 ? 'market' : 'package';
        setSetType(randomSet);

        // Generate UID
        const newUid = Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
        setUid(newUid);
    }, []);

    const surveySet = SURVEY_DATA[setType];
    const totalSteps = surveySet.questions.length;
    const currentQuestion = surveySet.questions[currentStep];

    const submitResults = async (finalAnswers: Record<string, string>) => {
        const formData = new FormData();
        formData.append('form-name', 'survey-results');
        formData.append('uid', uid);
        formData.append('type', setType === 'market' ? '[시장검증]' : '[패키지]');
        formData.append('language', lang);

        Object.keys(finalAnswers).forEach(key => {
            formData.append(key, finalAnswers[key]);
        });

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
        } catch (error) {
            console.error("Survey auto-submission error:", error);
        }
    };

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Auto-submit first
            submitResults(answers);

            // Save results to local storage to be used in Thank You page
            localStorage.setItem('surveyResults', JSON.stringify({
                uid,
                type: setType === 'market' ? '[시장검증]' : '[패키지]',
                language: lang,
                ...answers
            }));
            navigate('/thankyou');
        }
    };

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [currentQuestion.id]: option });
    };

    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="progress-container">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '12px', marginTop: '4px', color: '#888' }}>
                    {currentStep + 1} / {totalSteps}
                </div>
            </div>

            <div className="survey-logo-container">
                <img src="/logo.png" alt="CoffeeTopik Logo" className="survey-logo" />
            </div>

            <div className="question-card">
                <h2 className="question-text">{currentQuestion.text[lang]}</h2>
                <div className="options">
                    {currentQuestion.options[lang].map((option, idx) => (
                        <button
                            key={idx}
                            className={`option-btn ${answers[currentQuestion.id] === option ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="fixed-bottom-btn"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                style={{ opacity: answers[currentQuestion.id] ? 1 : 0.5 }}
            >
                {UI_STRINGS[lang].next}
            </button>
        </div>
    );
};

export default SurveyPage;
