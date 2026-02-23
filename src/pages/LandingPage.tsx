import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, UI_STRINGS } from '../data/surveyData';

const LandingPage = () => {
    const navigate = useNavigate();
    const [lang, setLang] = useState<Language>('en');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const languages: { code: Language; label: string }[] = [
        { code: 'ko', label: '한국어' },
        { code: 'en', label: 'English' },
        { code: 'zh', label: '汉语' },
        { code: 'vi', label: 'Vietnamese' },
        { code: 'id', label: 'Indonesian' },
    ];

    const handleStart = () => {
        localStorage.setItem('surveyLanguage', lang);
        navigate('/survey');
    };

    const selectedLangLabel = languages.find(l => l.code === lang)?.label;

    return (
        <div className="landing-view">
            <div className="logo-container">
                <img src="/logo.png" alt="CoffeeTopik Logo" className="logo" />
            </div>

            <div className="language-selector">
                <span className="select-label">Select Language</span>
                <div className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span>{selectedLangLabel}</span>
                    <span>▼</span>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            {languages.map((l) => (
                                <div
                                    key={l.code}
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLang(l.code);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    {l.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button className="fixed-bottom-btn" onClick={handleStart}>
                {UI_STRINGS[lang].next}
            </button>
        </div>
    );
};

export default LandingPage;
