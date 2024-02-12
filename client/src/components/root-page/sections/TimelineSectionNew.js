import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./TimelineSectionNew.module.css";
import withScroll from "../../WithScroll";

import municipality from "../../../images/municipal-house.png";
import diamond from "../../../images/diamond-ring.png";
import champagne from "../../../images/champagne.png";
import cake from "../../../images/cake.png";
import dinner from "../../../images/dinner.png";
import party from "../../../images/dance.png";
import {Chrono} from 'react-chrono';

const items = [
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
    {
        title: "13h30",
        cardTitle: "Mariage à la commune",
        // cardSubtitle: "Mariage à la commune",
        media: {
            name: "Commune",
            source: {
                url: municipality
            },
            type: "IMAGE"
        },
        cardDetailedText: "This is the first event on the timeline.",
    },
];

const ImageIcon = ({src, alt}) => {
    const iconStyle = {
        width: '30px',
        height: '30px',
        background: `url(${src}) center / cover no-repeat`, // shorthand for background properties
    };

    return (
        <div style={iconStyle}>
            <img src={src} alt={alt} style={{visibility: 'hidden'}}/>
        </div>
    );
};

const TimelineElementLeft = ({src, alt}) => {
    const item1 = {
        alignSelf: "end",
        justifySelf: "end"
    }

    const item2 = {
        alignSelf: "start",
        justifySelf: "end"
    }

    const item3 = {
        gridRow: "1 / 3",
        gridColumn: "2",
        placeSelf: "center"
    }

    const iconStyle = {
        width: 'auto',
        height: '6rem',
        background: `url(${src})`, // shorthand for background properties
        visibility: 'hidden'
    };

    return (
        <div className={`grid-container ${styles.gridContainer}`}>
            <div className={`grid-item`} style={item1}><h3>13h30</h3></div>
            <div className={`grid-item`} style={item2}><p>Mariage commune</p></div>
            <div className={`grid-item`} style={item3}><img src={src} alt={alt} style={iconStyle}/></div>
        </div>
    );
};

const TimelineElementRight = ({src, alt, hour, description}) => {
    const item1 = {
        alignSelf: "end",
        justifySelf: "start"
    }

    const item2 = {
        alignSelf: "start",
        justifySelf: "start"
    }

    const item3 = {
        gridRow: "1 / 3",
        gridColumn: "1",
        placeSelf: "center"
    }

    const iconStyle = {
        width: 'auto',
        height: '6rem',
        background: `url(${src})`, // shorthand for background properties
        visibility: 'hidden'
    };

    return (
        <div className={`grid-container ${styles.gridContainer}`}>
            <div className={`grid-item`} style={item1}><h3>{hour}</h3></div>
            <div className={`grid-item`} style={item2}><p>{description}</p></div>
            <div className={`grid-item`} style={item3}><img src={src} alt={alt} style={iconStyle}/></div>
        </div>
    );
};

const customContent = [
    <TimelineElementLeft hour="13h30" description="Mariage commune" src={municipality} alt="commune de Nivelles"/>,
    <TimelineElementRight hour="14h30" description="Mariage collégiale" src={diamond} alt="Mariage Collégiale"/>,
    <TimelineElementLeft hour="17h00" description="Apéritif château" src={champagne} alt="Apéritif château"/>,
    <TimelineElementRight hour="20h00" description="Dîner" src={dinner} alt="Dîner"/>,
    <TimelineElementLeft hour="22h30" description="Gâteau" src={cake} alt="Gâteau"/>,
    <TimelineElementRight hour="23h00" description="Soirée" src={party} alt="Soirée"/>,
];

const TimelineSectionNew = React.forwardRef(({id}, ref) => {
    return (
        <section ref={ref} id={id} className={styles.stickyTimelineBackground}>
            <h1 style={{padding: "50px 0"}}>Planning de la journée</h1>

            <div className={styles.chronoTimeline} >
                <Chrono
                    theme={{ primary: 'black', secondary: 'white' }}
                    mode="VERTICAL_ALTERNATING"
                >
                    {customContent}
                </Chrono>
            </div>

        </section>
    );
});

export default withScroll(TimelineSectionNew);