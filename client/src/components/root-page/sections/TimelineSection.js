import React from 'react';
import sharedStyles from "../../../index.module.css";
import styles from "./TimelineSection.module.css"
import timelineBgPhoto from "../../../images/flower_background_section.png";
import timelinePhoto from "../../../images/transparent_timeline_municipality.png";
import withScroll from '../../WithScroll';

const TimelineSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id} className={styles.stickyTimelineBackground}>
            <div className={styles.content}>
                <div className={`${styles.timelineContainer} ${styles.timelineContainerAdjusted}`}>
                    <h1 style={{paddingTop: "20px"}}>Planning de la journée</h1>
                    <img src={timelinePhoto} alt="timeline" className={styles.timelineImage} />
                </div>
            </div>
            {/*<img src={timelineBgPhoto} alt="timeline_background" className={`${sharedStyles.stickyImage} ${styles.backgroundImage}`} />*/}
        </section>
    );
});

export default withScroll(TimelineSection);