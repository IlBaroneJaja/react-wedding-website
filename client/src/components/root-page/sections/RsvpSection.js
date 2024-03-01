import React, {Fragment} from 'react';
import withScroll from "../../WithScroll";
import confirm from "../../../images/svg/confirm.svg";
import styles from "./RsvpSection.module.css";
import ConfirmationModalTrigger from "../ConfirmationModalTrigger";
import UnderlinedHeader from "../../UnderlinedHeader";

const RsvpSection = React.forwardRef(({id , confirmationSiteDone, onConfirmationUpdate}, ref) => {
    const confirmationNotYetDone = (
        <p className="col-lg-8 mx-auto fs-5 text-muted">
            Si vous n'avez pas encore confirmé votre présence via le site web, nous vous demandons de confirmer
            votre présence afin que nous puissions nous préparer au mieux ! :)
        </p>
    );

    const thankYouConfirmationContent = <Fragment>
        Nous vous remercions pour votre confirmation et avons déjà hâte de célébrer ce jour si spécial à vos
        côtés.
    </Fragment>;

    return (
        <section ref={ref} id={id} className={styles.rsvpSection}>
            <UnderlinedHeader title="Confirmation de présence" />
            <div className="container my-5">
                <div className="p-5 text-center bg-body-transparent rounded-3">
                    <img src={confirm} className="mb-4" width="80px" height="80px" alt="cadeaux"/>
                    <ConfirmationModalTrigger customId="rsvpConfirmation"
                                              thankYouConfirmationContent={thankYouConfirmationContent}
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