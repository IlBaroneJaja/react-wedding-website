const navigationItems = [
    {section: 'intro-section', header: 'Home', isExternalSection: false},
    {
        section: 'timeline-info', header: 'Infos', dropdownItems: [
            {
                title: "Agenda",
                href: "/home",
            },
            {
                title: "Détails itinéraires",
                href: "/itineraryDetails"
            }
        ]
    },
    {
        section: 'accommodations', header: 'Hébergements', dropdownItems: [
            {
                title: "Types",
                href: "/home",
            },
            {
                title: "Détails hébergements",
                href: "/accommodationsDetails"
            }
        ]
    },
    {section: 'dress-code', header: 'Dress code', isExternalSection: false},
    {section: 'gift-registries', header: 'Cadeaux', isExternalSection: false},
    {section: 'rsvps', header: "RSVP's", isExternalSection: false},
    {section: 'our-story', header: 'Notre histoire', isExternalSection: true},
];

export default navigationItems;