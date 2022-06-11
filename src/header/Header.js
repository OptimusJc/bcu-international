import { NavDropdown } from "react-bootstrap";
import { Link } from "@reach/router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/bcu_logo.webp";
import styles from "./header.module.css";

const Header = () => (
    <Navbar
        expand="lg"
        className={[styles.navbar, styles.navbar_expand_lg].join(" ")}
    >
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" className={styles.brand_logo} />
        </Navbar.Brand>

        <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ background: "var(--gold-primary)" }}
        />
        <Navbar.Collapse
            className={[styles.navbar_nav, styles.navbarScroll].join(" ")}
            id="navbarScroll"
        >
            <Nav
                className={[
                    "mr-auto ml-lg-5 my-2 my-lg-0",
                    styles.navigation,
                ].join(" ")}
                style={{ maxHeight: "150px" }}
                navbarScroll
            >
                <Nav.Link className={styles.nav_link} as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link className={styles.nav_link} as={Link} to="/podcasts">
                    Podcasts
                </Nav.Link>
                <Nav.Link className={styles.nav_link} as={Link} to="/videos">
                    Videos
                </Nav.Link>

                <NavDropdown
                    className={styles.dropdown_menu}
                    title="Channels"
                    id="navbarScrollingDropdown"
                >
                    <NavDropdown.Item
                        className={styles.dropdown_item}
                        href="/radio"
                    >
                        Radio Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        className={styles.dropdown_item}
                        href="/television"
                    >
                        Television Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        className={styles.dropdown_item}
                        href="#action5"
                    >
                        Music Channel
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>

            <Nav>
                <Nav.Link
                    as={Link}
                    to="/signup"
                    className={[
                        "btn btn-warning mr-lg-4",
                        styles.navButtons,
                        styles.btn_warning,
                    ].join(" ")}
                >
                    Sign Up
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/login"
                    className={[
                        "btn btn-outline-warning mr-lg-2",
                        styles.navButtons,
                        styles.btn_outline_warning,
                    ].join(" ")}
                >
                    Log In
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
