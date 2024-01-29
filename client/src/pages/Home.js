import React, {useEffect, useRef} from 'react';
import IntroSection from '../components/root-page/sections/IntroSection';
import ItinerariesSection from '../components/root-page/sections/ItinerariesSection';
import TravelInfoSection from '../components/root-page/sections/TravelInfoSection';
import PhotoSliderSection from '../components/root-page/sections/PhotoSliderSection';
import AccommodationsSection from '../components/root-page/sections/AccommodationsSection';
import FixedImage2Section from '../components/root-page/sections/FixedImage2Section';
import GiftRegistriesSection from '../components/root-page/sections/GiftRegistriesSection';
import DressCodeSection from '../components/root-page/sections/DressCodeSection';
import FixedImage3Section from '../components/root-page/sections/FixedImage3Section';
import RsvpSection from '../components/root-page/sections/RsvpSection';
import {useLocation} from "react-router-dom";

function Home() {
    const location = useLocation();
    const targetSectionRef = useRef(null);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        const scrollToSection = urlSearchParams.get('scrollToSection') === 'true';

        if (location.hash === '#travel-info' && scrollToSection) {
            // Scroll to the target section
            if (targetSectionRef.current) {
                targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <IntroSection id="intro-section" />
            <ItinerariesSection id="itineraries" />
            <TravelInfoSection id="travel-info" />
            <PhotoSliderSection id="photoSlider" />
            <AccommodationsSection id="accommodations" />
            <FixedImage2Section id="fixed-image-2" />
            <GiftRegistriesSection id="gift-registries" />
            <DressCodeSection id="dress-code" />
            <FixedImage3Section id="fixed-image-3" />
            <RsvpSection id="rsvps" />
        </div>
    );
}

export default Home;