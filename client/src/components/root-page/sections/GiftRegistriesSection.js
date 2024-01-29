import React from 'react';
import sharedStyles from "../../../index.module.css";
import withScroll from "../../WithScroll";
const GiftRegistriesSection = React.forwardRef(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className={sharedStyles.otherSections}>
            <div className={sharedStyles["text-overlay"]}>
                <p>Contenu pour les listes de mariage</p>
                <h1>Event Itineraries</h1>
            </div>
        </section>
    );
});

export default withScroll(GiftRegistriesSection);