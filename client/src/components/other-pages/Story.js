import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./Story.module.css";
import withScroll from "../WithScroll";
import {MDBContainer} from "mdb-react-ui-kit";
import storyElements from "../../constants/StoryConstants";
import StoryCard from "./StoryCard";
import UnderlinedHeader from "../UnderlinedHeader";

const StoryComponent = React.forwardRef(({id}, ref) => {
    return (
        <>
            <section ref={ref} id={id}>
                <UnderlinedHeader title="Notre histoire" />
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