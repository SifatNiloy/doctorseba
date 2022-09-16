import React from 'react';

import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ services }) => {
    // console.log(services);
    const { serviceId } = useParams();

    let myId = parseInt(serviceId)
    // console.log(myId)
    let service = services.find(service => service.id === myId)

    // console.log(service.id, service.name);
    return (

        <div>

            < div className='my-5 py-5 text-center' >
                <h1 className='text-center mb-5'>This is service detail  </h1>

                <div className='text-center  details'>
                    <img src={service.img} alt="" />
                    <h5>Details: {service.description}</h5>
                    <h4>Service Price : {service.price} Taka </h4>
                </div>
            </ div>
        </div>
    );
};

export default ServiceDetail;