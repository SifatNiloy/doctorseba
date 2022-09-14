import React from 'react';
import "./Blog.css"
import phone from '../../../images/phone.jpeg'
const Blog = () => {
    return (
        <div className='container my-5 py-5 blog'>
            <h2>Reaching Out to Remote Rural Areas</h2>
            <br />
            <p>Jack Higgins, MD <br />

                August 24, 2018</p>
            <p>People sometimes ask how the Global Telehealth Network (GTN) expects to connect doctors with health workers in remote rural areas through videoconferencing.


                The answer lies in the fact that many emerging economies have "leapfrogged" telecommunications technology, completely skipping the process of stringing copper wires and instead going directly to wireless technologies.


                Despite my realization that connectivity is improving rapidly in Africa, I had a big surprise in June 2014 when I spent some time in Liberia (leaving one week before Ebola arrived in the country, but that's a story for another day).


                There are only 50 physicians in the entire country of Liberia, and nearly all are located in the major cities. This means that essentially the only healthcare services that are available in rural areas are provided through clinics operated by nurses.


                Save the Children has trained and now supervises the nurses who run 28 of those rural clinics.


                I was in Liberia to represent the Los Altos Rotary AIDS Project (LARAP) for the launch of a Child AIDS Prevention program that we sponsored at those 28 clinics in partnership with Save the Children.


                While I was there, I was privileged to ride along with personnel from Save the Children on two daylong visits to rural clinics.



                One clinic was over 1 1/2 hours away from Monrovia. When we arrived and were climbing out of the Toyota Land Cruiser, I was curious to see whether there might be any cell signal at all that far out in the bush.

            </p>
            <img src={phone} alt="" />
        </div>
    );
};

export default Blog;