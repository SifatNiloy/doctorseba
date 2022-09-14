import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ServiceDetail = ({ services }) => {
    const { serviceId } = useParams();

    const service = services.find(service => service.id === serviceId);
    console.log(service);
    return (
        <div className='my-5 py-5'>
            <h1 className='text-center'>This is service detail : {serviceId}</h1>
            <h2 className='text-center'>You will find our all service details here</h2>
            {/* <h3>{service.description}</h3> */}
            {/* <Card className='w-50 mx-auto'>
                <Card.Img variant='top' src={service.img} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default ServiceDetail;