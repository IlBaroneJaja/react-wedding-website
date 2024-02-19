import React from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";
import CountDownTimer from "../../../utils/CountDownTimer";
import Countdown from "../../../utils/CountDownTimer";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id}
                 className={`vh-100 d-flex align-items-end ${styles.introSection} ${styles.parallaxEffect}`}>
            <div className={`px-4 py-5 my-5 text-center`}>
                <h1 className={`display-2 pb-3 pb-md-2 pb-xl-3 pb-xxl-5 ${styles.introTitle}`}>03.05.2024</h1>
                {/*<h4 className={`py-3 pb-5 pb-lg-5 pb-xl-5 pb-xxl-5 ${styles.weddingLocation}`}>Château de la Rocq</h4>*/}
                {/*<div className={`col-lg-6 mx-auto ${styles.weddingLocation}`}>*/}
                {/*    <p className="lead mb-4">&nbsp;zeazezaezaeqsdq qsd qsdmlksqd qmlds sdmlksqd  qsdmlksqdml qsdmlqskdmsqldk msqldk sqmldk sqd kqs dmqlskd mlsqkd mlsq qdmlkqsdmlqksd  qsmldkqsmdlksqmldksqmldk </p>*/}
                {/*    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 mb-md-5">*/}
                {/*        <a className={`btn btn-light ${styles["custom-btn"]} btn-lg m-2`} data-mdb-ripple-init href="#"*/}
                {/*           role="button">Se connecter</a>*/}
                {/*        <button type="button"*/}
                {/*                className={`btn btn-primary btn-lg px-4 gap-3 ${styles.rsvpButton}`}>Confirmer présence*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <Countdown id="countDownTimer"/>*/}
                {/*</div>*/}
            </div>
        </section>
    );
});

export default withScroll(IntroSection);