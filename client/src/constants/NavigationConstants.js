const navigationItems = [
    {section: 'intro-section', header: 'Home', isExternalSection: false},
    {
        section: 'timeline-info', header: 'Infos', dropdownItems: [
            {
                title: "Agenda",
                href: "/",
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
                href: "/"
            },
            {
                title: "Détails hébergements",
                href: "/accommodationsDetails"
            }
        ]
    },
    {section: 'our-story', header: 'Notre histoire', isExternalSection: true},
    {section: 'gift-registries', header: 'Liste de mariage', isExternalSection: false},
    {section: 'dress-code', header: 'Dress code', isExternalSection: false},
    {section: 'rsvps', header: "RSVP's", isExternalSection: false},
];

export default navigationItems;