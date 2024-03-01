import React, {Fragment} from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";
import ConfirmationModalTrigger from "../ConfirmationModalTrigger";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id, guestInfo, confirmationSiteDone, onConfirmationUpdate}, ref) => {
    const thankYouConfirmationContent = <Fragment>
        Nous vous remercions pour votre confirmation et avons déjà hâte de célébrer ce jour si spécial à vos
        côtés.
    </Fragment>;

    return (
        <section ref={ref} id={id}
                 className={` d-flex align-items-start justify-content-center ${styles.introSection} ${styles.parallaxEffect}`}>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="pt-3 mx-auto text-center">
                    <h4 className={`mb-3 ${styles.introContent}`}>3 mai 2024</h4>
                    <h1 className={`display-3 my-3 ${styles.introTitle}`}>Yasmina et Alessandro</h1>
                </div>
                <ConfirmationModalTrigger
                    customId="introConfirmation"
                    thankYouConfirmationContent={thankYouConfirmationContent}
                    confirmationSiteDone={confirmationSiteDone}
                    onConfirmationUpdate={onConfirmationUpdate}/>
            </div>
        </section>
    );
});

export default withScroll(IntroSection);