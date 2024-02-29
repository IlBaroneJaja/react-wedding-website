import React, {Fragment} from "react";
import chambreChateau from "../images/chambreChateau.jpg";
import chateau from "../images/chateau_la_rocq_vue_dessus.jpg";
import styles from "../components/root-page/sections/IntroSection.module.css";


const contentImageHebergementChateau = <Fragment>
    <p>
        Le château de la Rocq dispose de 17 chambres avec lit double et 2 chambres avec lit simple qui
        sont mis à notre disposition pour la nuit du mariage du 3 au 4 mai 2024.
    </p>
    <p>
        La location d'une chambre (simple ou double) est de 135 € HTVA. Le prix comprend le petit
        déjeuner, les draps et les essuies. Le petit déjeuner est servis entre 10h et 12h. Les chambres
        doivent être libérées pour 11h.
    </p>
</Fragment>;

const contentImageChambreChateau = <Fragment>
    <p>
        En cas de demande de réservation d'une chambre, nous souhaiterions recevoir votre réponse pour
        le <span style={{padding: 0, fontWeight: "bold", color: "#ce6a00", textDecoration: "underline"}}>1er avril 2024</span> au plus tard. En ce qui concerne le mode de paiement des chambres, nous
        reviendrons vers vous pour fournir les détails.<br/><br/>
    </p>
</Fragment>


const imagesContainerHebergementChateau = [
    {
        image: {
            url: chateau,
            alt: "chateau la rocq"
        },
        floatDirection: "left",
        content: contentImageHebergementChateau
    },
    {
        image: {
            url: chambreChateau,
            alt: "chambres chateau"
        },
        floatDirection: "right",
        content: contentImageChambreChateau
    }
];

export default imagesContainerHebergementChateau;