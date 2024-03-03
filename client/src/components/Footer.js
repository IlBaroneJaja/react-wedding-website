import React from 'react';
import styles from "./Footer.module.css";
import sharedStyles from  "../index.module.css";
const Footer = () => {
    const year = new Date().getFullYear();
    const date = year === 2024 ? "2024" : `2024-${year}`;
    return (
        <footer className={`${styles.footer} ${sharedStyles.footer}`}>
            <div className={styles.weddingPhrase}>
                03.05.2024 - Château de la Rocq
            </div>
            <div className={styles.copyright}>
                COPYRIGHT &copy;{date} MARIAGE-YASMINA-ALESSANDRO.BE - ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}

export default Footer;