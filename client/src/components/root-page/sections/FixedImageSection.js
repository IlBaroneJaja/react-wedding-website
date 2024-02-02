import React from 'react';
import styles from "./FixedImage.module.css";
import sharedStyles from "../../../index.module.css";
import withScroll from "../../WithScroll";

const FixedImageSection = React.forwardRef(({ id, image, index }, ref) => {
    return (
        <section ref={ref} id={`section-${id}-${index}`} className={`${styles.simpleImageSection} imgFluid}`}>
            <img src={image} alt={`Sticky background ${index}`} id={`bg-${id}-${index}`} className={sharedStyles.stickyImage}/>
        </section>
    );
});

export default withScroll(FixedImageSection);
