import React, {Fragment} from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";
import ConfirmationModalTrigger from "../ConfirmationModalTrigger";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id, guestInfo, confirmationSiteDone, onConfirmationUpdate}, ref) => {
    const thankYouConfirmationContent = <Fragment>
        Nous vous remercions pour votre confirmation ! Nous avons déjà hâte de célébrer ce jour si spécial à vos
        côtés.
    </Fragment>;

    return (
        <section ref={ref} id={id}
                 className={` d-flex align-items-start justify-content-center ${styles.introSection} ${styles.parallaxEffect}`}>
            <div className="d-flex flex-column justify-content-between align-items-center" >
                <div id="introContainer" className={`mx-auto text-center ${styles.introContainer}`}>
                    <h1 className={`mt-3 ${styles.introTitle}`}>Yasmina & Alessandro</h1>
                    <h4 className={`my-4 ${styles.introContent}`}>3 mai 2024</h4>
                    <h4 className={`my-4 ${styles.weddingLocation}`}>Château de la Rocq</h4>
                    <ConfirmationModalTrigger
                        customId="introConfirmation"
                        thankYouConfirmationContent={thankYouConfirmationContent}
                        confirmationSiteDone={confirmationSiteDone}
                        onConfirmationUpdate={onConfirmationUpdate}/>
                </div>

            </div>
        </section>
    );
});

export default withScroll(IntroSection);