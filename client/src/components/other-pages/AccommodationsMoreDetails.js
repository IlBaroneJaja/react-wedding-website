import React, {Fragment, useState} from "react";
import {Element} from "react-scroll";
import styles from "./AccommodationsMoreDetails.module.css";
import withScroll from "../WithScroll";
import FloatingImageContainer from "./FloatingImageContainer";
import imagesContainerHebergementChateau from "../../constants/AccommodationsMoreDetailsConstants";
import BookRoomModal from "./BookRoomModal";
import UnderlinedHeader from "../UnderlinedHeader";
import ThankYouModal from "../root-page/ThankYouModal";
import {FaMapMarked} from "react-icons/fa";

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
                    <FloatingImageContainer titleId="castleTitle" titleContent="Chambres du domaine"
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
                    <div className="d-flex justify-content-center">
                        <a href="https://fr.airbnb.be/s/Nivelles--Belgique/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-02-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Nivelles%2C%20Belgique&place_id=ChIJU3OqqNAywkcRUG1NL6uZAAQ&date_picker_type=calendar&checkin=2024-05-03&checkout=2024-05-04&adults=2&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=1&ne_lat=50.680460026548374&ne_lng=4.591393611589552&sw_lat=50.41816043986792&sw_lng=4.253212077922029&zoom=10.975731190914464&zoom_level=10.975731190914464&search_by_map=true"
                           className="icon-link justify-content-center" rel="noreferrer">
                            <FaMapMarked/>
                            Chambres Airbnb (3->4 mai)
                        </a>
                    </div>
                </section>
            </Element>
        </>
    );
});

export default withScroll(AccommodationsMoreDetails);