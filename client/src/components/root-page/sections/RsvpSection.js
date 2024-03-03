import React, {Fragment} from 'react';
import withScroll from "../../WithScroll";
import clock from "../../../images/svg/clock.svg";
import styles from "./RsvpSection.module.css";
import ConfirmationModalTrigger from "../ConfirmationModalTrigger";
import UnderlinedHeader from "../../UnderlinedHeader";

const RsvpSection = React.forwardRef(({id, confirmationSiteDone, onConfirmationUpdate}, ref) => {
    const confirmationNotYetDone = <Fragment>
        <p className="col-lg-8 mx-auto fs-5">
            Nous souhaiterions que vous confirmiez votre présence via le bouton ci-dessous. Vous y trouverez un petit
            formulaire contenant les dernières informations qui nous sont parvenues via notre<i> Save The Date</i>. Veuillez
            vérifier s'il vous plaît si celles-ci sont toujours correctes.
        </p>
        <p className="col-lg-8 mx-auto fs-5" style={{color: "#EE8923"}}><u>Date limite:</u> 1er avril 2024</p>
    </Fragment>;

    const thankYouConfirmationContent = <Fragment>
        Nous vous remercions pour votre confirmation ! Nous avons déjà hâte de célébrer ce jour si spécial à vos
        côtés.
    </Fragment>;

    return (
        <section ref={ref} id={id} className={styles.rsvpSection}>
            <UnderlinedHeader title="Confirmation de présence"/>
            <div className="container my-2">
                <div className="p-5 text-center bg-body-transparent rounded-3">
                    <ConfirmationModalTrigger customId="rsvpConfirmation"
                                              thankYouConfirmationContent={thankYouConfirmationContent}
                                              confirmationNotYetDoneText={confirmationNotYetDone}
                                              confirmationSiteDone={confirmationSiteDone}
                                              onConfirmationUpdate={onConfirmationUpdate}/>
                    <img src={clock} className="mb-4" width="80px" height="80px" alt="cadeaux"/>
                </div>
            </div>
            <hr/>
        </section>
    );
});

export default withScroll(RsvpSection);