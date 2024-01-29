// ItineraryMoreDetails.js
import React from 'react';
import styles from './ItineraryMoreDetails.module.css'
import {Element} from 'react-scroll';
import withScroll from "../WithScroll";
import image from "../../images/itineraire_chateau.jpg";
import { XCircleFill } from 'react-bootstrap-icons';


const ItineraryMoreDetails = React.forwardRef(({id}, ref) => {
    return (
        <Element name="itineraryMoreDetails">
            <section ref={ref} id={id} className={styles.itineraryMoreDetailsPageContent}>
                {/*{sections.map((section, index) => (*/}
                {/*    <CollapsibleContent className={styles.collapsibleContent} key={index} title={section.title} content={section.content} />*/}
                {/*))}*/}
                <h1 style={{paddingTop: "50px"}}>Itinéraires: infos</h1>
                <div>
                    Afin de vous faciliter la tâche, nous avons expliqué la démarche à suivre pour
                    repérer au mieux les différentes addresses de la journée.
                </div>
                <h2>Hôtel de ville de Nivelles</h2>
                <h4>Comment accéder à la commune ?</h4>
                <div>
                    L'hôtel de ville se situe sur la place Albert Ier.<br/>
                    Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8" rel="noreferrer">Pl.
                    Albert Ier 2, 1400 Nivelles</a><br/>
                </div>

                <iframe title="Map de la commune"
                        src="https://www.google.com/maps/embed?pb=!4v1705685712214!6m8!1m7!1sL-ZgpYig45eYrsorxLg7SA!2m2!1d50.59788438927192!2d4.322916919980566!3f111.19!4f15.299999999999997!5f0.7820865974627469"
                        width="400" height="300" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                        loading="lazy"></iframe>
                <div>
                    Les places de parking sont limitées à Nivelles. A proximité cependant, vous pourrez trouver:
                    <ul>
                        <li>Parking de la commune, 50 places (payant) &nbsp;
                            <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8" rel="noreferrer">
                                (adresse)</a><br/>
                        </li>
                        <li>Parking centre ville, 20 places (max. 2h avant 18h)&nbsp;
                            <a target="_blank" href="https://maps.app.goo.gl/ypuSfnYtwXR5nz6YA" rel="noreferrer">
                                (adresse)</a><br/>
                        </li>
                        <li>Parking Roblet, 100 places (max. 2h avant 18h) &nbsp;
                            <a target="_blank" href="https://maps.app.goo.gl/QKuJyAjbxonwrrAa8" rel="noreferrer">
                                (adresse)</a><br/>
                        </li>
                        <li>Parking du Mont Saint Roch, 500 places (gratuit) &nbsp;
                            <a target="_blank" href="https://maps.app.goo.gl/ns6agm4Gp4Pmi22p6" rel="noreferrer">
                                (adresse)</a><br/>
                        </li>
                    </ul>

                    Plus d'infos sur les règles de stationnement sur le site de la commune de Nivelles:&nbsp;
                    <a target="_blank"
                       href="https://www.nivelles.be/ma-commune/vos-services-administratifs/mobilite/pcmn-stationnement/stationnement"
                       rel="noreferrer">ici</a>
                </div>
                <h2>Château de la Rocq</h2>
                <h4>Comment accéder au château ?</h4>
                <div>
                    Le château se situe à Arquennes (entité de Seneffe).<br/>
                    Adresse: <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8" rel="noreferrer">Rue
                    Omer Lion, 7181 Seneffe</a>
                </div>
                <div>
                    <XCircleFill color="red" size={24} />
                    L'accès le plus rapide se fait via la rue:&nbsp;
                    <a target="_blank" href="https://maps.app.goo.gl/YX7qoShJm5GvhCxeA" rel="noreferrer">
                    Ham. de la Rocq, 7181 Arquennes </a>
                </div>
                <iframe title="Map du chateau"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.504194088598!2d4.250856275733904!3d50.580581377986675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23497dac502b7%3A0x39d69b2588a504f5!2sCh%C3%A2teau%20de%20la%20Rocq!5e0!3m2!1sen!2sbe!4v1705685883607!5m2!1sen!2sbe"
                        width="400" height="300" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                        loading="lazy"></iframe>

                <img src={image} className={styles.directionImage} width="800px" alt="Directions chateau la Rocq"
                     id="direction_chateau"/>

            </section>
        </Element>
    );
});

export default withScroll(ItineraryMoreDetails);
