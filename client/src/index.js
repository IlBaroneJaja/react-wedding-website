import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import './Theme.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {AuthProvider} from "./components/authentication/AuthProvider";
import GuestInfoProvider from "./GuestInfoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <GuestInfoProvider>
                <App/>
            </GuestInfoProvider>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
