import React from 'react';
import ItineraryMoreDetails from "../components/other-pages/ItineraryMoreDetails";


const ItineraryMoreDetailsPage = ({guestInfo, guestInfoFromContext}) => (
    <ItineraryMoreDetails id="itineraryMoreDetails" guestInfoData={guestInfo} guestInfoFromContext={guestInfoFromContext} />
);

export default ItineraryMoreDetailsPage;
