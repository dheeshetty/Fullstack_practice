import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarc() {
      return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">Social Media App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#action1">Sign Up</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default Navbarc;