import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ services }) => {
    const { serviceId } = useParams();

    const service = services.find(service => service);
    console.log(service);
    return (
        <div className='my-5 py-5 text-center details'>
            <h1 className='text-center'>This is service detail : {serviceId}</h1>
            <h2 >You will find our all service details here</h2>
            <img src={service.img} alt="" />
            <h3> {service.description}</h3>
            <p>Treatment Price: {service.price} tk</p>
        </div>
    );
};

export default ServiceDetail;