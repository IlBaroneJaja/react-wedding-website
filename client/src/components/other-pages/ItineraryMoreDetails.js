// ItineraryMoreDetails.js
import React, {useEffect, useState} from 'react';
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


const ItineraryMoreDetails = React.forwardRef(({id}, ref) => {
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const [isOnlyChurchGuest, setIsOnlyChurchGuest] = useState(true);

    useEffect(() => {
        const setIsOnlyChurchGuestFlag = () => {
            setIsOnlyChurchGuest(guestInfo?.guest?.onlyChurchGuest);
        };

        setIsOnlyChurchGuestFlag();
    }, [guestInfo]);

    return (
        <Element name="itineraryMoreDetails">
            <section ref={ref} id={id} className={styles.itineraryMoreDetailsPageContent}>
                <div style={{paddingLeft: "50px", paddingRight: "50px", paddingTop: "20px", paddingBottom: "10px"}}>
                    <UnderlinedHeader title="Infos: accès lieux de la journée" />
                    {!isOnlyChurchGuest && (
                        <FloatingImageContainer titleId="municipalityHeading" titleContent="Accès commune de Nivelles"
                                                containerElements={imagesContainerCommune}/>
                    )}

                    <FloatingImageContainer titleId="churchHeading" titleContent="Accès Collégiale Sainte-Gertrude"
                                            containerElements={imagesContainerCollegiale}/>
                    <FloatingImageContainer titleId="castleTitle" titleContent="Accès Château de la Rocq"
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
