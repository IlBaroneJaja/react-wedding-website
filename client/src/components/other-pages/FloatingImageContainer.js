import React, {Fragment} from "react";
import FloatingImageRow from "./FloatingImageRow";
const FloatingImageContainer = ({titleContent, titleId, containerElements}) => {

    return (
        <>
            <h2 id={titleId} style={{textAlign:"center"}} className="mt-5">{titleContent}</h2>
            <div className="container-fluid m-0">
                {containerElements.map((imagesRow, index) =>
                    <FloatingImageRow
                        key={index}
                        image={imagesRow.image.url}
                        altImage={imagesRow.image.alt}
                        floatDirection={imagesRow.floatDirection}
                        content={imagesRow.content}
                    />
                )}

            </div>

        </>
    )
}

export default FloatingImageContainer;
