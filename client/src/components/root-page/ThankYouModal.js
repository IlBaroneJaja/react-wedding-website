import React from "react";
import {Modal} from "react-bootstrap";
import thankYouModalBg from "../../images/thankyouBackground.jpg";

const ThankYouModal = ({showThankYouModal, setShowThankYouModal}) => {
    const modalStyle = {
        zIndex: 10000000 //more than the rsvp modal
    };

    const bodyStyle = {
        backgroundImage: `url(${thankYouModalBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return <Modal
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
        show={showThankYouModal}
        onHide={() => setShowThankYouModal(false)}
        style={modalStyle}
    >
        <Modal.Header closeButton>
            <Modal.Title>Merci !</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div style={{fontSize: "48px", fontFamily: "kalam, cursive", color: "#A9B388"}}>
                Nous vous remercions pour votre confirmation et avons déjà hâte de célébrer ce jour si spécial à vos
                côtés.
            </div>
        </Modal.Body>
        <Modal.Footer style={{fontSize: "28px", fontFamily: "kalam, cursive", color: "#A9B388"}}>
            Yasmina & Alessandro
        </Modal.Footer>
    </Modal>
}

export default ThankYouModal;