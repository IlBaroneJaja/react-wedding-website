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
import fetchGuestData, {verifyTokenValidity} from "./services/ApiService";
import useLocalStorage from "./utils/LocalStorageUtil";

function App() {
    const {isLoggedIn, login, logout} = useContext(AuthContext);
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [user, setUser] = useLocalStorage("user", "");
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const [guestError, setGuestError] = useState('');

    useEffect(() => {
        const getGuestData = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            const data = await fetchGuestData(loggedInUser.email);

            if ('success' === data.message) {
                localStorage.setItem('guestInfo', JSON.stringify({guest: data.guest}))
            } else {
                setGuestError("Invité non trouvé");
            }
        }

        // If the token exists, verify it with the auth server to see if it is valid
        const verifyToken = async (user) => {
            const data = await verifyTokenValidity(user)

            if ('success' === data.message) {
                login();
            } else {
                localStorage.removeItem('user');
                logout();
            }
        }


        // Fetch the user email and token from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // If the token/email does not exist, mark the user as logged out
        if (!user || !user.token) {
            logout();
            return;
        }

        // Verify the token and fetch the guest information early in the component tree.
        verifyToken(user)
            .then(() => getGuestData())
            .then(() => {
                setIsUserDataLoaded(true);
            })
            .catch((error) => {
                console.error('API call error', error);
            })
    }, [login, logout]);

    return (
        <Router>
            {isUserDataLoaded && isLoggedIn ? (
                <>
                    <NavigationNew/>
                    <Routes>
                        <Route path="/home" element={<Home guestInfo={guestInfo}/>}/>
                        <Route path="/itineraryDetails" element={<ItineraryMoreDetailsPage/>}/>
                        <Route path="/accommodationsDetails" element={<AccommodationsMoreDetailsPage/>}/>
                        <Route path="/our-story" element={<StoryPage/>}/>
                        {/* Add more routes for additional pages */}
                    </Routes>
                    <Footer/>
                </>
            ) : (
                <Routes>
                    <Route path="*" element={<Cover/>}/>
                </Routes>
            )
            }
        </Router>
    );
}

export default App;
