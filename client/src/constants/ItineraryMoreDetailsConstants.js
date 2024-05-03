import React, {Fragment} from "react";
import direction_castle1 from "../images/acces_chateau_1.jpg";
import direction_castle2 from "../images/acces_chateau_2.jpg";
import direction_parking_chateau from "../images/parking_chateau.png";
import churchImage from "../images/collegiale_nivelles.jpg";
import entreePrincipaleEglise from "../images/entree_principale_eglise.png";
import entreePrincipaleEgliseUpdated from "../images/entree_principale_eglise_updated.png";
import communeNivelles from "../images/hotel_de_ville_nivelles.jpeg";
import entreePrincipaleCommune from "../images/entree_principale_commune.png";
import carteParkingNivelles from "../images/carte_parking_nivelles.png"

const contentImageParking1 = <Fragment>
    Les places de parking sont limitées à Nivelles. Cependant, vous trouverez les parkings suivants, à proximité:
    <ul style={{listStylePosition: "inside", paddingLeft: "20px"}}>
        <li>Parking de la commune, 50 places (payant) &nbsp;
            <a target="_blank" href="https://maps.app.goo.gl/mK2fjZWn3TByGbuK8"
               rel="noreferrer">(adresse)</a>
        </li>
        <li>Parking centre ville, 20 places (max. 2h avant 18h)&nbsp;
            <a target="_blank" href="https://maps.app.goo.gl/ypuSfnYtwXR5nz6YA"
               rel="noreferrer">(adresse)</a>
        </li>
        <li>Parking Roblet, 100 places (max. 2h avant 18h) &nbsp;
            <a target="_blank" href="https://maps.app.goo.gl/QKuJyAjbxonwrrAa8"
               rel="noreferrer">(adresse)</a>
        </li>
        <li>Parking du Mont Saint Roch, 500 places (gratuit) &nbsp;
            <a target="_blank" href="https://maps.app.goo.gl/ns6agm4Gp4Pmi22p6"
               rel="noreferrer">(adresse)</a>
        </li>
    </ul>

    <i style={{color: "#EE8923"}}><u>Note:</u> Étant donné les distances à pied qui peuvent séparer la Collégiale des parkings, nous vous conseillons
        de déposer au préalable vos proches au plus près du lieu de célébration, avant d'aller vous garer.</i>
</Fragment>;

const imagesContainerParking = [
    {
        image: {
            url: carteParkingNivelles,
            alt: "infos parking de nivelles"
        },
        floatDirection: "left",
        content: contentImageParking1
    }
];


const contentImageCommune1 = <Fragment>
    La commune où nous célébrerons notre mariage civil se situe sur la place Albert
    Ier.<br/><br/>
    Adresse: <a target="_blank" href="https://maps.app.goo.gl/QYokwRJQTkn8r23x7"
                rel="noreferrer">Pl.
    Albert Ier 2, 1400 Nivelles</a><br/><br/>
    Pour les possibilités de parking aux alentours, voir <a href="#parkingInfo" rel="noreferrer">ici</a> plus bas.
</Fragment>;

const contentImageCommune2 = <Fragment>
    L'entrée de la commune pour le mariage civil se fera par la porte latérale du bâtiment comme indiqué en jaune sur la
    photo. La salle se trouve directement sur la droite, en rentrant.
</Fragment>;

const imagesContainerCommune = [
    {
        image: {
            url: communeNivelles,
            alt: "direction commune"
        },
        floatDirection: "left",
        content: contentImageCommune1
    },
    {
        image: {
            url: entreePrincipaleCommune,
            alt: "infos parkings environnants"
        },
        floatDirection: "right",
        content: contentImageCommune2
    }
];

const contentImageCollegiale1 = <Fragment>
    La collégiale Sainte-Gertrude où nous célébrerons notre mariage religieux se situe juste à côté
    de
    la commune de Nivelles, sur la grand-place de la ville.<br/><br/>
    Adresse: <a target="_blank" href="https://maps.app.goo.gl/K8ZSwspxg4TmsnV27" rel="noreferrer">
    Grand'Place 4, 1400 Nivelles</a><br/><br/>
    Pour les possibilités de parking aux alentours, voir <a href="#parkingInfo" rel="noreferrer">ici</a> plus bas.
</Fragment>;

const contentImageCollegiale2 = <Fragment>
    <b><u style={{color: '#ee8923'}}>Mise à jour du 03/05/2024: </u></b><br/>
    Depuis les récents travaux de la collégiale, l'entrée de <s>droite</s> gauche n'est plus accessible. Celle de &nbsp;
    <s>gauche</s> droite est donc devenue l'entrée principale des visiteurs.
</Fragment>;

const imagesContainerCollegiale = [
    {
        image: {
            url: churchImage,
            alt: "direction eglise"
        },
        floatDirection: "left",
        content: contentImageCollegiale1
    },
    {
        image: {
            url: entreePrincipaleEgliseUpdated,
            alt: "entrée principale église"
        },
        floatDirection: "right",
        content: contentImageCollegiale2
    }
];


const contentImageLaRocq1 = <Fragment>
    L’adresse du Château de la Rocq est « Rue Omer Lion à 7181 Seneffe ». Toutefois,
    nous vous recommandons de ne pas encoder cette adresse dans votre GPS ou « Château de la Rocq »,
    au risque que celui-ci vous fasse passer par un sentier boueux et
    utilisé par les chevaux (c’est l’expérience qui parle).
    <br/><br/>
    L’accès le plus facile que nous vous conseillons se fait via la rue:&nbsp;
    « Ham de la Rocq » à 7181 Arquennes. <br/><br/>
    Pour y accéder, vous pouvez introduire
    <a target="_blank" href="https://maps.app.goo.gl/hsqcKdNehXRwzgyn6"
       rel="noreferrer"> ce point de repère </a>
    sur votre GSP qui est situé au croisement entre la rue Ham de la Rocq, l’avenue du vignoble et
    la rue Omer Lion. À ce croisement, vous y retrouverez le panneau d’indication
    blanc repris sur la photo.
</Fragment>;

const contentImageLaRocq2 = <Fragment>
    Ensuite, vous croiserez un autre panneau à l’entrée du domaine qui vous
    indiquera de prendre à gauche pour accéder au château de la Rocq. Il ne vous reste
    plus qu'à longer le chemin jusqu'à atteindre l'entrée du château.
</Fragment>

const contentImageLaRocq3 = <Fragment>
    Le parking est situé à l’arrière du château en le longeant par la droite comme
    indiqué sur la photo.
</Fragment>

const imagesContainerChateauLaRocq = [
    {
        image: {
            url: direction_castle1,
            alt: "direction chateau 1"
        },
        floatDirection: "left",
        content: contentImageLaRocq1
    },
    {
        image: {
            url: direction_castle2,
            alt: "direction chateau 2"
        },
        floatDirection: "right",
        content: contentImageLaRocq2
    },
    {
        image: {
            url: direction_parking_chateau,
            alt: "direction parking chateau"
        },
        floatDirection: "left",
        content: contentImageLaRocq3
    },
];

export default imagesContainerChateauLaRocq;
export {imagesContainerCollegiale, imagesContainerCommune, imagesContainerParking};