import React from 'react';
import styles from "./Footer.module.css";
import sharedStyles from  "../index.module.css";
const Footer = () => {
    return (
        <footer className={`${styles.footer} ${sharedStyles.footer}`}>
            <div className={styles.weddingPhrase}>
                #YasminaWillSayIDo
            </div>
            <div className={styles.copyright}>
                &copy; COPYRIGHT © 2024 MARIAGE-YASMINA-ALESSANDRO.BE - ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}

export default Footer;