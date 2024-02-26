import React, {useState} from "react";
import {Form, InputGroup} from "react-bootstrap";

const Guest = ({firstName, lastName, confirmed = true, index, onUpdateConfirmation}) => {
    const [isCheckmarkActive, setCheckmarkActive] = useState(confirmed);
    const [isCrossActive, setCrossActive] = useState(!confirmed);

    const handleConfirmClick = () => {
        setCheckmarkActive(true);
        setCrossActive(false);

        onUpdateConfirmation(index, true);
    };

    const handleDeclineClick = () => {
        setCheckmarkActive(false);
        setCrossActive(true);

        onUpdateConfirmation(index, false);
    };

    return (
        <>
            <InputGroup className="mb-2">
                <Form.Control
                    disabled
                    value={firstName}
                    placeholder="Prénom Invité"
                    aria-label="Prénom invité"

                />
                <Form.Control
                    disabled
                    value={lastName}
                    placeholder="Nom Invité"
                    aria-label="Nom invité"
                    className="mx-2"
                />
                <button type="button" className={`btn ${isCheckmarkActive ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={handleConfirmClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-check2" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                </button>
                <button type="button" className={`btn ${isCrossActive ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={handleDeclineClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                </button>
            </InputGroup>
        </>
    )
}

export default Guest;


