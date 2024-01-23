import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../index.module.css";
import image from "../../images/photo_aless_yas.jpg";

const FixedImage2Section = () => {
    return (
        <section id="fixed-image-2" className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt="image-2" id="image-2" className={sharedStyles.stickyImage}/>
        </section>
    );
}

export default FixedImage2Section;
