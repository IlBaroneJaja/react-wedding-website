import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Offcanvas, NavDropdown, Dropdown} from 'react-bootstrap';
import styles from "./NavigationNew.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {scrollToTop} from "../utils/ScrollUtils";
import navigationItems from "../constants/NavigationConstants";
import {RiLogoutBoxLine, RiShieldUserFill} from "react-icons/ri";
import {AuthContext} from "./authentication/AuthProvider";

const NavigationNew = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);
    const [isNavbarHidden, setIsNavbarHidden] = React.useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, login, logout } = useContext(AuthContext);


    const handleLogout = () => {
        // Implement your login logic here

        const user = localStorage.getItem('user');

        logout();
        if (user) {
            localStorage.removeItem('user');
            localStorage.removeItem('guestInfo');
            navigate('/');
        } else {
            navigate('/');
        }

    };

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
                                            {href === "/home" ? (
                                                <NavDropdown.Item
                                                    href={`${href}#${section}`}
                                                    to={{
                                                        pathname: `${href}`,
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
                                    pathname: isExternalSection ? `/${section}` : '/home',
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
                style={{paddingTop: 0, paddingBottom: 0}}>
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
                        <Dropdown align="end">
                            <Dropdown.Toggle id="userDropdown" className="btn" variant="transparent">
                                <RiShieldUserFill />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
                <Offcanvas
                    show={showOffcanvas}
                    onHide={() => setShowOffcanvas(false)}
                    placement="end"
                    id="offcanvasNavbar"
                    fixed="top"
                    onExited={handleOffcanvasExited}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Sections</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            {createNavigationBody(navigationItems, handleOffcanvasLinkClick)}
                        </Nav>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, marginBottom: '1rem', marginLeft: '1rem' }}>
                            <Dropdown align="end" drop="up">
                                <Dropdown.Toggle id="userDropdownOffCanvas" className="btn" variant="transparent">
                                    <RiShieldUserFill />
                                </Dropdown.Toggle>

                                <Dropdown.Menu align="right">
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div style={{ position: 'absolute', bottom: 0, right: 0, marginBottom: '1rem', marginRight: '1rem' }}>
                            <button className="btn btn-outline-danger ml-auto" onClick={handleLogout}>
                                <RiLogoutBoxLine /> Logout
                            </button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavigationNew;
