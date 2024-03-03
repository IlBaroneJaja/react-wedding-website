import React from "react";
import {Modal} from "react-bootstrap";

const ThankYouModal = ({customId, thankYouContent, showThankYouModal, setShowThankYouModal}) => {
    const modalStyle = {
        zIndex: 10000000 //more than the rsvp modal
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
            <Modal.Title style={{fontSize: "28px", fontFamily: "Quattrocento, cursive", color: "#6b855c"}}>Merci !</Modal.Title>
        </Modal.Header>
        <Modal.Body id={`${customId}ThankYouModalBody`}>

            <div style={{fontSize: "28px", fontFamily: "Quattrocento, cursive", color: "#6b855c"}}>
                {thankYouContent}
            </div>
        </Modal.Body>
        <Modal.Footer id={`${customId}ThankYouModalFooter`} style={{fontSize: "24px", fontFamily: "Quattrocento, cursive", color: "#6b855c"}}>
            Yasmina & Alessandro
        </Modal.Footer>
    </Modal>
}

export default ThankYouModal;