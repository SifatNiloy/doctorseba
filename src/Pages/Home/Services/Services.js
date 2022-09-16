import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import UseService from '../UseService/UseService';

import './Services.css';

const Services = () => {
    const { services } = UseService();
    // console.log(services);
    return (
        <div className='container '>

            <h1 id='services' className='my-4 text-center'> Our Services</h1>

            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }

            </div>


        </div>
    );
};

export default Services;