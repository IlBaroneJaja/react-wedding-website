import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryMoreDetailsPage from './pages/ItineraryMoreDetailsPage';
import AccommodationsMoreDetailsPage from './pages/AccommodationsMoreDetailsPage';
import NavigationNew from "./components/NavigationNew";
import IntroSection from "./components/root-page/sections/IntroSection";

function App() {
    return (
        <Router>
            <div>
                <div className="vh-100">
                    <NavigationNew/>
                    <IntroSection id="intro-section"/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/itineraryDetails" element={<ItineraryMoreDetailsPage/>}/>
                    <Route path="/accommodationsDetails" element={<AccommodationsMoreDetailsPage/>}/>
                    {/* Add more routes for additional pages */}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
