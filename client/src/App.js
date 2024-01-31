import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryMoreDetailsPage from './pages/ItineraryMoreDetailsPage';
import AccommodationsMoreDetailsPage from './pages/AccommodationsMoreDetailsPage';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/itineraryDetails" element={<ItineraryMoreDetailsPage />} />
                    <Route path="/accommodationsDetails" element={<AccommodationsMoreDetailsPage />} />
                    {/* Add more routes for additional pages */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
