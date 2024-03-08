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
import useLocalStorage from "./utils/LocalStorageUtil";
import ProfilePage from "./components/other-pages/ProfilePage";
import {GuestInfoContext} from "./GuestInfoContext";

function App() {
    const {isLoggedIn, login, logout} = useContext(AuthContext);
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const {guestData, isUserDataLoaded} = useContext(GuestInfoContext);

    return (
        <Router>
            { isLoggedIn ? (
                <>
                    <NavigationNew/>
                    <Routes>
                        <Route path="/home" element={<Home guestInfo={guestInfo} guestInfoFromContext={guestData}/>}/>
                        <Route path="/itineraryDetails" element={<ItineraryMoreDetailsPage guestInfo={guestInfo} guestInfoFromContext={guestData}/>}/>
                        <Route path="/accommodationsDetails"
                               element={<AccommodationsMoreDetailsPage guestInfo={guestInfo}/>}/>
                        <Route path="/our-story" element={<StoryPage guestInfo={guestInfo}/>}/>
                        <Route path="/profile" element={<ProfilePage guestInfo={guestInfo}/>}/>
                        <Route path="*" element={<Cover/>}/>
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
