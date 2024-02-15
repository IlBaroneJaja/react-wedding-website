import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./Story.module.css";
import withScroll from "../WithScroll";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBContainer,
    MDBIcon,
} from "mdb-react-ui-kit";

import photo_rencontre from "../../images/shooting_photo/shooting_assis_chateau.JPG";
import rencontre from "../../images/story/début_rencontre.jpg";
import premierVoyage from "../../images/story/premier_voyage.jpg";
import officialisation_couple from "../../images/story/début_rencontre.jpg";
import emmenagementNivelles from "../../images/story/emmenagement_nivelles.jpg";
import demandeElbe from "../../images/story/demande_en_mariage_ile_elbe.jpg"
import travaux_anvers from "../../images/story/travaux_airbnb_anvers.jpg";
import travaux_anvers2 from "../../images/story/travaux_airbnb_anvers_2.jpg";
import travaux_anvers3 from "../../images/story/travaux_airbnb_anvers_3.jpg";
import travaux_gilly from "../../images/story/travaux_gilly.jpg";
import travaux_gilly2 from "../../images/story/travaux_gilly_2.jpg";
import travaux_gilly3 from "../../images/story/travaux_gilly_3.jpg";

const items = [
    {
        title: "25 juillet 2020",
        cardTitle: "Notre rencontre",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "photo_rencontre",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Une fois les premiers rendez-vous d’été passés, il n’y avait déjà plus aucun doute. Nous avions vu en l’autre plus qu’un simple béguin d’été. C’est une vraie histoire d’amour qui avait commencé et il était donc temps d’officialiser cette nouvelle histoire.",
    },
    {
        title: "12 septembre 2020",
        cardTitle: "Officialisation de notre couple",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "photo_officialisation",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Une fois les premiers rendez-vous d’été passés, il n’y avait déjà plus aucun doute. Nous avions vu en l’autre plus qu’un simple béguin d’été. C’est une vraie histoire d’amour qui avait commencé et il était donc temps d’officialiser cette nouvelle histoire.",
    },
    {
        title: "Octobre 2020",
        cardTitle: "Notre premier voyage en amoureux",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Notre passion commune pour les voyages ne se fit pas attendre puisque moins de 3 mois notre rencontre, nous avions déjà décidé de partir à la découverte de Porto. Covid ou pas, rien ne nous arrêtait !",
    },
    {
        title: "1er mai 2022",
        cardTitle: "Aménagement à Nivelles",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Après 1 an et demi de voyages et de belles expériences, nous avions fait le constat que le temps passé ensemble n’était tout simplement pas assez suffisant. Il était donc temps de quitter nos colocations respectives pour aménager à deux. Une nouvelle aventure commença !",
    },
    {
        title: "12 septembre 2022 ",
        cardTitle: "Demande en mariage",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Après un voyage rempli de belles surprises pour nos deux ans à l’île d’Elbe, Alessandro termina le séjour en beauté avec une dernière et grande surprise… La demande en mariage tant attendue. Evidemment, la réponse fut un grand OUI rempli de beaucoup d’émotions.",
    },
    {
        title: "Novembre-Décembre 2022",
        cardTitle: "Premier projet commun - Aménagement d'un appartement",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Après ce beau voyage en septembre et toutes ces émotions, nous étions déjà repartis sur un autre de nos objectifs de vie, la rentabilité immobilière. Et la fin d’année 2022 fut bien chargée en ce moment avec l’aménagement et la mise en œuvre AIRBNB d’Alessandro à Anvers. Notre premier projet immobilier mais certainement pas le dernier !",
    },
    {
        title: "Septembre 2023",
        cardTitle: "Deuxième projet commun - Rénovation d'une maison",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "Le second projet immobilier ne se fit pas attendre trop longtemps. Après l’airbnb, Yasmina est également devenue propriétaire d’une maison à Charleroi, ce qui nous a permis d’y aménager une colocation. L’été 2023 fut plutôt bien chargé mais nous avons pû atteindre notre nouvel objectif, devenir tous les deux rentiers !",
    },
];

const StoryComponent = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id}>
            <h1 style={{paddingTop: "100px", textAlign: "center"}}>Notre histoire</h1>
            <MDBContainer fluid className='py-5' style={{ backgroundColor: "#fdf9f4" }}>
                <div className={styles['main-timeline-2']}>
                    <div className={`${styles['timeline-2']} ${styles['left-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={photo_rencontre}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Notre rencontre</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> 25 juillet 2020
                                </h5>
                                <p className='mb-0'>
                                    Une fois les premiers rendez-vous d’été passés, il n’y avait déjà plus aucun doute.
                                    Nous avions vu en l’autre plus qu’un simple béguin d’été. C’est une vraie histoire
                                    d’amour qui avait commencé et il était donc temps d’officialiser cette nouvelle histoire.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['right-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={rencontre}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="photo officialisation couple"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Officialisation de notre couple</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> 12 septembre 2020
                                </h5>
                                <p className='mb-0'>
                                    Une fois les premiers rendez-vous d’été passés, il n’y avait déjà plus aucun doute.
                                    Nous avions vu en l’autre plus qu’un simple béguin d’été. C’est une vraie histoire
                                    d’amour qui avait commencé et il était donc temps d’officialiser cette nouvelle histoire.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['left-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={premierVoyage}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Notre premier voyage en amoureux</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> Octobre 2020
                                </h5>
                                <p className='mb-0'>
                                    Notre passion commune pour les voyages ne se fit pas attendre puisque moins de 3 mois
                                    après notre rencontre, nous avions déjà décidé de partir à la découverte de Porto.
                                    Covid ou pas, rien ne nous arrêtait !
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['right-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={emmenagementNivelles}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Emménagement à Nivelles</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> 1er mai 2022
                                </h5>
                                <p className='mb-0'>
                                    Après 1 an et demi de voyages et de belles expériences, nous avions fait le constat
                                    que le temps passé ensemble n’était tout simplement pas assez suffisant.
                                    Il était donc temps de quitter nos colocations respectives pour aménager à deux.
                                    Une nouvelle aventure commença !
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['left-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={demandeElbe}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Demande en mariage</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> 12 septembre 2022
                                </h5>
                                <p className='mb-0'>
                                    Après un voyage rempli de belles surprises pour nos deux ans à l’île d’Elbe, Alessandro
                                    termina le séjour en beauté avec une dernière et grande surprise… La demande en mariage
                                    tant attendue. Evidemment, la réponse fut un grand OUI rempli de beaucoup d’émotions.
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['right-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={travaux_anvers}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Premier projet commun - Aménagement d'un appartement</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> Novembre-Décembre 2022
                                </h5>
                                <p className='mb-0'>
                                    Après ce beau voyage en septembre et toutes ces émotions, nous étions déjà repartis
                                    sur un autre de nos objectifs de vie, la rentabilité immobilière. Et la fin d’année 2022
                                    fut bien chargée en ce moment avec l’aménagement et la mise en œuvre AIRBNB d’Alessandro
                                    à Anvers. Notre premier projet immobilier mais certainement pas le dernier !
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>

                    <div className={`${styles['timeline-2']} ${styles['left-2']}`}>
                        <MDBCard>
                            <MDBCardImage
                                src={travaux_gilly3}
                                style={{ height: "400px", objectFit: "cover"}}
                                alt="Responsive image"
                                position="top"
                            />
                            <MDBCardBody className='p-4'>
                                <h4 className='fw-bold mb-4'>Deuxième projet commun - Rénovation d'une maison</h4>
                                <h5 className='text-muted mb-4 fw-bold'>
                                    <MDBIcon far icon="clock" /> Septembre 2023
                                </h5>
                                <p className='mb-0'>
                                    Le second projet immobilier ne se fit pas attendre trop longtemps. Après l’airbnb,
                                    Yasmina est également devenue propriétaire d’une maison à Charleroi, ce qui nous a permis
                                    d’y aménager une colocation. L’été 2023 fut plutôt bien chargé mais nous avons pû atteindre
                                    notre nouvel objectif, devenir tous les deux rentiers !
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </MDBContainer>
        </section>
    );
});
export default withScroll(StoryComponent);