import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SurveyPage from './pages/SurveyPage';
import ThankYouPage from './pages/ThankYouPage';
import AdminResultsPage from './pages/AdminResultsPage';
import './index.css';

function App() {
    return (
        <Router>
            <div className="container">
                <div className="overlay"></div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/survey" element={<SurveyPage />} />
                        <Route path="/thankyou" element={<ThankYouPage />} />
                        <Route path="/admin/results" element={<AdminResultsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
