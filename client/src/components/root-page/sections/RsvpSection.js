import React from 'react';
import withScroll from "../../WithScroll";
import confirm from "../../../images/svg/confirm.svg";
import styles from "./RsvpSection.module.css";
import ConfirmationModalTrigger from "../ConfirmationModalTrigger";

const RsvpSection = React.forwardRef(({id , confirmationSiteDone, onConfirmationUpdate}, ref) => {
    const confirmationNotYetDone = (
        <p className="col-lg-8 mx-auto fs-5 text-muted">
            Si vous n'avez pas encore confirmé votre présence via le site web, nous vous demandons de confirmer
            votre présence afin que nous puissions nous préparer au mieux ! :)
        </p>
    );

    return (
        <section ref={ref} id={id} className={styles.rsvpSection}>

            <h1 style={{textAlign: "center", paddingTop: "30px"}}>Confirmation de présence</h1>
            <hr style={{width: "50%", left: "50%"}}/>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-transparent rounded-3">
                    <img src={confirm} className="mb-4" width="80px" height="80px" alt="cadeaux"/>
                    <ConfirmationModalTrigger customId="rsvpConfirmation"
                                              confirmationNotYetDoneText={confirmationNotYetDone}
                                              confirmationSiteDone={confirmationSiteDone}
                                              onConfirmationUpdate={onConfirmationUpdate}/>
                </div>
            </div>

            <hr/>
        </section>
    );
});

export default withScroll(RsvpSection);