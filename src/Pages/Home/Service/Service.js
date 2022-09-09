import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='container pb-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;