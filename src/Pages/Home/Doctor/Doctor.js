import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, description, price } = doctor;
    const navigate = useNavigate();
    const navigateToService = id => {
        navigate(`/doctor/${id}`)
    }
    return (
        <div className=' col-sm-12 col-md-6 col-lg-4'>
            <div className='container pb-4 text-center'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => navigateToService(id)} variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Doctor;