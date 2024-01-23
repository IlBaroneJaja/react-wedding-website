import React from 'react';
import styles from './Navigation.module.css';
import sharedStyles from '../index.module.css'

const Navigation = ({scrollToSection}) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark navbar-transparent fixed-top ${styles.navbar}`}>
            <div className={styles.container}>
                <a href="#intro-section" className={styles.navbarBrand}
                   onClick={(e) => scrollToSection(e, '#intro-section')}></a>
                <button className={`navbar-toggler ${styles["navbar-toggler"]}`} type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon ${styles["navbar-toggler-icon"]}`}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className={`navbar-nav ${styles["navbar-nav"]} ml-auto`}>
                        <li className="nav-item">
                            <a href="#intro-section" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#intro-section')}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#itineraries" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#itineraries')}>
                                Itinéraire
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#travel-info" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#travel-info')}>
                                Infos utiles
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#accommodations" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#accommodations')}>
                                Hébergements
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#gift-registries" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#gift-registries')}>
                                Liste de mariage
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#dress-code" className={`nav-link ${styles["nav-link"]}`}
                               onClick={(e) => scrollToSection(e, '#dress-code')}>
                                Dress code
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#rsvps" className={`nav-link ${styles["nav-link"]}`} onClick={(e) => scrollToSection(e, '#rsvps')}>
                                RSVP's
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
