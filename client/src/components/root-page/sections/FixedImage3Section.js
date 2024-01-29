import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../../index.module.css";
import image from "../../../images/aless_yas_portugal_mer.jpg";
import withScroll from "../../WithScroll";

const FixedImage3Section = React.forwardRef(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt="Sticky background 3" id="image-3" className={sharedStyles.stickyImage}/>
        </section>
    );
});

export default withScroll(FixedImage3Section);