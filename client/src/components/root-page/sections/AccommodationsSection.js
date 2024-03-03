import React from 'react';
import withScroll from "../../WithScroll";
import styles from "./Accommodations.module.css";
import castleImage from "../../../images/chateau_la_rocq_square.jpg";
import airbnbLogo from "../../../images/airbnb_logo_light2.png";
import FeatureCards, {generateFeatureDataItem} from "../../../utils/FeatureCards";
import {FaMapMarked} from "react-icons/fa";
import {CgDetailsMore} from "react-icons/cg";
import UnderlinedHeader from "../../UnderlinedHeader";

const AccommodationsSection = React.forwardRef(({id}, ref) => {
    const featureData = [
        generateFeatureDataItem(
            castleImage,
            "Château de la Rocq",
            "17 chambres doubles et 2 simples",
            "Pour la nuit du 3 au 4 mai",
            "",
            "",
            null,
            "",
            "/accommodationsDetails",
            <CgDetailsMore/>
        ),
        generateFeatureDataItem(
            airbnbLogo,
            "Logements Airbnb",
            "Des logements à bas prix (àpd. 60€/nuit)",
            "dans les environs de Nivelles/Arquennes",
            "Voir logements",
            "https://fr.airbnb.be/s/Nivelles--Belgique/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-02-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Nivelles%2C%20Belgique&place_id=ChIJU3OqqNAywkcRUG1NL6uZAAQ&date_picker_type=calendar&checkin=2024-05-03&checkout=2024-05-04&adults=2&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=1&ne_lat=50.680460026548374&ne_lng=4.591393611589552&sw_lat=50.41816043986792&sw_lng=4.253212077922029&zoom=10.975731190914464&zoom_level=10.975731190914464&search_by_map=true",
            <FaMapMarked/>,
            "",
            "",
            null
        )
    ];
    return (
        <section ref={ref} id={id} className={` ${styles.section}`}>
            <UnderlinedHeader title="Liste des hébergements" />
            <div className="container px-4 py-5" id="timelineContainer">
                <FeatureCards featureCardsProps={featureData}/>
            </div>
        </section>
    );
});

export default withScroll(AccommodationsSection);