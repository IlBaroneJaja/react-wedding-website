import React from "react";
import {Modal} from "react-bootstrap";
import thankYouModalBg from "../../images/thankyouBackground.jpg";

const ThankYouModal = ({customId, thankYouContent, showThankYouModal, setShowThankYouModal}) => {
    const modalStyle = {
        zIndex: 10000000 //more than the rsvp modal
    };

    const bodyStyle = {
        backgroundImage: `url(${thankYouModalBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return <Modal
        id={`${customId}ThankYouModal`}
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
        show={showThankYouModal}
        onHide={() => setShowThankYouModal(false)}
        style={modalStyle}
    >
        <Modal.Header id={`${customId}ThankYouModalHeader`} closeButton>
            <Modal.Title>Merci !</Modal.Title>
        </Modal.Header>
        <Modal.Body id={`${customId}ThankYouModalBody`}>

            <div style={{fontSize: "36px", fontFamily: "kalam, cursive", color: "#A9B388"}}>
                {thankYouContent}
            </div>
        </Modal.Body>
        <Modal.Footer id={`${customId}ThankYouModalFooter`} style={{fontSize: "28px", fontFamily: "kalam, cursive", color: "#A9B388"}}>
            Yasmina & Alessandro
        </Modal.Footer>
    </Modal>
}

export default ThankYouModal;