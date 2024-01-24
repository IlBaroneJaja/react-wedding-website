import React from 'react';
import sharedStyles from "../../index.module.css";
import styles from "./IntroSection.module.css";


// Event Itineraries Content
const IntroSection = () => {
    return (
        <section id="intro-section" className={styles.introSection}>
            <div className={styles.parallaxEffect}>
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
            </div>
        </section>
    );
}

export default IntroSection;