import React from 'react';
import sharedStyles from "../../index.module.css";
const GiftRegistriesSection = () => {
    return (
        <section id="gift-registries" className={sharedStyles.otherSections}>
            <div className={sharedStyles["text-overlay"]}>
                <p>Contenu pour les listes de mariage</p>
                <h1>Event Itineraries</h1>
            </div>
        </section>
    );
}

export default GiftRegistriesSection;