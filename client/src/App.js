import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryMoreDetailsPage from './pages/ItineraryMoreDetailsPage';
import AccommodationsMoreDetailsPage from './pages/AccommodationsMoreDetailsPage';
import NavigationNew from "./components/NavigationNew";
import StoryPage from "./components/other-pages/Story";
import Cover from "./components/cover-page/Cover";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            { isLoggedIn ? (
                <>
                    <NavigationNew isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/itineraryDetails" element={<ItineraryMoreDetailsPage />} />
                        <Route path="/accommodationsDetails" element={<AccommodationsMoreDetailsPage />} />
                        <Route path="/our-story" element={<StoryPage />} />
                        {/* Add more routes for additional pages */}
                    </Routes>
                    <Footer />
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Cover setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
