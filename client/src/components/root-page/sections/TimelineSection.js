import React, {Fragment, useEffect, useState} from 'react';
import styles from "./TimelineSection.module.css"
import weddingSignature from "../../../images/wedding_signature.jpg";
import church from "../../../images/collegiale_nivelles_square.jpg";
import castle from "../../../images/chateau_la_rocq_square.jpg";
import party from "../../../images/party_square.jpg";
import withScroll from '../../WithScroll';
import FeatureCards, {generateFeatureDataItem} from "../../../utils/FeatureCards";
import {CgDetailsMore, CgInfinity} from "react-icons/cg";
import {FaMapMarked} from "react-icons/fa";
import useLocalStorage from "../../../utils/LocalStorageUtil";

const TimelineSection = React.forwardRef(({id}, ref) => {
    const [guestInfo, setGuestInfo] = useLocalStorage("guestInfo", "");
    const [isOnlyChurchGuest, setIsOnlyChurchGuest] = useState(true);
    const [featureDataFiltered, setFeatureDataFiltered] = useState([]);

    const setIsOnlyChurchGuestFlag = (isOnlyChurchGuest) => {
        setIsOnlyChurchGuest(isOnlyChurchGuest);
    };



    useEffect(() => {
        const featureData = [
            generateFeatureDataItem(
                weddingSignature,
                "Mariage civil",
                "13h30 - 14h30",
                "Pl. Albert Ier 2, 1400 Nivelles",
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
                "Grand'Place 4, 1400 Nivelles",
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
                "Rue Omer Lion, 7181 Seneffe",
                "",
                "https://maps.app.goo.gl/mK2fjZWn3TByGbuK8",
                <FaMapMarked/>,
                "",
                "/itineraryDetails#municipalityHeading",
                <CgDetailsMore/>
            ),
            generateFeatureDataItem(
                party,
                "Soirée",
                <Fragment>23h - <CgInfinity/></Fragment>,
                "Rue Omer Lion, 7181 Seneffe",
                "",
                "https://maps.app.goo.gl/mK2fjZWn3TByGbuK8",
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

        setIsOnlyChurchGuestFlag(guestInfo?.guest?.onlyChurchGuest);
        filterFeatureCardsBasedOnGuestType(guestInfo?.guest?.onlyChurchGuest);
    }, [guestInfo?.guest?.onlyChurchGuest]);

    return (
        <section ref={ref} id={id} className={styles.stickyTimelineBackground}>
            <div className="container px-4 py-3" id="timelineContainer">
                <h2 className="mt-3 mb-5 border-bottom text-center">Agenda des festivités</h2>
                <FeatureCards featureCardsProps={featureDataFiltered}/>
            </div>
        </section>
    );
});

export default withScroll(TimelineSection);