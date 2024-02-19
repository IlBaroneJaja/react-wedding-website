import React from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";
import CountDownTimer from "../../../utils/CountDownTimer";
import Countdown from "../../../utils/CountDownTimer";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id}
                 className={` d-flex align-items-start justify-content-center ${styles.introSection} ${styles.parallaxEffect}`}>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="pt-3 mx-auto text-center">
                    <h4 className={`mb-3 ${styles.introContent}`}>3 mai 2024</h4>
                    <h1 className={`display-3 my-3 ${styles.introTitle}`}>Yasmina et Alessandro</h1>
                </div>

                <div className={`mx-auto text-center pb-5 ${styles.customButtonDiv}`}>
                    {/* Content for the bottom div */}
                    <button type="button" className={`btn btn-light text-white btn-lg px-4 gap-3 ${styles.rsvpButton}`}>Confirmer présence</button>

                </div>
            </div>
        </section>
);
});

export default withScroll(IntroSection);