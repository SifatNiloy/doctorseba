import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    return (
        <div className=' col-sm-12 col-md-6 col-lg-4'>
            <div className='container pb-4 text-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>

                        <p >

                            <Link className='detail-link' to={`/service/${id}`}>
                                <button type="button" class="btn btn-info" >View Details <i class="fa-solid fa-angle-right"></i></button>
                            </Link>
                        </p>
                    </Card.Body>

                </Card>

            </div>
        </div>

    );
};

export default Service;