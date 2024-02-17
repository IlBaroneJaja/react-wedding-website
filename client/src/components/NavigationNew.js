import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Offcanvas, NavDropdown} from 'react-bootstrap';
import styles from "./NavigationNew.module.css";
import {NavLink} from "react-router-dom";
import {scrollToTop} from "../utils/ScrollUtils";
import navigationItems from "../constants/NavigationConstants";

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
            // Note: substract size of the navbar to see the first line of the section
            const offsetTop = targetElement.offsetTop - 58;

            // Using smooth scrolling animation
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });

            // If you want to update the URL with the hash after scrolling
            window.history.pushState(null, null, target);

            setTimeout(() => {
                const newOffsetTop = targetElement.offsetTop - 58;
                window.scrollTo({
                    top: newOffsetTop,
                    behavior: 'instant',
                });
            }, 500);
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
        return items.map(({section, header, isExternalSection, dropdownItems}) => {
            // Tells if the section is pointing to an external page different from the main page.
            return (
                <React.Fragment key={section}>
                    {dropdownItems?.length > 0 ? (
                        <NavDropdown title={header} id="basic-nav-dropdown">
                            {dropdownItems.map(({title, href}) => {
                                    return (
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
                                    );
                                }
                            )}
                        </NavDropdown>
                    ) : (
                        <Nav.Item key={section}>
                            <NavLink
                                to={{
                                    pathname: isExternalSection ? `/${section}` : '/',
                                    hash: isExternalSection ? '' : `#${section}`,
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
            );
        });
    };

    return (
        <Navbar expand="lg" variant="light" bg="light" fixed="top" expanded={false} className={`${styles.customNavbar} position-sticky top-0`}
                style={{paddingTop: 0, paddingBottom: 0, fontFamily: "kalam, cursive"}}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <div className={styles.namesContainer}>
                        <span className={styles.names}>Yasmina</span><span id="andWord">and</span><span className={styles.names}>Alessandro</span>
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
