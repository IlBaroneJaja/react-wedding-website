import React from 'react';
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.weddingPhrase}>
                #YasminaWillSayIDo
            </div>
            <div className={styles.copyright}>
                &copy; 2024 Yasmina & Alessandro. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;