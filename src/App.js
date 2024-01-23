import './App.css';
import React from 'react';
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import TravelInfoSection from "./components/sections/TravelInfoSection";
import FixedImage2Section from "./components/sections/FixedImage2Section";
import IntroSection from "./components/sections/IntroSection";
import ItinerariesSection from "./components/sections/ItinerariesSection";
import PhotoSliderSection from "./components/sections/PhotoSliderSection";
import AccommodationsSection from "./components/sections/AccommodationsSection";
import GiftRegistriesSection from "./components/sections/GiftRegistriesSection";
import DressCodeSection from "./components/sections/DressCodeSection";
import FixedImage3Section from "./components/sections/FixedImage3Section";
import RsvpSection from "./components/sections/RsvpSection";
import {useEffect, useRef} from "react";
import {Power1, TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic';


function App() {
    const introRef = useRef(null);
    const itinerariesRef = useRef(null);
    const travelInfoSectionRef = useRef(null);
    const photoSliderSectionRef = useRef(null);
    const accommodationsSectionRef = useRef(null);
    const fixedImage2SectionRef = useRef(null);
    const giftRegistriesSectionRef = useRef(null);
    const dressCodeSectionRef = useRef(null);
    const fixedImage3SectionRef = useRef(null);
    const rsvpSectionRef = useRef(null);


    useEffect(() => {
        // Initialize ScrollMagic here and set up scenes as needed
        const controller = new ScrollMagic.Controller();

        // Set up scenes based on your requirements
        // For example:
        new ScrollMagic.Scene({
            triggerElement: '#intro-section',
            triggerHook: 0.5,
        })
            .setClassToggle('#intro-section', 'active') // Add or remove class when scrolling
            .addTo(controller);

        // Set up scenes for other sections as needed

        return () => {
            // Clean up ScrollMagic on component unmount if needed
            controller.destroy();
        };
    }, []);

    const scrollToSection = (e, section) => {
        e.preventDefault();
        const targetRef = getSectionRef(section);
        if (targetRef.current) {
            const scrollTween = new TimelineMax().to(window, 0.5, {
                scrollTo: {y: targetRef.current.offsetTop, autoKill: false},
                ease: Power1.easeInOut,
            });

            new ScrollMagic.Scene({
                triggerElement: targetRef.current,
                triggerHook: 0.5,
            })
                .setTween(scrollTween)
                .addTo(new ScrollMagic.Controller());
        }
    };

    const getSectionRef = (section) => {
        switch (section) {
            case '#intro-section':
                return introRef;
            case '#itineraries':
                return itinerariesRef;
            case '#travel-info':
                return travelInfoSectionRef;
            case '#photoSlider':
                return photoSliderSectionRef;
            case '#accommodations':
                return accommodationsSectionRef;
            case '#fixed-image-2':
                return fixedImage2SectionRef;
            case '#gift-registries':
                return giftRegistriesSectionRef;
            case '#dress-code':
                return dressCodeSectionRef;
            case '#fixed-image-3':
                return fixedImage3SectionRef;
            case '#rsvps':
                return rsvpSectionRef;
            // Add cases for other sections
            default:
                return null;
        }
    };

    return (
        <div>
            <Navigation scrollToSection={scrollToSection}/>
            <IntroSection id="intro-section"/>
            <ItinerariesSection id="itineraries"/>
            <TravelInfoSection id="travel-info"/>
            <PhotoSliderSection id="photoSlider"/>
            <AccommodationsSection id="accommodations"/>
            <FixedImage2Section id="fixed-image-2"/>
            <GiftRegistriesSection id="gift-registries"/>
            <DressCodeSection id="dress-code"/>
            <FixedImage3Section id="fixed-image-3"/>
            <RsvpSection id="rsvps"/>
            <Footer/>
        </div>
    );
}

export default App;
