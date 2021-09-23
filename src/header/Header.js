import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Button  from 'react-bootstrap/Button'
import { NavDropdown } from 'react-bootstrap'
import Form  from "react-bootstrap/Form"
import { FormControl } from 'react-bootstrap'
import logo from "../../src/logo.png"

const Header=()=>(

    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">
  <img src={logo}  alt="logo" />
     
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
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
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)

export default Header;