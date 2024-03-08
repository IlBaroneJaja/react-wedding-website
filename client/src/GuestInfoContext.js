import React, {createContext, useContext, useState, useEffect} from 'react';
import fetchGuestData, {verifyTokenValidity} from "./services/ApiService";
import useLocalStorage from "./utils/LocalStorageUtil";
import {AuthContext} from "./components/authentication/AuthProvider";

const GuestInfoContext = createContext();

const GuestInfoProvider = ({children}) => {
    const {isLoggedIn, login, logout} = useContext(AuthContext);
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
    const [user, setUser] = useLocalStorage("user", null);
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", null);
    const [guestData, setGuestData] = useState(null);
    const [guestError, setGuestError] = useState("");

    useEffect(() => {
        const getGuestData = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            const data = await fetchGuestData(loggedInUser?.email);

            if ('success' === data?.message) {
                setUser(loggedInUser);
                localStorage.setItem('guestInfo', JSON.stringify({guest: data.guest}));
                setIsUserDataLoaded(true);
                setGuestData(data);
            } else {
                setGuestError("Invité non trouvé");
                setIsUserDataLoaded(false);
            }
        }

        // If the token exists, verify it with the auth server to see if it is valid
        const verifyToken = async (user) => {
            const data = await verifyTokenValidity(user)

            if ('success' === data?.message) {
                login();
            } else {
                localStorage.removeItem('user');
                localStorage.removeItem('guestInfo');
                logout();
            }
        }

        const verifyAndFetchGuestData = async () => {
            const user = JSON.parse(localStorage.getItem('user'));

            // If the token/email does not exist, mark the user as logged out
            if (!user || !user.token) {
                logout();
            }

            try {
                await verifyToken(user);
                await getGuestData();

            } catch (err) {
                console.error('API call error', err);
                setIsUserDataLoaded(false);
            }

        }

        // // Fetch guestInfo only if it hasn't been fetched yet

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!guestData || (user && (user.email !== storedUser?.email))) {
            verifyAndFetchGuestData();
        }

    }, [user, logout]);

    return (
        <GuestInfoContext.Provider value={{guestData, isUserDataLoaded}}>
            {children}
        </GuestInfoContext.Provider>
    );
};

export default GuestInfoProvider;
export {GuestInfoContext};
