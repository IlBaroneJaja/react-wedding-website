import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../../index.module.css";
import image from "../../../images/shooting_photo/bc2dfa1c-9c85-46ba-9bdb-cc1d8e91acc5.jpeg";
import withScroll from "../../WithScroll";

const FixedImage2Section = React.forwardRef(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt="Sticky background 2" id="image-2" className={sharedStyles.stickyImage}/>
        </section>
    );
});

export default withScroll(FixedImage2Section);
