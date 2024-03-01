import React, {Fragment, useState} from "react";
import {Element} from "react-scroll";
import styles from "./AccommodationsMoreDetails.module.css";
import withScroll from "../WithScroll";
import FloatingImageContainer from "./FloatingImageContainer";
import imagesContainerHebergementChateau from "../../constants/AccommodationsMoreDetailsConstants";
import BookRoomModal from "./BookRoomModal";
import UnderlinedHeader from "../UnderlinedHeader";
import ThankYouModal from "../root-page/ThankYouModal";

const AccommodationsMoreDetails = React.forwardRef(({id}, ref) => {
    const [roomBooked, setRoomBooked] = useState(false);
    const [showBookRoomModal, setShowBookRoomModal] = useState(false);
    const [showThankYouRoomBookingModal, setShowThankYouRoomBookingModal] = useState(false);

    const thankYouRoomBookingContent = <Fragment>
        Nous avons bien reçu votre demande de réservation. Nous vous reviendrons au plus vite concernant les
        disponibilités.
    </Fragment>;

    const handleBookRoomModal = () => {
        setShowBookRoomModal(true);
    }
    const handleBookRoomModalClose = () => setShowBookRoomModal(false);

    const handleConfirmationRoomBooking = (isConfirmed) => {
        setRoomBooked(isConfirmed)
    }

    return (
        <>
            <section id="accommodationsMoreDetails-intro-parallax"
                     className={` d-flex align-items-start justify-content-center ${styles.accommodationsMoreDetailsSection} ${styles.parallaxEffect}`}>
            </section>
            <Element name="accommodationsMoreDetails">
                <section ref={ref} id={id} className={styles.accommodationsMoreDetailsPageContent}>
                    <UnderlinedHeader title="Hébergement du château"/>
                    <FloatingImageContainer titleId="castleTitle" titleContent="Chambres du château"
                                            containerElements={imagesContainerHebergementChateau}/>

                    <div className="d-flex justify-content-center my-5">
                        <button
                            type="button"
                            onClick={handleBookRoomModal}
                            className={`btn btn-light text-white btn-lg px-4 gap-3  ${styles.bookRoomButton}`}>
                            Réserver chambre
                        </button>

                        <BookRoomModal
                            customId="bookRoomModal"
                            showBookRoomModal={showBookRoomModal}
                            handleBookRoomClose={handleBookRoomModalClose}
                            handleConfirmationRoomBooking={handleConfirmationRoomBooking}
                            setShowThankYouModal={setShowThankYouRoomBookingModal}
                        />

                        <ThankYouModal
                            customId="bookRoomThankYouModal"
                            thankYouContent={thankYouRoomBookingContent}
                            showThankYouModal={showThankYouRoomBookingModal}
                            setShowThankYouModal={setShowThankYouRoomBookingModal}/>
                    </div>
                </section>
            </Element>
        </>
    );
});

export default withScroll(AccommodationsMoreDetails);