import React from 'react';
import sharedStyles from "../../index.module.css";
const AcommodationsSection = () => {
    return (
        <section id="accommodations" className={sharedStyles.otherSections}>
            <div className={sharedStyles["text-overlay"]}>
                <p>Contenu pour les hébergements</p>
                <h1>Event Itineraries</h1>
            </div>
        </section>
    );
}

export default AcommodationsSection;