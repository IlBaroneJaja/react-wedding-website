import React from 'react';
import styles from "./FeatureCard.module.css";


const FeatureCard = ({featureProps}) => {
    const {
        picture: {pictureUrl, circleColor},
        header: {title, headerBackgroundColor},
        content: contentFragment,
        link1: {linkText, linkUrl, icon},
        link2: {linkText2, linkUrl2, icon2}
    } = featureProps;
    return (
        <div className="feature col text-center">
            <div
                className={`feature-icon d-block-flex align-items-center justify-content-center fs-2 mb-3 ${styles.featureImageContainer}`}>
                <div style={{display: "inline-block", margin: "0 auto", paddingBottom: "15px", maxWidth: "250px", width: "100%", position: "relative", }}>
                    <img
                        className={`rounded-circle shadow-5-strong ${styles.featureImage}`}
                        alt="commune"
                        style={{border: `solid ${circleColor}`}}
                        src={pictureUrl}
                    />
                </div>
                <div className="mx-auto pt-3" style={{display: "block", width: "100%", maxWidth: "250px", textAlign: "center"}}>
                    <h3 className={`fs-4 text-body-emphasis ${styles.featureTitle}`} style={{backgroundColor: headerBackgroundColor}}>
                        {title}
                    </h3>
                </div>
            </div>

            <div>
                {contentFragment}
            </div>
            <div className="linkContainer">
                <div className="row pb-1">
                    <a href={linkUrl} target="_BLANK"
                       className="icon-link justify-content-center" rel="noreferrer">
                        {icon}
                        {linkText}
                    </a>
                </div>
                <div className="row pt-1">
                    <a href={linkUrl2}
                       className="icon-link justify-content-center" rel="noreferrer">
                        {icon2}
                        {linkText2}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;