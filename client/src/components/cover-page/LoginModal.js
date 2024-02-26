import React, {useContext, useState} from 'react';
import {Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
import styles from "./Cover.module.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../authentication/AuthProvider";
import env from "react-dotenv";

const LoginModal = ({showModal, handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const {isLoggedIn, login, logout} = useContext(AuthContext);

    const validateInput = () => {
        // Check if the user has entered both fields correctly
        if ('' === email) {
            setEmailError('Email vide. Entrez une adresse email');
            return false;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Entrez une adresse email valide');
            return false;
        }

        if ('' === password) {
            setPasswordError('Mot de passe vide. Entrez un mot de passe.');
            return false;
        }


        // if (password.length < 7) {
        //     setPasswordError('The password must be 8 characters or longer');
        // }

        return true;
    }

    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (validateInput()) {
            setValidated(true);
            checkAccountExists((accountExists) => {
                // If yes, log in
                if (accountExists) {
                    authenticateUser();
                }
                // Else, ask user if they want to create a new account and if yes, then log in
                else {
                    setEmailError("Nom d'utilisateur ou mot de passe incorrect");
                    setValidated(false);
                }
            });
        } else {
            setValidated(false);
        }

        // Prevent the default form submission behavior
        event.preventDefault();
    };

    const checkAccountExists = (callback) => {
        fetch(`${env.REACT_APP_API_URL}${env.REACT_APP_CHECK_ACCOUNT_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((r) => r.json())
            .then((r) => {
                callback(r?.userExists);
            })
    }

// Log in a user using email and password
    const authenticateUser = () => {
        fetch(`${env.REACT_APP_API_URL}${env.REACT_APP_AUTH_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((r) => r.json())
            .then((r) => {
                if ('success' === r.message) {
                    localStorage.setItem('user', JSON.stringify({ email, token: r.token }))
                    login();
                    setEmail(email);
                    // Close the modal after login
                    handleClose();
                    navigate("/home");

                } else {
                    setPasswordError("Email ou mot de passe non authentifié");
                }
            })
    }

    return (
        <>
            <Modal show={showModal} onHide={handleClose} keyboard={false} className={styles.modal}>
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    <Form noValidate validated={validated} onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail" className="my-3">
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email address"
                                className="mb-3 text-dark"
                            >
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    autoFocus
                                    isInvalid={!!emailError}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {!emailError && <Form.Control.Feedback>Email valide!</Form.Control.Feedback>}
                                {emailError && <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>}

                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="my-3">
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3 text-dark"
                            >
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    isInvalid={!!passwordError}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>}
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;