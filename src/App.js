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
import {useRef} from "react";

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
            <Navigation/>
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
