import React from 'react';
import "../../index.module.css";
import "./TravelInfoSection.module.css"
import timelineBgPhoto from "../../images/flower_background_section.png";

const TravelInfoSection = () => {
    return (
        <section id="travel-info" className="sticky-timeline-background">
            <div className="text-on-top-of-image" style={{color: "black"}}>
                <h1>Planning de la journée</h1>
            </div>
            <img src={timelineBgPhoto} alt="timeline_background"
                 className="stickyImage background-image"/>
            <img src="/src/images/transparent_timeline_google.png" alt="timeline" id="timeline"
                 className="stickyImage timeline-image"/>
        </section>
    );
}

export default TravelInfoSection;