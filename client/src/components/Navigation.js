import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {scrollToTop} from "../utils/ScrollUtils";
import logo_and_word from "../images/and_word.png";


const Navigation = () => {

    const smoothScrollTo = (target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;

            // Using smooth scrolling animation
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });

            // If you want to update the URL with the hash after scrolling
            window.history.pushState(null, null, target);
        }
    };

    const handleNavLinkClick = (target) => {
        scrollToTop(); // Scroll to top for NavLink clicks
        smoothScrollTo(target);
    };

    const navigationItems = [
        {section: 'intro-section', header: 'Home'},
        {section: 'itineraries', header: 'Itinéraires'},
        {section: 'timeline-info', header: 'Planning'},
        {section: 'accommodations', header: 'Hébergements'},
        {section: 'gift-registries', header: 'Liste de mariage'},
        {section: 'dress-code', header: 'Dress code'},
        {section: 'rsvps', header: "RSVP's"},
    ];

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top ${styles.navbar}`}>
                <div className={`${styles.mainContainer}`}>
                    <div className={styles.namesContainer}>
                        <span id="names">Yasmina</span><span id="andWord">and</span><span id="names">Alessandro</span>
                    </div>
                    <div className={`${styles.navContainer}`}>
                        <a href="#intro-section" className={styles.navbarBrand}></a>
                        <button
                            className={`navbar-toggler ${styles["navbar-toggler"]}`}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className={`navbar-toggler-icon ${styles["navbar-toggler-icon"]}`}></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className={`navbar-nav ${styles["navbar-nav"]} ml-auto`}>

                                {navigationItems.map(({section, header}) => (
                                    <li className="nav-item" key={section}>
                                        <NavLink
                                            to={{
                                                pathname: '/',
                                                hash: `#${section}`,
                                                state: {scrollToSection: true},
                                            }}
                                            onClick={() => handleNavLinkClick(`#${section}`)}
                                            className={`nav-link ${styles["nav-link"]}`}
                                        >
                                            {header}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
