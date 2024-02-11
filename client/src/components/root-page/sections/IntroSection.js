import React from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id}, ref) => {
    return (
        // <section ref={ref} id={id} className={`vh-100 d-flex align-items-center ${styles.introSection}`}>
        //     <div className={`justify-content-center text-center ${styles.parallaxEffect}`}>
        //         <div className="px-4 py-5 my-5 text-center">
        //             <h1 className={`display-1 mt-5 ${styles.introTitle}`} style={{ height: '20%' }}>03.05.2024</h1>
        //             <div className={`mb-3 ${styles.weddingLocation}`}>Château de la Rocq</div>
        //             <div className="col-lg-6 mx-auto mt-5">
        //                 <p className={`mb-5 ${styles.introContent}`}>
        //                     Nous sommes impatients de pouvoir célébrer cette journée avec chacun de vous.
        //                     Prenez un moment pour confirmer votre présence en cliquant sur
        //                     le bouton "RSVP" ci-dessous.
        //                 </p>
        //                 <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mx-auto object-fit-contain">
        //                     <button type="button" className={`btn btn-primary btn-lg px-4 gap-3 ${styles.rsvpButton}`}>RSVP</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section ref={ref} id={id} className={`vh-100 d-flex align-items-center justify-content-center ${styles.introSection}`}>
            <div className={`mx-auto text-center ${styles.parallaxEffect}`}>
                <div className={`p-5 text-white ${styles.introContentContainer}`}>
                    <h1 className={`display-2 mb-4 ${styles.introTitle}`}>03.05.2024</h1>
                    <h2 className={`display-4 mb-4 ${styles.introSubtitle}`}>Château de la Rocq</h2>
                    <div className={`mb-4 ${styles.introTextContainer}`}>
                        <p className={`lead ${styles.introContent}`}>
                            Nous sommes impatients de pouvoir célébrer cette journée avec chacun de vous.
                            Prenez un moment pour confirmer votre présence en cliquant sur
                            le bouton "RSVP" ci-dessous.
                        </p>
                    </div>
                    <div className="mb-4">
                        <button type="button" className={`btn btn-primary btn-lg ${styles.rsvpButton}`}>RSVP</button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default withScroll(IntroSection);