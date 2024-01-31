import React from 'react';
import sharedStyles from "../../../index.module.css";
import withScroll from "../../WithScroll";
import MultiActionAreaCard from "../../../utils/CardMUI";
import styles from "./Accommodations.module.css";
import castleImage from "../../../images/chateau_la_rocq.jpg";
import airbnbLogo from "../../../images/airbnb_logo.png";

const AccommodationsSection = React.forwardRef(({id}, ref) => {
    const castleDescription = "Le château de la Rocq dispose de 17 chambres doubles et 2 simples.";
    const airbnbDescription = "Des logements à bas prix (àpd. 60€/nuit) dans les environs de Nivelles/Arquennes."
    return (
        <section ref={ref} id={id} className={`${sharedStyles.otherSections} ${styles.section}`}>
            <div className={styles["text-overlay"]} style={{top: "30%"}}>
                <div className={styles.contentWrapper}>
                    <h1>Hébergements</h1>
                    <p>
                        Liste des hébergements possibles:
                    </p>

                    <div className={`container ${styles.container}`}>
                        <div className={`row ${styles.customRow}`}>
                            <div className={`col-md ${styles.customCol}`}>
                                <MultiActionAreaCard
                                    title="Chambres d'hôtes du Château"
                                    image={castleImage}
                                    content={castleDescription}
                                    url="/accommodationsDetails"
                                    isTargetBlank={false}
                                />
                            </div>
                            <div className={`col-md ${styles.customCol}`}>
                                <MultiActionAreaCard
                                    title="Logements Airbnb"
                                    image={airbnbLogo}
                                    content={airbnbDescription}
                                    url="https://fr.airbnb.be/s/Nivelles--Belgique/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-02-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Nivelles%2C%20Belgique&place_id=ChIJU3OqqNAywkcRUG1NL6uZAAQ&date_picker_type=calendar&checkin=2024-05-03&checkout=2024-05-04&adults=2&source=structured_search_input_header&search_type=user_map_move&price_filter_num_nights=1&ne_lat=50.680460026548374&ne_lng=4.591393611589552&sw_lat=50.41816043986792&sw_lng=4.253212077922029&zoom=10.975731190914464&zoom_level=10.975731190914464&search_by_map=true"
                                    isTargetBlank={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default withScroll(AccommodationsSection);