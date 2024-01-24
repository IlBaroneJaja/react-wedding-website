import React from 'react';
import sharedStyles from "../../index.module.css";
import styles from "./DressCodeSection.module.css";
const DressCodeSection = () => {
    return (
        <section id="dress-code" className={`${sharedStyles.otherSections} ${styles.dressCodeBgImage}`}>
            <div className={sharedStyles["text-overlay"]}>
                <p>Contenu pour le dress code</p>
                <h1>Event Itineraries</h1>
            </div>
        </section>
    );
}

export default DressCodeSection;