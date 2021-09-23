import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Button  from 'react-bootstrap/Button'
import { NavDropdown } from 'react-bootstrap'
import Form  from "react-bootstrap/Form"
import { FormControl } from 'react-bootstrap'
import logo from "../../src/logo.png"
import "./Header.css"

const Header = () => (

  <div className="container">
  <Navbar className="bg-dark navbar-dark" expand="lg">
  <Navbar.Brand href="#">
  <img src={logo}  alt="logo" style={{ maxWidth: '250px'}}/>
    
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px'}}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Videos</Nav.Link>
      <Nav.Link href="#action2">Podcasts</Nav.Link>
      <Nav.Link href="#action2"></Nav.Link>
      <NavDropdown title="Channels" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Radio</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Television</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex" style={{marginLeft: '70px', marginRight: '10px'}}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"

        style={{ maxWidth: '200px'}}
      />
      <Button variant="outline-success">Search</Button>
    </Form>

    <Nav.Link href="#action2" className=" btn-primary">Sign Up</Nav.Link>
    <Nav.Link href="#action2">Log In</Nav.Link>
  </Navbar.Collapse>
</Navbar>
</div>

)

export default Header;