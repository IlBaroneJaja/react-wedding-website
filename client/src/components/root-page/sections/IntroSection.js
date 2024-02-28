import React, {useEffect, useState} from 'react';
import styles from "./IntroSection.module.css";
import withScroll from "../../WithScroll";
import RsvpModal from "../../RsvpModal";
import {FaRegHeart} from "react-icons/fa";
import ThankYouModal from "../ThankYouModal";


// Event Itineraries Content
const IntroSection = React.forwardRef(({id, guestInfo}, ref) => {
    const [email, setEmail] = useState("");
    const [guestError, setGuestError] = useState('');

    const [showRsvpModal, setShowRsvpModal] = useState(false);
    const [confirmationSiteDone, setConfirmationSiteDone] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);


    useEffect(() => {
        const guestData = JSON.parse(localStorage.getItem("guestInfo"));

        if (guestData && guestData.guest) {
            handleConfirmationSiteDone(guestData.guest.confirmationSiteDone);
        } else {
            setGuestError("Invité non trouvé");
        }
    }, [email]);


    const handleRsvpModal = () => {
        setShowRsvpModal(true);
    }
    const handleRsvpClose = () => setShowRsvpModal(false);

    const handleConfirmationSiteDone = (isConfirmed) => {
        setConfirmationSiteDone(isConfirmed);
    }

    const htmlContentWhenNotConfirmedYet = (
        <div>
            <button type="button" onClick={handleRsvpModal}
                    className={`btn btn-light text-white btn-lg px-4 gap-3 ${styles.rsvpButton}`}>Confirmer
                présence
            </button>
            <RsvpModal
                showRsvpModal={showRsvpModal}
                handleRsvpClose={handleRsvpClose}
                handleConfirmationSiteDone={handleConfirmationSiteDone}
                setShowThankYouModal={setShowThankYouModal}
            />
        </div>
    );

    const htmlContentWhenConfirmed = (
        <div style={{color: "orange"}}>
            <h3> Merci pour votre confirmation ! <FaRegHeart/></h3>
        </div>
    );

    return (
        <section ref={ref} id={id}
                 className={` d-flex align-items-start justify-content-center ${styles.introSection} ${styles.parallaxEffect}`}>
            <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="pt-3 mx-auto text-center">
                    <h4 className={`mb-3 ${styles.introContent}`}>3 mai 2024</h4>
                    <h1 className={`display-3 my-3 ${styles.introTitle}`}>Yasmina et Alessandro</h1>
                </div>

                <div className={`mx-auto text-center pb-5 ${styles.customButtonDiv}`}>
                    {confirmationSiteDone ?
                        htmlContentWhenConfirmed
                        : htmlContentWhenNotConfirmedYet
                    }

                    <ThankYouModal
                        showThankYouModal={showThankYouModal}
                        setShowThankYouModal={setShowThankYouModal}
                    />
                </div>
            </div>
        </section>
    );
});

export default withScroll(IntroSection);