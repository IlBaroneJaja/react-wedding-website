import React, {Fragment, useContext, useEffect, useState} from 'react';
import styles from "./TimelineSection.module.css"
import weddingSignature from "../../../images/wedding_signature.jpg";
import church from "../../../images/collegiale_nivelles_square.jpg";
import castle from "../../../images/chateau_la_rocq_square.jpg";
import party from "../../../images/party_square2.jpg";
import withScroll from '../../WithScroll';
import FeatureCards, {generateFeatureDataItem} from "../../../utils/FeatureCards";
import {CgDetailsMore, CgInfinity} from "react-icons/cg";
import {FaMapMarked} from "react-icons/fa";
import useLocalStorage from "../../../utils/LocalStorageUtil";
import UnderlinedHeader from "../../UnderlinedHeader";
import { GuestInfoContext } from "../../../GuestInfoContext";

const TimelineSection = React.forwardRef(({id, guestData}, ref) => {
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const [isOnlyChurchGuest, setIsOnlyChurchGuest] = useState(true);
    const [featureDataFiltered, setFeatureDataFiltered] = useState([]);
    const guestInfoFromContext = useContext(GuestInfoContext);

    const setIsOnlyChurchGuestFlag = (isOnlyChurchGuest) => {
        setIsOnlyChurchGuest(isOnlyChurchGuest);
    };

    useEffect(() => {
        const featureData = [
            generateFeatureDataItem(
                weddingSignature,
                "Mariage civil",
                "13h30 - 14h30",
                "Commune de Nivelles",
                "",
                "https://maps.app.goo.gl/QYokwRJQTkn8r23x7",
                <FaMapMarked/>,
                "",
                "/itineraryDetails#castleTitle",
                <CgDetailsMore/>
            ),
            generateFeatureDataItem(
                church,
                "Mariage religieux",
                "14h30 - 16h",
                "Collégiale Sainte-Gertrude",
                "",
                "https://maps.app.goo.gl/K8ZSwspxg4TmsnV27",
                <FaMapMarked/>,
                "",
                "/itineraryDetails#municipalityHeading",
                <CgDetailsMore/>
            ),
            generateFeatureDataItem(
                castle,
                "Réception",
                "17h - 23h",
                "Château de la Rocq",
                "",
                "https://maps.app.goo.gl/hsqcKdNehXRwzgyn6",
                <FaMapMarked/>,
                "",
                "/itineraryDetails#municipalityHeading",
                <CgDetailsMore/>
            ),
            generateFeatureDataItem(
                party,
                "Soirée",
                <Fragment>23h - <CgInfinity/></Fragment>,
                "Château de la Rocq",
                "",
                "https://maps.app.goo.gl/hsqcKdNehXRwzgyn6",
                <FaMapMarked/>,
                "",
                "/itineraryDetails#municipalityHeading",
                <CgDetailsMore/>
            ),
        ];
        const filterFeatureCardsBasedOnGuestType = (isOnlyChurchGuestFlag) => {
            let filteredData = [...featureData];
            if (isOnlyChurchGuestFlag) {
                filteredData.shift();
            }

            setFeatureDataFiltered(filteredData);
        };

        setIsOnlyChurchGuestFlag(guestInfoFromContext?.guest?.onlyChurchGuest);
        filterFeatureCardsBasedOnGuestType(guestInfoFromContext?.guest?.onlyChurchGuest);
    }, [guestInfoFromContext?.guest?.onlyChurchGuest]);

    // if (!guestInfo || !guestInfo.guest) {
    //     return null;
    // }

    return (
        <section ref={ref} id={id} className={styles.stickyTimelineBackground}>
            <UnderlinedHeader title="Agenda des festivités" />
            <div className="container px-4 py-5" id="timelineContainer">
                <FeatureCards featureCardsProps={featureDataFiltered}/>
            </div>
        </section>
    );
});

export default withScroll(TimelineSection);