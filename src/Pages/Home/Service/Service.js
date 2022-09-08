import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='container gx-5 col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;