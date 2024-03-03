import React from 'react';
import styles from "./DressCodeSection.module.css";
import withScroll from "../../WithScroll";
import bride from "../../../images/svg/bride-with-veil-medium-skin-tone-svgrepo-com.svg";
import groom from "../../../images/svg/groom-svgrepo-com.svg";
import suite from "../../../images/svg/suit-1-svgrepo-com.svg";
import UnderlinedHeader from "../../UnderlinedHeader";

const DressCodeSection = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id} className={styles.dressCodeSection}>
            <UnderlinedHeader title="Dress code de la journée"/>
            <div className="container px-4 py-5">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h2>Thème et dress code: quoi porter?</h2>
                        <p>Nous serions très heureux de vous voir habillés sur votre 31 ce jour là. Nous n'imposons pas
                            de thème
                            en particulier, mais nous demandons de respecter l'une ou l'autre couleur réservée pour la
                            mariée, le marié et le cortège de témoins et demoiselles d'honneur.
                        </p>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div style={{width: "fit-content", padding: "10px", backgroundColor: "#b1ceb9"}}
                                     className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-transparent bg-gradient fs-1 rounded-3">
                                    <img src={bride} width="40px" height="40px" alt="bride"/>
                                </div>
                                <h4 className="mb-0">Blanc pour la mariée</h4>
                                <p>Les tons de blanc seront réservés pour la mariée.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div style={{width: "fit-content", padding: "10px", backgroundColor: "#b1ceb9"}}
                                     className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-transparent bg-gradient fs-1 rounded-3">
                                    <img src={groom} width="40px" height="40px" alt="marié"/>
                                </div>
                                <h4 className="mb-0">Vert pour le marié et cortège marié(e)</h4>
                                <p>
                                    Les tons de vert seront réservés au marié, ainsi qu'aux témoins et
                                    demoiselles d'honneur.
                                </p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div style={{width: "fit-content", padding: "10px", backgroundColor: "#b1ceb9"}}
                                     className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-transparent bg-gradient fs-1 rounded-3">
                                    <img src={suite} width="40px" height="40px" alt="costume"/>
                                </div>
                                <h4 className="mb-0">Tenues conseillées</h4>
                                <p>
                                    Une tenue élégante est souhaitée (jeans et vêtements <i>casual</i> à éviter)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default withScroll(DressCodeSection);