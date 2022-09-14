import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import useService from '../useService/useService';

import './Services.css';

const Services = () => {
    const { services } = useService();
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