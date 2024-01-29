import React, {useState, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./PhotoSliderSection.module.css";

import swiperPhoto1 from '../../../images/shooting_photo/5ccf35f2-8981-4b3b-90a0-edbd6dd56ba9.jpeg';
import swiperPhoto2 from '../../../images/shooting_photo/76fc2807-46b3-483f-aea1-486bb0d44eab.jpeg';
import swiperPhoto3 from '../../../images/shooting_photo/221aa811-2afa-4945-9475-5844c14a4c5a.jpeg';

const PhotoSwiper = () => {
    const photos = [swiperPhoto1, swiperPhoto2, swiperPhoto3];
    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            // Add more breakpoints as needed
        ],
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handlePreviousClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <section id={styles.photoSlider}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{position: 'relative'}}
            >
                <Slider {...settings} ref={sliderRef}>
                    {photos.map((photo, index) => (
                        <div key={index}>
                            <img
                                src={photo}
                                alt={`Slider pic ${index + 1}`}
                                style={{width: '100%'}}
                            />
                        </div>
                    ))}
                </Slider>

                {isHovered && (
                    <div className={styles.triangleButtons}>
                        <button
                            className={styles.triangleButton}
                            onClick={handlePreviousClick}
                        >&lt;</button>
                        <button
                            className={styles.triangleButton}
                            onClick={handleNextClick}
                        >&gt;</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PhotoSwiper;


