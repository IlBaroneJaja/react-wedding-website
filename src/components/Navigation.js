import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top ${styles.navbar}`}>
            <div className={styles.container}>
                <a href="#intro-section" className={styles.navbarBrand}></a>
                <button className={`navbar-toggler ${styles["navbar-toggler"]}`} type="button" data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${styles["navbar-toggler-icon"]}`}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className={`navbar-nav ${styles["navbar-nav"]} ml-auto`}>
                        <li className="nav-item">
                            <a href="#intro-section" className={`nav-link ${styles["nav-link"]}`}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#itineraries" className={`nav-link ${styles["nav-link"]}`}>Itinéraire</a>
                        </li>
                        <li className="nav-item">
                            <a href="#travel-info" className={`nav-link ${styles["nav-link"]}`}>Infos utiles</a>
                        </li>
                        <li className="nav-item">
                            <a href="#accommodations" className={`nav-link ${styles["nav-link"]}`}>Hébergements</a>
                        </li>
                        <li className="nav-item">
                            <a href="#gift-registries" className={`nav-link ${styles["nav-link"]}`}>Liste de mariage</a>
                        </li>
                        <li className="nav-item">
                            <a href="#dress-code" className={`nav-link ${styles["nav-link"]}`}>Dress code</a>
                        </li>
                        <li className="nav-item">
                            <a href="#rsvps" className={`nav-link ${styles["nav-link"]}`}>RSVP's</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
