import React from 'react';
import sharedStyles from "../../index.module.css";

const RsvpSection = () => {
    return (
        <section id="rsvps" className={sharedStyles.otherSections}>
            <div className={sharedStyles["text-overlay"]}>
                <p>Contenu pour les confirmation de présence</p>
                <h1>Event Itineraries</h1>
            </div>
        </section>
    );
}

export default RsvpSection;