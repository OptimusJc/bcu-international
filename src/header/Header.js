import { Link } from "@reach/router";
import { NavDropdown } from "react-bootstrap";
import { HiMenuAlt4 } from "react-icons/hi";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/bcu_logo.webp";
import "./header.scss";

const Header = () => (
    <Navbar expand="lg" className="navbar_expand_lg">
        <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="brand_logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll">
            <HiMenuAlt4 className="navbar_toggler_icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto ml-lg-5 my-2 my-lg-0"
                style={{ maxHeight: "150px" }}
                navbarScroll
            >
                <Nav.Link className="nav_link" as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link className="nav_link" as={Link} to="/podcasts">
                    Podcasts
                </Nav.Link>
                <Nav.Link className="nav_link" as={Link} to="/videos">
                    Videos
                </Nav.Link>

                <NavDropdown
                    className="dropdown_menu"
                    title="Channels"
                    id="navbarScrollingDropdown"
                >
                    <NavDropdown.Item className="dropdown_item" href="/radio">
                        Radio Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        className="dropdown_item"
                        href="/television"
                    >
                        Television Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="dropdown_item" href="#action5">
                        Music Channel
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>

            <Nav className="secondary-nav">
                <Nav.Link
                    as={Link}
                    to="/signup"
                    className="btn btn-warning mr-lg-4 navButtons"
                >
                    Sign Up
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/login"
                    className="btn btn-outline-warning mr-lg-2 navButtons"
                >
                    Log In
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
