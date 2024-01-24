import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../index.module.css";
import image from "../../images/aless_yas_portugal_mer.jpg";

const FixedImage3Section = () => {
    return (
        <section id="fixed-image-3" className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt="image-3" id="image-3" className={sharedStyles.stickyImage}/>
        </section>
    );
}

export default FixedImage3Section;