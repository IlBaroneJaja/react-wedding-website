import styles from "./Story.module.css";
import {MDBCard, MDBCardBody, MDBCardImage, MDBIcon} from "mdb-react-ui-kit";
import React from "react";

const StoryCard = ({image, imageAlt, title, date, content, orientation}) => {
    const cardOrientationStyle = orientation === "left" ? "left-2" : "right-2";
    return (
        <>
            <div className={`${styles['timeline-2']} ${styles[cardOrientationStyle]}`}>
                <MDBCard>
                    <MDBCardImage
                        src={image}
                        alt={imageAlt}
                        style={{height: "400px", objectFit: "cover"}}
                        position="top"
                    />
                    <MDBCardBody className='p-4'>
                        <h4 className='fw-bold mb-4'>{title}</h4>
                        <h5 className='text-muted mb-4 fw-bold'><MDBIcon far icon="clock"/> {date}</h5>
                        <p className='mb-0'>{content}</p>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>
    )
}

export default StoryCard;