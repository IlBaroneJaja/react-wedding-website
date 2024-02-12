import React, {Fragment} from 'react';
import FeatureCard from "./FeatureCard";
import {IoIosInfinite} from "react-icons/io";
import {FaMapMarked} from "react-icons/fa";
import {CgDetailsMore} from "react-icons/cg";


const FeatureCards = ({featureCardsProps}) => {
    const rowColStyle = "row-cols-lg-" + featureCardsProps.length;

    return (
        <div className={`row g-4 py-1 row-cols-1 ${rowColStyle}`}>
            {
                featureCardsProps.map(({ picture, header, content, link1, link2 }, index) => {
                    return (
                        <FeatureCard
                            key={"featureCard" + index}
                            featureProps={{picture, header, content, link1, link2}}
                        />
                    );
                })
            }
        </div>
    );
}

export const generateFeatureDataItem = (pictureUrl, title, content1, content2, linkUrl, icon, linkUrl2, icon2) => {
    return {
        picture: { pictureUrl, circleColor: "#d8dcd7" },
        header: { title, headerBackgroundColor: "#BED1CF" },
        content: (
            <Fragment>
                <p>{content1}</p>
                <p>{content2}</p>
            </Fragment>
        ),
        link1: {
            linkText: "Voir localisation",
            linkUrl,
            icon: icon || <FaMapMarked />,
        },
        link2: {
            linkText2: "Détails",
            linkUrl2,
            icon2: icon2 || <CgDetailsMore />,
        },
    };
};

export default FeatureCards;