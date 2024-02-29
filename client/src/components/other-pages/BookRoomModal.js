/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {useEffect, useState} from 'react';
import {Button, Modal, Form, FloatingLabel, Row} from 'react-bootstrap';
import styles from "./BookRoomModal.module.css";
import env from "react-dotenv";
import ConfirmationModal from "../root-page/ConfirmationModal";
import fetchGuestData from "../../services/ApiService";

const BookRoomModal = ({
                           customId,
                           showBookRoomModal,
                           handleBookRoomClose,
                           handleConfirmationSiteDone,
                           setShowThankYouModal
                       }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState(loggedInUser?.email);
    const [emailError, setEmailError] = useState('');
    const [roomNb, setRoomNb] = useState(0);
    const [roomNbError, setRoomNbError] = useState('');
    const [validated, setValidated] = useState(false);

    const [guest, setGuest] = useState(null);
    const [guestError, setGuestError] = useState('');


    useEffect(() => {
            const fetchData = async () => {
                if (showBookRoomModal) {
                    const data = await fetchGuestData(email);

                    if ('success' === data.message) {
                        localStorage.setItem('guestInfo', JSON.stringify({guest: data.guest}))
                        setGuest(data);
                    } else {
                        setGuestError("Invité non trouvé");
                    }
                }
            }

            fetchData();

        }, [email, showBookRoomModal]
    );

    const validateInput = () => {
        if ('' === roomNb) {
            setRoomNbError('Champ vide. Introduisez un chiffre entre 0 et 3');
            return false;
        }

        if (roomNb < 0 || roomNb > 3) {
            setRoomNbError('Nombre de chambres invalide. Le nombre de chambres par groupe est limité à 3');
            return false;
        }

        return true;
    }

    const handleConfirmationYes = async () => {
        // setShowConfirmationModal(false);
        // handleConfirmationSiteDone(true);

        try {
            await updateGuestData();
            handleBookRoomClose();
        } catch (error) {
            console.error('Error updating guest data:', error);
            // Handle error scenarios, such as showing an error message or logging the error.
        } finally {
            setShowThankYouModal(true);
        }

    };

    const handleConfirmationNo = () => {
        // setShowConfirmationModal(false);
    };

    const handleUpdateConfirmation = (index, newConfirmationValue) => {
        const guestInfo = JSON.parse(localStorage.getItem("guestInfo"));

        if (guestInfo && guestInfo.guest && guestInfo.guest.guestList?.length > 0) {
            guestInfo.guest.guestList[index].confirmed = newConfirmationValue;
        }

        setGuest(prev => {
            const updatedGuest = {...prev};
            if (updatedGuest && updatedGuest.guest && updatedGuest.guest.guestList?.length > 0) {
                updatedGuest.guest.guestList[index].confirmed = newConfirmationValue;
            }
            return updatedGuest;
        });

        localStorage.setItem('guestInfo', JSON.stringify(guestInfo))
    };

    const updateGuestData = async () => {
        try {
            // Update local storage guest info
            const updatedGuestInfo = JSON.parse(localStorage.getItem("guestInfo"));
            const updatedGuest = updatedGuestInfo.guest;

            // updatedGuest.confirmationSiteDone = true;

            const response = await fetch(`${env.REACT_APP_API_URL}${env.REACT_APP_GET_GUEST_ENDPOINT}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    guestList: updatedGuest.guestList,
                    comments: updatedGuest.comments,
                    allergyInfo: updatedGuest.allergyInfo,
                    confirmationSiteDone: updatedGuest.confirmationSiteDone
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('guestInfo', JSON.stringify(updatedGuestInfo));
                setGuest(updatedGuestInfo);

            } else {
                setGuestError("Invité non trouvé");
            }

        } catch
            (error) {
            console.error('API call error', error);
            // Handle error scenarios
        }
    };

    const handleConfirmation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (validateInput()) {
            setValidated(true);
            // setShowConfirmationModal(true);

        } else {
            setValidated(false);
        }

        // Prevent the default form submission behavior
        event.preventDefault();
    };

    const handleTextAreaChange = (event) => {
        const {name, value} = event.target;

        // if (name === "commentsArea") {
        //     setComments(value);
        // } else if (name === "allergyArea") {
        //     setAllergyInfo(value);
        // }
    }

    const guestInfo = JSON.parse(localStorage.getItem('guestInfo'))?.guest;
    return (
        <>
            <Modal show={showBookRoomModal} size="lg" onHide={handleBookRoomClose} backdrop="static" keyboard={false}
                   className={styles.modal} data-bs-theme="light">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Réservation de chambres
                        <div className={styles.modalParagraph} style={{color: '#ee8923'}}>Dernière limite: 1er avril
                            !</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{fontSize: '14px', textAlign: "justify"}}>
                        Indiquez ci-dessous le nombre de chambres que vous souhaitez réserver, ainsi que
                        le type de chambre, nous reviendrons vers vous pour les disponibilités restantes,
                        et la confirmation de réservation.
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleConfirmation}>
                        <Row className="my-3">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`${customId}FormRoomNbInput`} id={`${customId}FormRoomNbInput`}
                                            className={styles.label}>Nombre de chambres</Form.Label>
                                <FloatingLabel
                                    htmlFor={`${customId}FormRoomNbInput`}
                                    id={`${customId}formEmailFloatingLabel`}
                                    label="Nombre de chambres"
                                    className="mb-3 text-dark"
                                >
                                    <Form.Control
                                        id={`${customId}FormRoomNbInput`}
                                        type="email"
                                        placeholder="Entrez le nombre de chambres"
                                        autoFocus
                                        isInvalid={!!roomNbError}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {!roomNbError &&
                                        <Form.Control.Feedback>Nombre invalide. Veuillez introduire un nombre entre 0 et 3.</Form.Control.Feedback>}
                                    {roomNbError &&
                                        <Form.Control.Feedback type="invalid">{roomNbError}</Form.Control.Feedback>}
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={`${customId}FormRoomType`} id={`${customId}FormRoomTypeLabel`}
                                            className={styles.label}>Type de chambres</Form.Label>

                                <Form.Select id={`${customId}FormRoomType`} aria-label="Default select example">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Form.Select>

                            </Form.Group>
                        </Row>

                        <Button variant="success" type="submit">Envoyer demande de réservation</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <ConfirmationModal
                // showConfirmationModal={showConfirmationModal}
                // setShowConfirmationModal={setShowConfirmationModal}
                handleConfirmationNo={handleConfirmationNo}
                handleConfirmationYes={handleConfirmationYes}
            />
        </>
    );
}

export default BookRoomModal;
/* eslint-enable jsx-a11y/control-has-associated-label */