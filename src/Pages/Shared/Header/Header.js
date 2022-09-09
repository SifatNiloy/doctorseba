import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo-1.png'
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" className='top-navbar' fixed="top">
                <Container>
                    {/* <Navbar.Brand href="#home">
                        <img height={'30px'} src={logo} alt="" />
                    </Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contact us</Nav.Link>
                        <Nav.Link href="#pricing">About us</Nav.Link>
                        <Nav.Link href="#pricing">Sign In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;