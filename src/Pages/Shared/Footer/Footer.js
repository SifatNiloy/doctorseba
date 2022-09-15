import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-auto' >
            <footer className='footer-area' >
                <div className='text-center py-3'>
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
                            <li><a href="">Appointment</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Services</a></li>
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
                            <li><a href="">Issues</a></li>
                            <li><a href="">Discussions</a></li>
                            <li><a href="">Sponsors</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-white '><small>copyright @ 2022</small></p>
            </footer>
        </div>
    );
};

export default Footer;