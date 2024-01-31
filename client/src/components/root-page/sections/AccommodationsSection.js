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
                                <MultiActionAreaCard title="Chambres d'hôtes du Château" image={castleImage} content={castleDescription}/>
                            </div>
                            <div className={`col-md ${styles.customCol}`}>
                                <MultiActionAreaCard title="Logements Airbnb" image={airbnbLogo} content={airbnbDescription}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default withScroll(AccommodationsSection);