import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import logo from "../images/bcu-logo.png";
import { Link } from "@reach/router";
import "./Header.css";

const Header = () => (
    <div className="container-fluid ">
        {/* <Navbar variant="dark" className="dark navbar-expand-lg" expand="md">
            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="logo" className="navbar-brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="d-flex">
                <Nav
                    className="mr-auto my-2 my-lg-0 flex-grow-1"
                    style={{ maxHeight: "100px" }}
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
                        <NavDropdown.Item href="#action3">
                            Radio
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Television
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form className="d-flex " style={{ marginLeft: "30px" }}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        style={{ maxWidth: "200px" }}
                    />
                </Form>

                <Nav.Link as={Link} to="/signup">
                    <Button variant="warning" className="btn-warning">
                        Sign up
                    </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                    <Button
                        variant="outline-warning"
                        className="btnOutlineWarning"
                    >
                        Login
                    </Button>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar> */}

        <Navbar variant="dark" className="dark" expand="lg">
            <Navbar.Brand href="#">
                <img src={logo} alt="logo" className="navbar-brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0 flex-grow-1"
                    style={{ maxHeight: "100px" }}
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
                        <NavDropdown.Item href="#action3">
                            Radio
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Television
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                </Form>

                <Nav.Link as={Link} to="/signup">
                    <Button variant="warning" className="btn-warning">
                        Sign up
                    </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                    <Button
                        variant="outline-warning"
                        className="btnOutlineWarning"
                    >
                        Login
                    </Button>
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
