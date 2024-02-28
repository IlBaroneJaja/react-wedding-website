import React from 'react';
import sharedStyles from "../../../index.module.css";
import withScroll from "../../WithScroll";
import gifts from "../../../images/svg/gifts.svg";
import sneezingMan from "../../../images/svg/sneezing-man.svg";


const GiftRegistriesSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id} className={sharedStyles.otherSections}>

            <h1 style={{textAlign: "center", paddingTop: "30px"}}>Liste de cadeaux</h1>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-transparent rounded-3">
                    <img src={gifts} className="mb-4" width="80px" height="80px" alt="cadeaux"/>
                    {/*<h1 className="text-body-emphasis">Cadeaux et attentions</h1>*/}

                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        Notre plus cadeau est évidemment de vous avoir à nos côtés lors de cette magnifique journée.
                        Toutefois, si vous souhaitez contribuer à la concrétisation de nos futurs projets, plutôt
                        que fleurir notre maison (qui en plus génèrera une petite crise d’allergie au marié
                        <img src={sneezingMan} className="mb-4" width="40px" height="40px" alt="homme éternuant"/>😂),
                        une urne sera mise à votre disposition le jour du mariage.
                    </p>
                    <br/>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        Pour ceux qui préfèrent la version digitale, voici notre compte: BE24 0016 1978 5310
                    </p>
                </div>
            </div>
        </section>
    );
});

export default withScroll(GiftRegistriesSection);