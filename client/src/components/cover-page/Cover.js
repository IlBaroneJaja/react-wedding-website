import React, {useState} from 'react';
import styles from "./Cover.module.css";
import LoginModal from "./LoginModal";
import {useNavigate} from "react-router-dom";

const Cover = ({setIsLoggedIn}) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleShow = () => {
        setShowModal(true);
    }
    const handleClose = () => setShowModal(false);

    return (
        <div className="h-100" data-bs-theme="dark">
            <div id="intro" className={`${styles.intro} ${styles.bgImage} d-flex text-center text-bg-dark`}>
                <div className="mask position-absolute top-0 start-0 w-100 h-100"
                     style={{backgroundColor: 'hsla(0, 0%, 0%, 0.5)', zIndex: -1}}></div>
                <div className={`${styles["cover-container"]} d-flex w-100 h-100 p-3 mx-auto flex-column`}>
                    <header className="mb-auto"></header>

                    <main className="px-3">
                        <h1 className="mb-3">Mariage</h1>
                        <h1 className="mb-5">Yasmina & Alessandro</h1>
                        <p className="lead">
                            <a className={`btn btn-light ${styles["custom-btn"]} btn-lg m-2`} data-mdb-ripple-init href="#"
                               role="button" onClick={handleShow}>Se connecter</a>
                            <LoginModal  showModal={showModal} handleClose={handleClose} setIsLoggedIn={setIsLoggedIn} />
                        </p>
                    </main>

                    <footer className="mt-auto text-white-50">
                        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>,
                            by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Cover;