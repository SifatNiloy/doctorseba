import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-auto' >
            <footer className='footer-area' >
                <div className='text-center pt-5'>
                    <div className="input-group mb-3 w-50 mx-auto">
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter Your Email here"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">Join Our Mailing List</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
                <div className='container text-white footer-grid-part'>
                    <div>
                        <h4>Quick Link</h4>
                        <ul>
                            <li><Link to="#">Appointment</Link></li>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Privacy Policy</Link></li>
                            <li><Link to="">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li> Address: house 15, road 12, Montana.</li>
                            <li> Phone: +65439027</li>
                            <li> Email: doctorseba@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="">Issues</Link></li>
                            <li><Link to="">Discussions</Link></li>
                            <li><Link to="">Sponsors</Link></li>
                            <li><Link to="">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-white '><small>copyright @ 2022</small></p>
            </footer>
        </div>
    );
};

export default Footer;