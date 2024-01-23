import React, {useEffect} from 'react';
import sharedStyles from "../../index.module.css";
import styles from "./PhotoSliderSection.module.css";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Make sure to import the correct styles
import "./PhotoSliderSection.module.css";
import swiperPhoto1 from '../../images/aless_yas_belgique_mer.jpg';
import swiperPhoto2 from '../../images/aless_yas_belgique_meuse.jpg';
import swiperPhoto3 from '../../images/aless_yas_portugal_mer.jpg';

const PhotoSliderSection = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiperContainer', {
            // Swiper configuration options
            // For example:
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            preloadImages: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: function () {
                    // Initially hide navigation buttons
                    document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
                        button.style.display = 'none';
                    });
                },
                slideChange: function () {
                    // Show navigation buttons when the user interacts with the slider
                    document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
                        button.style.display = 'block';
                    });
                },
            }
        });
    }, []); // Empty dependency array means this effect runs once after the initial render


    return (
        <section id={styles["photoSlider"]} className={sharedStyles.otherSections} style={{height: "120vh !important"}}>
            <div className={styles.swiperContainer}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={swiperPhoto1} alt="swiper slide 1"/>
                    </div>
                    <div className="swiper-slide">
                        <img src={swiperPhoto2} alt="swiper slide 2"/>
                    </div>
                    <div className="swiper-slide">
                        <img src={swiperPhoto3} alt="swiper slide 3"/>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
}

export default PhotoSliderSection;