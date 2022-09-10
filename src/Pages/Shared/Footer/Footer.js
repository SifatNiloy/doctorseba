import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-auto' >
            <footer className='footer-area' >
                <div className='text-center py-3'>
                    <input className='subscribe-input' type="text" name="text" id="" placeholder='Your email' /><button className='subscribe-btn'>Subscribe</button>
                </div>
                <div className='container text-white footer-grid-part'>
                    <div>
                        <h4>Quick Link</h4>
                        <ul>
                            <li>Appointment</li>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Helpful Links</h4>
                        <ul>
                            <li>Address: house 15, road 12, Montana.</li>
                            <li>Phone: +65439027</li>
                            <li>Email: doctorseba@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Issues</li>
                            <li>Discussions</li>
                            <li>Sponsors</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-white '><small>copyright @ 2022</small></p>
            </footer>
        </div>
    );
};

export default Footer;