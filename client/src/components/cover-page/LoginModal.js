import React, {useState} from 'react';
import {Button, Modal, Form, FloatingLabel} from 'react-bootstrap';
import styles from "./Cover.module.css";
import {useNavigate} from "react-router-dom";

const LoginModal = ({showModal, handleClose, setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Implement your login logic here
        setIsLoggedIn(true);
        // Close the modal after login
        handleClose();
        navigate("/home");
    };

    return (
        <>
            <Modal show={showModal} onHide={handleClose}
                   keyboard={false}

                   className={styles.modal}
            >
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="my-3">
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email address"
                                className="mb-3 text-dark"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    autoFocus
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="my-3">
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3 text-dark"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;