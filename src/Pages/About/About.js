import React from 'react';
import about from '../../../src/images/about-2.jpg'
import './About.css'
const About = () => {
    return (
        <div className='about container my-5 py-5'>
            <div>
                <img src={about} alt="" />
            </div>
            <div>
                <h1>An Aid Agency For Your Physical And Mental Well-Being</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority haven't in injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
        </div>
    );
};

export default About;