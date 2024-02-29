import React from "react";
import styles from "./FloatingImageRow.module.css";
import ZoomableImage from "../../utils/ZoomableImage";

const FloatingImageRow = ({image, altImage, floatDirection = "left", content}) => {
    const isLeftDirection = floatDirection === "left";

    const imageStyle = {
        maxWidth: "100%",
        width: "400px",
        height: "100%",
        objectFit: "cover",
        marginRight: isLeftDirection ? "30px" : "0",
        marginLeft: isLeftDirection ? "0" : "30px",
        float: floatDirection,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: "20px"
    };
    return (
        <>
            <div className="row align-items-center justify-content-center my-3">
                <div className="col-md-10 p-0">
                    <div style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        height: "auto",
                        width: "100%"
                    }}>
                        <ZoomableImage image={image} alt={altImage} imageStyle={imageStyle}/>
                        <p style={{textAlign: "justify"}}>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloatingImageRow;
