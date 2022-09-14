import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useService from '../useService/useService';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useService();
    console.log(services);
    const service = services.find((service) => service.id === serviceId);
    return (
        <div className='my-5 py-5'>
            <h1 className='text-center'>This is service detail : {serviceId}</h1>
            <Card className='w-50 mx-auto'>
                <Card.Img variant='top' src={service?.img} />
                <Card.Body>
                    <Card.Title>{service?.title}</Card.Title>
                    <Card.Text>{service?.info}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetail;