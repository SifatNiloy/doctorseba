import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, name, img, description } = service;
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
                                <button type="button" className="btn btn-info" >View Details <i className="fa-solid fa-angle-right ms-2"></i></button>
                            </Link>
                        </p>
                    </Card.Body>

                </Card>

            </div>
        </div>

    );
};

export default Service;