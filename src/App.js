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
import {gsap} from "gsap";
import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import 'scrollmagic-plugin-gsap3';
import {Power1} from 'gsap';

gsap.registerPlugin(ScrollMagic);


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
    const controller = new ScrollMagic.Controller();


    useEffect(() => {
        // Create a scene to pin the background image
        const pinScene = new ScrollMagic.Scene({
            triggerElement: '#intro-section',
            triggerHook: 0,
            duration: '200%' // Adjust duration as needed
        })
            .setPin('.introImage')
            .addTo(controller);

        // Use gsap instead of TweenMax
        const tweenOtherSections = gsap.to('.otherSections', {duration: 1, y: '0%', ease: 'none'});

        // Create a scene to trigger moving the content sections downwards
        const scene = new ScrollMagic.Scene({
            triggerElement: '#itineraries', // Trigger at the content sections
            triggerHook: 0.5, // Trigger when content sections are at the middle of the viewport
            duration: '50%' // Move content sections downwards over 50% of their height
        });

        // Tween the y position
        scene.setTween(tweenOtherSections)
            .addTo(controller);

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

    const sectionRefs = {
        '#intro-section': introRef,
        '#itineraries': itinerariesRef,
        '#travel-info': travelInfoSectionRef,
        '#photoSlider': photoSliderSectionRef,
        '#accommodations': accommodationsSectionRef,
        '#fixed-image-2': fixedImage2SectionRef,
        '#gift-registries': giftRegistriesSectionRef,
        '#dress-code': dressCodeSectionRef,
        '#fixed-image-3': fixedImage3SectionRef,
        '#rsvps': rsvpSectionRef,
        // Add entries for other sections
    };

    const getSectionRef = (section) => sectionRefs[section] || null;

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
