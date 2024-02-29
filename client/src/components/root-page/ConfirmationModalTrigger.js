import React, {useEffect, useState} from 'react';
import ThankYouModal from './ThankYouModal';
import {FaRegHeart} from "react-icons/fa";
import styles from "./sections/IntroSection.module.css";
import RsvpModal from "./RsvpModal";  // Import your modal component

const ConfirmationModalTrigger = ({customId, confirmationNotYetDoneText, confirmationSiteDone, onConfirmationUpdate}) => {
    const [guestError, setGuestError] = useState('');

    const [showRsvpModal, setShowRsvpModal] = useState(false);
    // const [confirmationSiteDone, setConfirmationSiteDone] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    useEffect(() => {
        const guestData = JSON.parse(localStorage.getItem("guestInfo"));

        if (guestData && guestData.guest) {
            handleConfirmationSiteDone(guestData.guest.confirmationSiteDone);
        } else {
            setGuestError("Invité non trouvé");
        }
    }, []);

    const handleRsvpModal = () => {
        setShowRsvpModal(true);
    }
    const handleRsvpClose = () => setShowRsvpModal(false);

    const handleConfirmationSiteDone = (isConfirmed) => {
        onConfirmationUpdate(isConfirmed);
    }

    const htmlContentWhenNotConfirmedYet = (
        <div>
            {confirmationNotYetDoneText}
            <button type="button" onClick={handleRsvpModal}
                    className={`btn btn-light text-white btn-lg px-4 gap-3 ${styles.rsvpButton}`}>Confirmer
                présence
            </button>
            <RsvpModal
                customId={customId}
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
        <div className={`mx-auto text-center pb-5 ${styles.customButtonDiv}`}>
            {confirmationSiteDone ? htmlContentWhenConfirmed : htmlContentWhenNotConfirmedYet}
            <ThankYouModal
                customId={customId}
                showThankYouModal={showThankYouModal}
                setShowThankYouModal={setShowThankYouModal}
            />
        </div>
    );
};

export default ConfirmationModalTrigger;