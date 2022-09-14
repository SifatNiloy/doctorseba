import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo-2.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div >
            <Navbar className='color-nav text-dark' collapseOnSelect expand="lg" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/blog">News</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/support">Support</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/discover">Discover</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;