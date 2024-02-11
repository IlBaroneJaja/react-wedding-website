import React, {useState, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./PhotoSliderSection.module.css";

import swiperPhoto1 from '../../../images/shooting_photo/shooting_porte_chateau.JPG';
import swiperPhoto2 from '../../../images/shooting_photo/shooting_pose_mur.JPG';
import swiperPhoto3 from '../../../images/shooting_photo/shooting_regard_enlace.jpg';
import swiperPhoto4 from '../../../images/shooting_photo/shooting_saut_allee_bois.jpg';


const PhotoSwiper = () => {
    const photos = [swiperPhoto1, swiperPhoto2, swiperPhoto3, swiperPhoto4];
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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


