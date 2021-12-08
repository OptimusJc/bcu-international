import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

import logo from "../images/bcu_logo.webp";
import "./Header.css";
import { Link } from "@reach/router";

const Header = () => (
    <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#">
            <img src={logo} alt="logo" className="brand-logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto ml-lg-5 my-2 my-lg-0 navigation"
                style={{ maxHeight: "150px"}}
                navbarScroll
            >
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/podcasts">
                    Podcasts
                </Nav.Link>
                <Nav.Link as={Link} to="/videos">
                    Videos
                </Nav.Link>

                <NavDropdown title="Channels" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/radio">
                        Radio Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/television">
                        Television Channel
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Music Channel
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            {/* searchbar */}
            <Form className="d-flex my-3 mr-lg-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="searchbar d-block"
                    aria-label="Search"
                />
            </Form>

            <Nav.Link
                as={Link}
                to="/signup"
                className=" btn btn-warning navButtons mr-lg-3"
            >
                Sign Up
            </Nav.Link>
            <Nav.Link
                as={Link}
                to="/login"
                className="btn btn-outline-warning navButtons mr-lg-2"
            >
                Log In
            </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
