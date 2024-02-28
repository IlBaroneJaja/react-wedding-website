import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./Story.module.css";
import withScroll from "../WithScroll";
import {MDBContainer} from "mdb-react-ui-kit";
import storyElements from "../../constants/StoryConstants";
import StoryCard from "./StoryCard";

const StoryComponent = React.forwardRef(({id}, ref) => {
    return (
        <>
            <section id="story-intro-parallax"
                     className={` d-flex align-items-start justify-content-center ${styles.introSection} ${styles.parallaxEffect}`}>

            </section>
            <section ref={ref} id={id}>
                <h1 style={{paddingTop: "30px", textAlign: "center"}}>Notre histoire</h1>
                <MDBContainer fluid className='py-5' style={{backgroundColor: "#fdf9f4"}}>
                    <div className={styles['main-timeline-2']}>
                        {storyElements.map(item => {
                            return <StoryCard
                                image={item.media.source.url}
                                imageAlt={item.media.name}
                                title={item.cardTitle}
                                content={item.cardDetailedText}
                                date={item.title}
                                orientation={item.orientation}
                            />
                        })}
                    </div>
                </MDBContainer>
            </section>
        </>
    );
});
export default withScroll(StoryComponent);