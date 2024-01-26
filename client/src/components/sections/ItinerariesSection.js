// ItinerariesSection.js
import React from 'react';
import sharedStyles from '../../index.module.css';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import withScroll from "../WithScroll";
import { scrollToTop } from '../../utils/ScrollUtils';



const ItinerariesSection = React.forwardRef(({ id }, ref) => {
    return (
        <Element name="itineraries">
            <section ref={ref} id={id} className={sharedStyles["content-section"]}
                     style={{padding: "50px", textAlign: "center"}}>
                <h1>Itinéraires et directions</h1>
                <div className={sharedStyles["text-content-centered"]}>
                    Afin de vous faciliter la tâche, nous avons expliqué la démarche à suivre pour
                    repérer au mieux les différentes addresses de la journée.
                </div>
                <h2>Hôtel de ville de Nivelles</h2>
                <div className={sharedStyles["text-content-centered"]}>
                    L'hôtel de ville se situe sur la place Albert Ier.<br/>
                    Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8" rel="noreferrer">Pl.
                    Albert Ier 2, 1400 Nivelles</a><br/>

                    <Link to="/page1" className="btn btn-info" onClick={scrollToTop}>
                        Go to Page 1
                    </Link>
                    Parking: se garer soit à la commune directement (peu de place, paiement à la borne
                    directement) <br/>

                    <iframe title="Map de la commune"
                            src="https://www.google.com/maps/embed?pb=!4v1705685712214!6m8!1m7!1sL-ZgpYig45eYrsorxLg7SA!2m2!1d50.59788438927192!2d4.322916919980566!3f111.19!4f15.299999999999997!5f0.7820865974627469"
                            width="400" height="300" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                            loading="lazy"></iframe>
                </div>
                <h2>Château de la Rocq</h2>
                <div className={sharedStyles["text-content-centered"]}>
                    Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8" rel="noreferrer">Rue
                    Omer Lion, 7181 Seneffe</a>
                </div>
                <iframe title="Map du chateau"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.504194088598!2d4.250856275733904!3d50.580581377986675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23497dac502b7%3A0x39d69b2588a504f5!2sCh%C3%A2teau%20de%20la%20Rocq!5e0!3m2!1sen!2sbe!4v1705685883607!5m2!1sen!2sbe"
                        width="600" height="450" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                        loading="lazy"></iframe>
            </section>
        </Element>
    );
});

export default withScroll(ItinerariesSection);
