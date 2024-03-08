// ItineraryMoreDetails.js
import React, {useContext, useEffect, useState} from 'react';
import styles from './ItineraryMoreDetails.module.css'
import {Element} from 'react-scroll';
import withScroll from "../WithScroll";
import useLocalStorage from "../../utils/LocalStorageUtil";
import FloatingImageContainer from "./FloatingImageContainer";
import imagesContainerChateauLaRocq, {
    imagesContainerCollegiale,
    imagesContainerCommune, imagesContainerParking
} from "../../constants/ItineraryMoreDetailsConstants";
import UnderlinedHeader from "../UnderlinedHeader";

const ItineraryMoreDetails = React.forwardRef(({id, guestInfoData, guestInfoFromContext}, ref) => {
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const [isOnlyChurchGuest, setIsOnlyChurchGuest] = useState(true);

    useEffect(() => {
        const setIsOnlyChurchGuestFlag = () => {
            setIsOnlyChurchGuest(guestInfoFromContext?.guest?.onlyChurchGuest);
        };

        setIsOnlyChurchGuestFlag();
    }, [guestInfo, guestInfoFromContext]);

    return (
        <Element name="itineraryMoreDetails">
            <section id="story-intro-parallax"
                     className={` d-flex align-items-start justify-content-center ${styles.itineraryMoreDetailsSection} ${styles.parallaxEffect}`}>

            </section>
            <section ref={ref} id={id} className={styles.itineraryMoreDetailsPageContent}>
                <div style={{paddingLeft: "50px", paddingRight: "50px", paddingTop: "20px", paddingBottom: "10px"}}>
                    <UnderlinedHeader title="Accès aux lieux de l'événément" />
                    {!isOnlyChurchGuest && (
                        <FloatingImageContainer titleId="municipalityHeading" titleContent="Commune de Nivelles"
                                                containerElements={imagesContainerCommune}/>
                    )}

                    <FloatingImageContainer titleId="churchHeading" titleContent="Collégiale Sainte-Gertrude"
                                            containerElements={imagesContainerCollegiale}/>
                    <FloatingImageContainer titleId="castleTitle" titleContent="Château de la Rocq"
                                            containerElements={imagesContainerChateauLaRocq}/>
                    <FloatingImageContainer titleId="parkingInfo" titleContent="Parkings de Nivelles"
                    containerElements={imagesContainerParking}/>
                </div>
            </section>
        </Element>
    )
        ;
});

export default withScroll(ItineraryMoreDetails);
