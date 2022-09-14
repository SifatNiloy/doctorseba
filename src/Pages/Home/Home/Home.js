import React from 'react';

import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import Reviews from '../../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Appointment></Appointment>
            <Featured></Featured>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;