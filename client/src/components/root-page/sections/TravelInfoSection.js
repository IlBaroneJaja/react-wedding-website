import React from 'react';
import sharedStyles from "../../../index.module.css";
import styles from "./TravelInfoSection.module.css"
import timelineBgPhoto from "../../../images/flower_background_section.png";
import timelinePhoto from "../../../images/transparent_timeline_google.png";
import withScroll from '../../WithScroll';

const TravelInfoSection = React.forwardRef(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className={styles["sticky-timeline-background"]}>
            <div className={sharedStyles["text-on-top-of-image"]} style={{color: "black"}}>
                <h1>Planning de la journée</h1>
            </div>
            <img src={timelineBgPhoto} alt="timeline_background"
                 className={`${sharedStyles.stickyImage} ${styles.backgroundImage}`}/>
            <img src={timelinePhoto} alt="timeline" id="timeline"
                 className={`${sharedStyles.stickyImage} ${styles.timelineImage}`}/>
        </section>
    );
});

export default withScroll(TravelInfoSection);