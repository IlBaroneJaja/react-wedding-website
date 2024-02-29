import React, {Fragment} from "react";
import direction_castle1 from "../images/acces_chateau_1.jpg";
import direction_castle2 from "../images/acces_chateau_2.jpg";
import direction_parking_chateau from "../images/parking_chateau.png";
import churchImage from "../images/collegiale_nivelles.jpg";
import entreePrincipaleEglise from "../images/entree_principale_eglise.png";
import communeNivelles from "../images/hotel_de_ville_nivelles.jpeg";
import entreePrincipaleCommune from "../images/entree_principale_commune.png";
import carteParkingNivelles from "../images/carte_parking_nivelles.png"

const contentImageParking1 = <Fragment>
    Les places de parking sont limitées à Nivelles. À proximité cependant, vous pourrez
    trouver les parkings suivants:
    <ul style={{ listStylePosition: "inside", paddingLeft: "20px" }}>
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

    Plus d'infos sur les règles de stationnement sur le site de la commune de
    Nivelles:&nbsp;
    <a target="_blank"
       href="https://www.nivelles.be/ma-commune/vos-services-administratifs/mobilite/pcmn-stationnement/stationnement"
       rel="noreferrer">ici</a>
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
    Ier.<br/>
    Adresse: <a target="_blank" href="https://maps.app.goo.gl/QYokwRJQTkn8r23x7"
                rel="noreferrer">Pl.
    Albert Ier 2, 1400 Nivelles</a><br/>
</Fragment>;

const contentImageCommune2 = <Fragment>
    L'entrée de la commune pour le mariage civil se fera par la porte latérale du bâtiment comme indiqué sur la photo
    en jaune. La salle se trouve directement sur la droite, en rentrant.
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
    la commune de Nivelles, sur la grand-place de la ville.<br/>
    Adresse: <a target="_blank" href="https://maps.app.goo.gl/K8ZSwspxg4TmsnV27" rel="noreferrer">
    Grand'Place 4, 1400 Nivelles</a><br/><br/>
    Pour les possibilités de parking aux alentours, voir ici plus bas.
</Fragment>;

const contentImageCollegiale2 = <Fragment>
    Depuis les récents travaux de la collégiale, l'entrée de droite n'est plus accessible. Celle de
    gauche est donc devenue l'entrée principale des visiteurs.<br/><br/>
    Pour les possibilités de parking aux alentours, voir ici plus bas.
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
            url: entreePrincipaleEglise,
            alt: "entrée principale église"
        },
        floatDirection: "right",
        content: contentImageCollegiale2
    }
];


const contentImageLaRocq1 = <Fragment>
    L’adresse du Château de la Rocq est « Rue Omer Lion à 7181 Seneffe ». Toutefois,
    nous vous conseillons de ne pas encoder cette adresse ou « Château de la Rocq »
    dans votre GPS au risque que celui-ci vous fasse passer par un sentier boueux et
    utilisé par les chevaux (c’est l’expérience qui parle).
    <br/><br/>
    L’accès le plus facile que nous vous conseillons se fait via la rue:&nbsp;
    <a target="_blank" href="https://maps.app.goo.gl/hsqcKdNehXRwzgyn6"
       rel="noreferrer">Ham de
        la Rocq à 7181 Arquennes</a>.
    <br/><br/>
    Pour y accéder, nous vous conseillons d’encoder ce point de repère sur votre GSP
    qui est situé au croisement entre la rue Ham de la Rocq, l’avenue du vignoble et
    la rue Omer Lion. À ce croisement, vous y retrouverez le panneau d’indication
    blanc du château de la Rocq.
</Fragment>;

const contentImageLaRocq2 = <Fragment>
    Ensuite, vous croiserez un autre panneau à l’entrée du domaine qui vous
    indiquera de prendre à gauche pour accéder au château de la Rocq. Il ne reste
    plus
    qu'à longer le chemin jusqu'à atteindre l'entrée du château.
    Le parking est situé à l’arrière du château en le longeant par la droite comme
    indiqué sur le plan ci-dessous.
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