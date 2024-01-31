// ItinerariesSection.js
import React from 'react';
import sharedStyles from '../../../index.module.css';
import styles from '././ItinerariesSection.module.css';
import {Link} from 'react-router-dom';
import {Element} from 'react-scroll';
import withScroll from "../../WithScroll";
import {scrollToTop} from '../../../utils/ScrollUtils';
import castleImage from "../../../images/chateau_la_rocq.jpg";
import municipalityImage from "../../../images/hotel_de_ville_nivelles.jpeg"
import churchImage from "../../../images/collegiale_nivelles.jpg";


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
                            L'hôtel de ville se situe sur la place Albert Ier, à côté de la collégiale Sainte Gertrude.<br/>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/jjp7JAxzaHoESh56A"
                                        rel="noreferrer">Pl.
                            Albert Ier 2, 1400 Nivelles</a><br/>

                            <img src={municipalityImage} alt="Hotel de ville de Nivelles"
                                 id="hotel_de_ville"/><br/>
                            <Link to="/itineraryDetails" className="btn btn-info"
                                  style={{marginTop: '1em', marginBottom: '1em', padding: '10px'}}
                                  onClick={scrollToTop}>
                                Plus d'info
                            </Link>
                        </div>
                    </div>
                    <div className={`column ${styles.column}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2>Collégiale de Nivelles</h2>
                        <div className={sharedStyles["text-content-centered"]}>
                            La collégiale Sainte-Gertrude se situe juste à côté de la commune de Nivelles<br/>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/K8ZSwspxg4TmsnV27" rel="noreferrer">
                            Grand'Place 4, 1400 Nivelles</a><br/>
                            <img src={churchImage} alt="Eglise de Nivelles"
                                 id="eglise"/><br/>

                            <Link to="/itineraryDetails" className="btn btn-info"
                                  style={{marginTop: '1em', marginBottom: '1em', padding: '10px'}}
                                  onClick={scrollToTop}>
                                Plus d'info
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`container ${styles.container}`}>
                    <div className={`column ${styles.column}`}>
                        <h2>Château de la Rocq</h2>
                        <div className={sharedStyles["text-content-centered"]}>
                            Le château se situe à Arquennes (entité de Seneffe).<br/>
                            Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8"
                                        rel="noreferrer">Rue
                            Omer Lion, 7181 Seneffe</a><br/>
                            <img src={castleImage} alt="Chateau de la Rocq"
                                 id="chateau"/><br/>

                            <Link to="/itineraryDetails" className="btn btn-info"
                                  style={{marginTop: '1em', marginBottom: '1em', padding: '10px'}}
                                  onClick={scrollToTop}>
                                Plus d'info
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
});

export default withScroll(ItinerariesSection);
