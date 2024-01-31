// ItinerariesSection.js
import React from 'react';
import sharedStyles from '../../../index.module.css';
import styles from '././ItinerariesSection.module.css';
import {Element} from 'react-scroll';
import withScroll from "../../WithScroll";
import castleImage from "../../../images/chateau_la_rocq.jpg";
import municipalityImage from "../../../images/hotel_de_ville_nivelles.jpeg"
import churchImage from "../../../images/collegiale_nivelles.jpg";
import MultiActionAreaCard from "../../../utils/CardMUI";


const ItinerariesSection = React.forwardRef(({id}, ref) => {

    return (
        <Element name="itineraries">
            <section ref={ref} id={id} className={sharedStyles["content-section"]}
                     style={{padding: "50px", textAlign: "center"}}>
                <h1>Itinéraires et directions</h1>
                <div className={`container ${styles.container}`} >
                    <div className={`column ${styles.column}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Hôtel de ville de Nivelles</h2>
                        <div className={sharedStyles["text-content-centered"]}>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/jjp7JAxzaHoESh56A"
                                        rel="noreferrer">Pl.
                            Albert Ier 2, 1400 Nivelles</a><br/>
                            <MultiActionAreaCard
                                title="Commune de Nivelles"
                                image={municipalityImage}
                                content="L'hôtel de ville se situe sur la place Albert Ier, à côté de la collégiale Sainte Gertrude"
                                // TODO add anchor in the page and scroll smooth to that anchor
                                url="/itineraryDetails"
                                isTargetBlank={false}
                                customStyles={{marginTop: "20px", objectFit: "cover"}}
                            />
                        </div>
                    </div>
                    <div className={`column ${styles.column}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Collégiale de Nivelles</h2>
                        <div className={sharedStyles["text-content-centered"]}>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/K8ZSwspxg4TmsnV27" rel="noreferrer">
                            Grand'Place 4, 1400 Nivelles</a><br/>
                            <MultiActionAreaCard
                                title="Collégiale de Nivelles"
                                image={churchImage}
                                content="La collégiale Sainte-Gertrude se situe sur la grand place de Nivelles"
                                url="/itineraryDetails"
                                isTargetBlank={false}
                                customStyles={{marginTop: "20px", objectFit: "cover"}}
                            />
                        </div>
                    </div>
                </div>
                <div className={`container ${styles.container}`}>
                    <div className={`column ${styles.column}`}>
                        <h2>Château de la Rocq</h2>
                        <div className={sharedStyles["text-content-centered"]}>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8"
                                        rel="noreferrer">Rue
                            Omer Lion, 7181 Seneffe</a><br/>
                            <MultiActionAreaCard
                                title="Château de la Rocq"
                                image={castleImage}
                                content="Le château se situe à Arquennes (entité de Seneffe)."
                                url="/itineraryDetails"
                                isTargetBlank={false}
                                customStyles={{marginTop: "20px"}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
});

export default withScroll(ItinerariesSection);
