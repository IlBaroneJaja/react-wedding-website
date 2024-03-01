const navigationItems = [
    {section: 'intro-section', header: 'Home', isExternalSection: false},
    {section: 'timeline-info', header: 'Agenda', isExternalSection: false},
    {section: 'accommodations', header: 'Hébergements', isExternalSection: false},
    {section: 'dress-code', header: 'Dress code', isExternalSection: false},
    {section: 'gift-registries', header: 'Cadeaux', isExternalSection: false},
    {
        section: 'infos', header: 'Infos',  isExternalSection: true, dropdownItems: [
            {
                title: "Détails itinéraires",
                href: "/itineraryDetails"
            },
            {
                title: "Détails hébergements",
                href: "/accommodationsDetails"
            },
            {
                title: "Notre histoire",
                href: "/our-story"
            },

        ]
    },
    {section: 'rsvps', header: "RSVP's", isExternalSection: false},
];

export default navigationItems;