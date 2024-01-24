import React from 'react';
import IntroSection from '../components/sections/IntroSection';
import ItinerariesSection from '../components/sections/ItinerariesSection';
import TravelInfoSection from '../components/sections/TravelInfoSection';
import PhotoSliderSection from '../components/sections/PhotoSliderSection';
import AccommodationsSection from '../components/sections/AccommodationsSection';
import FixedImage2Section from '../components/sections/FixedImage2Section';
import GiftRegistriesSection from '../components/sections/GiftRegistriesSection';
import DressCodeSection from '../components/sections/DressCodeSection';
import FixedImage3Section from '../components/sections/FixedImage3Section';
import RsvpSection from '../components/sections/RsvpSection';

function Home() {
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