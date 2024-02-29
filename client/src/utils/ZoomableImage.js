import React, {useCallback, useState} from 'react';
import {Controlled as ControlledZoom} from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomableImage = ({image, alt, imageStyle}) => {
    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom);
    }, [])

    return (
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <img
                src={image}
                alt={alt}
                style={imageStyle}
            />
        </ControlledZoom>
    )
}

export default ZoomableImage;