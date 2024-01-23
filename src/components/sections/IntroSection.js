import React from 'react';
import introPhoto from '../../images/ile_delbe_2.JPG';
import sharedStyles from "../../index.module.css";
import styles from "./IntroSection.module.css";
import { Element } from 'react-scroll';


// Event Itineraries Content
const IntroSection = () => {
    return (
        <Element name="intro-section">
            <section id="intro-section" className={styles.introSection}>
                <img src={introPhoto} id="intro-image" className={styles.introImage} alt="Intro Photo"/>
                <div id="intro-content" className={styles.introContent}>
                    <p className={styles.introTitle}>Yasmina & Alessandro</p>
                    <h1>Welcome to Our Wedding</h1>
                    <div className={sharedStyles.contentWrapper}>
                        <div className={sharedStyles.contentLeft}>
                            <p className={sharedStyles.pContent}>
                                Nous sommes impatients de pouvoir célébrer cette journée avec chacun de vous.
                                Prenez un moment pour confirmer votre présence en cliquant sur
                                le bouton "RSVP" ci-dessous.
                            </p>
                            <button id="rsvpButton" className={styles.rsvpButton}>RSVP Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default IntroSection;