import React from 'react';
import styles from './Navigation.module.css';
import {Link, NavLink} from "react-router-dom";
import {scrollToTop} from "../utils/ScrollUtils";


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
        { section: 'intro-section', header: 'Home' },
        { section: 'itineraries', header: 'Itinéraires' },
        { section: 'travel-info', header: 'Infos utiles' },
        { section: 'accommodations', header: 'Hébergements' },
        { section: 'gift-registries', header: 'Liste de mariage' },
        { section: 'dress-code', header: 'Dress code' },
        { section: 'rsvps', header: "RSVP's" },
    ];

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top ${styles.navbar}`}>
            <div className={styles.container}>
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
                                        state: { scrollToSection: true },
                                    }}
                                    onClick={() => handleNavLinkClick(`#${section}`)}
                                    className={`nav-link ${styles["nav-link"]}`}
                                >
                                    {header}
                                </NavLink>
                            </li>
                        ))}
                        {/*<li><Link to="/" onClick={scrollToTop}>Home</Link></li>*/}
                        <li><Link to="/itineraryDetails" onClick={scrollToTop} className={`nav-link ${styles["nav-link"]}`}>Page 1</Link></li>
                        <li><Link to="/accommodationDetails" onClick={scrollToTop} className={`nav-link ${styles["nav-link"]}`}>Page 2</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
