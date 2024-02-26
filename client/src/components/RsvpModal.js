import React, {useContext, useEffect, useState} from 'react';
import {Button, Modal, Form, FloatingLabel, Row, Col, InputGroup} from 'react-bootstrap';
import styles from "./RsvpModal.module.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./authentication/AuthProvider";
import env from "react-dotenv";
import Guest from "./root-page/Guest";
import ConfirmationModal from "./ConfirmationModal";
import fetchGuestData from "../services/fetchUserData";

const RsvpModal = ({showRsvpModal, handleRsvpClose, handleConfirmationSiteDone, setShowThankYouModal}) => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState(loggedInUser?.email);
    const [emailError, setEmailError] = useState('');
    const [validated, setValidated] = useState(false);

    const [guest, setGuest] = useState(null);
    const [guestError, setGuestError] = useState('');

    const [comments, setComments] = useState('');
    const [allergyInfo, setAllergyInfo] = useState('');

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);


    useEffect(() => {
            if (showRsvpModal) {
                const data = fetchGuestData(email);

                if ('success' === data.message) {
                    localStorage.setItem('guestInfo', JSON.stringify({guest: data.guest}))
                    setGuest(data);

                } else {
                    setGuestError("Invité non trouvé");
                }
            }

        }, [email, showRsvpModal]
    )
    ;

    const validateInput = () => {
        return true;
    }

    const handleConfirmationYes = async () => {
        setShowConfirmationModal(false);
        handleConfirmationSiteDone(true);

        try {
            await updateGuestData();
            handleRsvpClose();
        } catch (error) {
            console.error('Error updating guest data:', error);
            // Handle error scenarios, such as showing an error message or logging the error.
        } finally {
            setShowThankYouModal(true);
        }

    };

    const handleConfirmationNo = () => {
        setShowConfirmationModal(false);
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
            updatedGuest.comments = comments;
            updatedGuest.allergyInfo = allergyInfo;
            updatedGuest.confirmationSiteDone = true;

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
            setShowConfirmationModal(true);

        } else {
            setValidated(false);
        }

        // Prevent the default form submission behavior
        event.preventDefault();
    };

    const handleTextAreaChange = (event) => {
        const {name, value} = event.target;

        if (name === "commentsArea") {
            setComments(value);
        } else if (name === "allergyArea") {
            setAllergyInfo(value);
        }
    }

    const guestInfo = JSON.parse(localStorage.getItem('guestInfo'))?.guest;
    return (
        <>
            <Modal show={showRsvpModal} size="lg" onHide={handleRsvpClose} backdrop="static" keyboard={false}
                   className={styles.modal} data-bs-theme="light">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Confirmation de présence
                        <div className={styles.modalParagraph} style={{color: '#ee8923'}}>Dernière limite: 1er avril
                            !</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{fontSize: '14px', textAlign: "justify"}}>
                        Nous sommes ravis que vous ayez répondu présents à notre Save The Date il y a de cela
                        quelques
                        mois.
                        Mais le temps passe très vite, et nous voudrions vous demander une dernière fois de
                        confirmer
                        votre présence,
                        et/ou celles des personnes qui vous accompagnent.
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleConfirmation}>
                        <Row className="my-3">
                            <Form.Group as={Col} controlId="formConfirmation">
                                <Form.Group controlId="formFirstName">
                                    <Form.Label className={styles.label}>Prénom</Form.Label>
                                    <Form.Control placeholder="Nom" value={guestInfo?.firstName} disabled/>
                                </Form.Group>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formConfirmation">
                                <Form.Group controlId="formLastName">
                                    <Form.Label className={styles.label}>Nom</Form.Label>
                                    <Form.Control placeholder="Nom" value={guestInfo?.lastName} disabled/>
                                </Form.Group>
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formConfirmation" className="mb-3">
                            <Form.Label className={styles.label}>Email</Form.Label>
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Addresse email"
                                className="mb-3 text-dark"
                            >
                                <Form.Control
                                    disabled
                                    type="email"
                                    placeholder="Entrez votre adresse email"
                                    value={guestInfo?.email}
                                    autoFocus
                                    isInvalid={!!emailError}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {!emailError && <Form.Control.Feedback>Email valide!</Form.Control.Feedback>}
                                {emailError &&
                                    <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>}

                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formConfirmation" className="mb-3">
                            <Form.Label className={styles.label}>Liste invités</Form.Label>
                            <div className={styles.modalParagraph}>
                                Voici la liste des invités pour l'adresse mail donnée. Confirmez chacune des
                                présences en sélectionnant le bouton "V" (présent) ou "X" (absent).
                            </div>
                            <br/>
                            {guestInfo?.guestList?.length >= 0 && guestInfo?.guestList.map((user, index) =>
                                <Guest
                                    className="mt-3"
                                    key={index}
                                    index={index}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    confirmed={user.confirmed}
                                    onUpdateConfirmation={handleUpdateConfirmation}
                                />
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.allergyInfo">
                            <Form.Label className={styles.label}>Info allergies/intolérances</Form.Label>
                            <FloatingLabel
                                controlId="floatingCommentsTextArea"
                                label="Allergies/intolérances"
                                className="mb-3 text-dark"
                            >
                                <Form.Control name="allergyArea" as="textarea" placeholder="Readonly input here..."
                                              rows={4}
                                              style={{height: '100px'}} onChange={handleTextAreaChange}>
                                    {guestInfo?.allergyInfo}
                                </Form.Control>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.comments">
                            <Form.Label className={styles.label}>Commentaires</Form.Label>
                            <FloatingLabel
                                controlId="floatingCommentsTextArea"
                                label="Commentaires, souhaits, questions..."
                                className="mb-3 text-dark"
                            >
                                <Form.Control name="commentsArea" as="textarea" placeholder="Readonly input here..."
                                              rows={4}
                                              style={{height: '100px'}} onChange={handleTextAreaChange}>
                                    {guestInfo?.comments}
                                </Form.Control>
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="success" type="submit">Confirmer</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <ConfirmationModal
                showConfirmationModal={showConfirmationModal}
                setShowConfirmationModal={setShowConfirmationModal}
                handleConfirmationNo={handleConfirmationNo}
                handleConfirmationYes={handleConfirmationYes}
            />
        </>
    );
}

export default RsvpModal;