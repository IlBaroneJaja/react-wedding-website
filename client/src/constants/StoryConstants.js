import photo_rencontre from "../images/story/début_rencontre_2.jpg";
import officialisation from "../images/story/début_rencontre.jpg";
import premierVoyage from "../images/story/premier_voyage.jpg";
import emmenagementNivelles from "../images/story/emmenagement_nivelles_cartons.JPG";
import demandeElbe from "../images/story/demande_en_mariage_ile_elbe.jpg"
import travaux_anvers from "../images/story/travaux_airbnb_anvers.jpg";
import travaux_gilly4 from "../images/story/travaux_gilly_4.jpg";
import mariage from "../images/story/mariage_suite.jpg";

const storyElements = [
    {
        title: "25 juillet 2020",
        cardTitle: "Notre rencontre",
        media: {
            name: "photo_rencontre",
            source: {
                url: photo_rencontre
            },
            type: "IMAGE"
        },
        cardDetailedText: "C'est lors de l’été 2020 que nous avons eu la chance de nous rencontrer et de faire connaissance, pour la première fois à la Place Flagey de Bruxelles. Un premier rendez-vous mémorable qui ne fut évidemment pas le dernier…",
        orientation: "left"
    },
    {
        title: "12 septembre 2020",
        cardTitle: "Officialisation de notre couple",
        media: {
            name: "photo_officialisation",
            source: {
                url: officialisation
            },
            type: "IMAGE"
        },
        cardDetailedText: "Une fois les premiers rendez-vous d’été passés, il n’y avait déjà plus aucun doute. Nous avions vu en l’autre plus qu’un simple béguin d’été. C’est une véritable histoire d’amour qui avait commencé et nous nous sommes donc mis officiellement en couple ce jour-là.",
        orientation: "right"
    },
    {
        title: "Octobre 2020",
        cardTitle: "Notre premier voyage en amoureux",
        media: {
            name: "Commune",
            source: {
                url: premierVoyage
            },
            type: "IMAGE"
        },
        cardDetailedText: "Notre passion commune pour les voyages ne se fit pas attendre puisque moins de 3 mois après notre rencontre, nous avions déjà décidé de partir à la découverte de Porto. Covid ou pas, rien ne nous arrêtait !",
        orientation: "left"
    },
    {
        title: "1er mai 2022",
        cardTitle: "Aménagement à Nivelles",
        media: {
            name: "Commune",
            source: {
                url: emmenagementNivelles
            },
            type: "IMAGE"
        },
        cardDetailedText: "Après 1 an et demi de voyages et de belles aventures à deux, nous avions fait le constat que le temps passé ensemble n’était tout simplement pas assez suffisant. Nous avons donc décidé qu’il était temps de quitter nos colocations respectives afin de pouvoir vivre dans notre petit cocoon à deux. Une nouvelle aventure qui commença.",
        orientation: "right"
    },
    {
        title: "12 septembre 2022 ",
        cardTitle: "Demande en mariage",
        media: {
            name: "Commune",
            source: {
                url: demandeElbe
            },
            type: "IMAGE"
        },
        cardDetailedText: "Pour célébrer nos 2 ans, Alessandro décida de faire le grand saut en faisant sa demande en mariage. Cela s'est déroulé sur l'île d’Elbe dans un petit coin de paradis au bord de la mer. Évidemment, la réponse fut un grand « OUI! » avec beaucoup d’émotions.",
        orientation: "left"
    },
    {
        title: "Novembre-Décembre 2022",
        cardTitle: "Premier projet commun - Aménagement d'un appartement",
        media: {
            name: "Commune",
            source: {
                url: travaux_anvers
            },
            type: "IMAGE"
        },
        cardDetailedText: "Après ce magnifique voyage et la célébration de nos fiançailles, un autre projet nous attendait déjà pour la fin d’année 2022… Le lancement d’un Airbnb à Anvers. Un premier projet immobilier réalisé en couple qui ne fut pas de tout repos mais qui nous appris à travailler en équipe et à nous soutenir face à de nouveaux défis.",
        orientation: "right"
    },
    {
        title: "Été 2023",
        cardTitle: "Deuxième projet commun - Rénovation d'une maison",
        media: {
            name: "Commune",
            source: {
                url: travaux_gilly4
            },
            type: "IMAGE"
        },
        cardDetailedText: "Le second projet immobilier ne se fit pas attendre trop longtemps puisqu’en été 2023, nous nous sommes occupés du lancement d’une colocation à Charleroi. Cette nouvelle expérience nous a conduit à découvrir les « joies » des travaux de rénovation en couple. Un autre challenge qui nous a davantage soudés dans les moments plus compliqués comme dans les moments de célébration et d’accomplissement.",
        orientation: "left"
    },
    {
        title: "3 mai 2024",
        cardTitle: "Le mariage",
        media: {
            name: "mariage",
            source: {
                url: mariage
            },
            type: "IMAGE"
        },
        cardDetailedText: "Le début d’un nouveau chapitre et de nombreuses nouvelles aventures...",
        orientation: "right"
    },
];

export default storyElements;