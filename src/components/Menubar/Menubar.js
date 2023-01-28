import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsMoon, BsSun} from 'react-icons/bs';

function Menubar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#">Civil Contruction</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Completed Projects
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Running Projects
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">
                                Upcoming Projects
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                        <Nav.Link href="#" className='d-none'>My Projects</Nav.Link>
                        <Nav.Link href="#" className='d-none'>Admin Panel</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant='light' className='me-1'>
                            <BsSun></BsSun>
                            <BsMoon className='d-none'></BsMoon>
                        </Button>
                        <Button variant="primary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;