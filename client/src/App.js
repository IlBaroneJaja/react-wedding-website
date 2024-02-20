import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryMoreDetailsPage from './pages/ItineraryMoreDetailsPage';
import AccommodationsMoreDetailsPage from './pages/AccommodationsMoreDetailsPage';
import NavigationNew from "./components/NavigationNew";
import StoryPage from "./components/other-pages/Story";
import Cover from "./components/cover-page/Cover";
import {AuthContext} from "./components/authentication/AuthProvider";
import env from "react-dotenv";

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoggedIn, login, logout } = useContext(AuthContext);

    useEffect(() => {
        // Fetch the user email and token from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // If the token/email does not exist, mark the user as logged out
        if (!user || !user.token) {
            logout();
            return
        }

        // If the token exists, verify it with the auth server to see if it is valid
        fetch(`${env.REACT_APP_API_URL}${env.REACT_APP_VERIFY_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'jwt-token': user.token,
            },
        })
            .then((r) => r.json())
            .then((r) => {
                if ('success' === r.message) {
                    login();
                }

            })
    }, [])

    return (
        <Router>
            { isLoggedIn ? (
                <>
                    <NavigationNew />
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
                    <Route path="/" element={<Cover />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
