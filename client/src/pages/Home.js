import React, {useEffect, useRef} from 'react';
import IntroSection from '../components/root-page/sections/IntroSection';
import TimelineSection from '../components/root-page/sections/TimelineSection';
import PhotoSliderSection from '../components/root-page/sections/PhotoSliderSection';
import AccommodationsSection from '../components/root-page/sections/AccommodationsSection';
import FixedImage2Section from '../components/root-page/sections/FixedImageSection';
import GiftRegistriesSection from '../components/root-page/sections/GiftRegistriesSection';
import DressCodeSection from '../components/root-page/sections/DressCodeSection';
import RsvpSection from '../components/root-page/sections/RsvpSection';
import {useLocation} from "react-router-dom";
import Countdown from "../utils/CountDownTimer";
import image2 from "../images/shooting_photo/shooting_assis_chateau.JPG";
import image3 from "../images/shooting_photo/shooting_marche_escaliers.JPG";
import image4 from "../images/shooting_photo/shooting_parc_au_dessus.JPG";


function Home({guestInfo}) {
    const location = useLocation();
    const targetSectionRef = useRef(null);

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        const scrollToSection = urlSearchParams.get('scrollToSection') === 'true';

        if (location.hash === '#timeline-info' && scrollToSection) {
            // Scroll to the target section
            if (targetSectionRef.current) {
                targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <IntroSection id="intro-section" guestInfo={guestInfo} />
            <TimelineSection id="timeline-info" guestInfo={guestInfo} />
            <PhotoSliderSection id="photoSlider" />
            <AccommodationsSection id="accommodations" />
            <FixedImage2Section id="fixed-image" image={image2} index={2} />
            <GiftRegistriesSection id="gift-registries" />
            <FixedImage2Section id="fixed-image" image={image3} index={3} />
            <DressCodeSection id="dress-code" />
            <FixedImage2Section id="fixed-image" image={image4} index={4} />
            <RsvpSection id="rsvps" />
            <Countdown id="count-down"/>
        </div>
    );
}

export default Home;