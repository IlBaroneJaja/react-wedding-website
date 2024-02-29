import React from "react";
import {Button, Modal} from "react-bootstrap";

const ConfirmationModal = ({
                               showConfirmationModal,
                               setShowConfirmationModal,
                               handleConfirmationNo,
                               handleConfirmationYes
                           }) => {
    const modalStyle = {
        zIndex: 10000000 //more than the rsvp modal
    };

    return <Modal
        backdrop="static"
        keyboard={false}
        centered
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
        style={modalStyle}
    >
        <Modal.Header>
            <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Avez-vous bien encodé vos présences avant de confirmer? Une fois le formulaire envoyé,
            il ne sera plus possible de renvoyer une seconde fois.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleConfirmationNo}>
                Non
            </Button>
            <Button variant="success" onClick={handleConfirmationYes}>
                Oui
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ConfirmationModal;