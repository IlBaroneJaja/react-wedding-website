import React from "react";
import {Element} from "react-scroll";
import styles from "./AccommodationsMoreDetails.module.css";
import withScroll from "../WithScroll";

const AccommodationsMoreDetails = React.forwardRef(({id}, ref) => {
    return (
        <Element name="accommodationsMoreDetails">
            <section ref={ref} id={id} className={styles.accommodationsMoreDetailsPageContent}>
                <h1 style={{paddingTop: "100px"}}>Hébergements: infos</h1>
                <div>
                    Pour des questions de facilité, il est également possible de réserver un hébergement
                    à proximité de lieu des festivités (Château de la Rocq).
                </div>


            </section>
        </Element>
    );
});

export default withScroll(AccommodationsMoreDetails);