import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, SURVEY_DATA, UI_STRINGS } from '../data/surveyData';

const SurveyPage = () => {
    const navigate = useNavigate();
    const [lang, setLang] = useState<Language>('en');
    const [setType, setSetType] = useState<'market' | 'package'>('market');
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    useEffect(() => {
        const savedLang = localStorage.getItem('surveyLanguage') as Language;
        if (savedLang) setLang(savedLang);

        // 50:50 random assignment
        const randomSet = Math.random() < 0.5 ? 'market' : 'package';
        setSetType(randomSet);
    }, []);

    const surveySet = SURVEY_DATA[setType];
    const totalSteps = surveySet.questions.length;
    const currentQuestion = surveySet.questions[currentStep];

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Save results to local storage to be used in Thank You page
            localStorage.setItem('surveyResults', JSON.stringify({
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
