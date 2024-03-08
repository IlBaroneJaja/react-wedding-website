import React from 'react';
import styles from "./GiftRegistriesSection.module.css";
import withScroll from "../../WithScroll";
import gifts from "../../../images/svg/gifts.svg";
import UnderlinedHeader from "../../UnderlinedHeader";


const GiftRegistriesSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id} className={styles.giftSection}>
            <UnderlinedHeader title="Liste de cadeaux"/>
            <div className="container my-2">
                <div className="p-5 text-center bg-body-transparent rounded-3">
                    <p className="col-lg-8 mx-auto fs-5">
                        Notre plus beau cadeau est évidemment de vous avoir à nos côtés lors de cette magnifique journée.
                        Toutefois, si vous souhaitez contribuer à la concrétisation de nos futurs projets (notamment
                        notre voyage en lune de miel),
                        plutôt que fleurir notre maison (qui en plus génèrera une petite
                        crise d’allergie au marié 😂), une urne sera mise à votre disposition le jour du mariage.
                    </p>
                    <br/>
                    <p className="col-lg-8 mx-auto fs-5">
                        Pour ceux qui préfèrent la version digitale, voici notre compte: BE37 0019 7366 1828
                    </p>
                    <img src={gifts} className="mb-4" width="80px" height="80px" alt="cadeaux"/>
                </div>
            </div>
        </section>
    );
});

export default withScroll(GiftRegistriesSection);