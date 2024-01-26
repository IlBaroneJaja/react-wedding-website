import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../index.module.css";
import image from "../../images/photo_aless_yas.jpg";
import withScroll from "../WithScroll";

const FixedImage2Section = React.forwardRef(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt="Sticky background 2" id="image-2" className={sharedStyles.stickyImage}/>
        </section>
    );
});

export default withScroll(FixedImage2Section);
