import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Offcanvas, NavDropdown} from 'react-bootstrap';
import styles from "./NavigationNew.module.css";
import {NavLink} from "react-router-dom";
import {scrollToTop} from "../utils/ScrollUtils";

const NavigationNew = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);
    const [isNavbarHidden, setIsNavbarHidden] = React.useState(false);

    const handleToggleOffcanvas = () => {
        setShowOffcanvas((prev) => !prev);
        setIsNavbarHidden(!isNavbarHidden);
    };

    const handleOffcanvasExited = () => {
        // Reset isNavbarHidden after Offcanvas has fully exited
        // setIsNavbarHidden(true);
        setShowOffcanvas(false);
    };

    const smoothScrollTo = (target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;

            // Using smooth scrolling animation
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });

            // If you want to update the URL with the hash after scrolling
            window.history.pushState(null, null, target);
        }
    };

    const handleNavLinkClick = (target) => {
        scrollToTop(); // Scroll to top for NavLink clicks
        smoothScrollTo(target);
    };

    const handleOffcanvasLinkClick = (target) => {
        // scrollToTop(); // Scroll to top for NavLink clicks
        smoothScrollTo(target);
        handleToggleOffcanvas();
    };

    const createNavigationBody = (items, clickHandler) => {
        return items.map(({section, header, dropdownItems}) => (
            <React.Fragment key={section}>
                {dropdownItems?.length > 0 ? (
                    <NavDropdown title={header} id="basic-nav-dropdown">
                        {dropdownItems.map(({title, href}) => (
                                <React.Fragment key={title}>
                                    {href === "/" ? (
                                        <NavDropdown.Item
                                            href={`/#${section}`}
                                            to={{
                                                pathname: '/',
                                                hash: `#${section}`,
                                                state: {scrollToSection: true},
                                            }}
                                            onClick={() => clickHandler(`#${section}`)}
                                        >
                                            {title}
                                        </NavDropdown.Item>
                                    ) : (
                                        <NavDropdown.Item href={href}>{title}</NavDropdown.Item>
                                    )}
                                </React.Fragment>
                            )
                        )}
                    </NavDropdown>
                ) : (
                    <Nav.Item key={section}>
                        <NavLink
                            to={{
                                pathname: '/',
                                hash: `#${section}`,
                                state: {scrollToSection: true},
                            }}
                            onClick={() => clickHandler(`#${section}`)}
                            className={`nav-link`}
                        >
                            {header}
                        </NavLink>
                    </Nav.Item>
                )}
            </React.Fragment>
        ));
    };

    const navigationItems = [
        {section: 'intro-section', header: 'Home'},
        {
            section: 'itineraries', header: 'Infos', dropdownItems: [
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
        {section: 'timeline-info', header: 'Agenda'},
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
        {section: 'gift-registries', header: 'Liste de mariage'},
        {section: 'dress-code', header: 'Dress code'},
        {section: 'rsvps', header: "RSVP's"},
    ];

    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="top" expanded={false} className="position-sticky top-0"
                style={{paddingTop: 0, paddingBottom: 0, fontFamily: "kalam, cursive"}}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <div className={styles.namesContainer}>
                        <span id="names">Yasmina</span><span id="andWord">and</span><span id="names">Alessandro</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle onClick={handleToggleOffcanvas} aria-controls="offcanvasNavbar"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="me-0">
                        {createNavigationBody(navigationItems, handleNavLinkClick)}
                    </Nav>
                </Navbar.Collapse>
                <Offcanvas
                    show={showOffcanvas}
                    onHide={() => setShowOffcanvas(false)}
                    placement="end"
                    id="offcanvasNavbar"
                    fixed="top"
                    onExited={handleOffcanvasExited}
                    style={{fontFamily: "kalam, cursive"}}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Sections</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            {createNavigationBody(navigationItems, handleOffcanvasLinkClick)}
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavigationNew;
