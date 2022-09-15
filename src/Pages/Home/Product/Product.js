import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'
const Product = ({ product }) => {
    const { name, img, description, price } = product;
    return (

        <div className=' col-sm-12 col-md-6 col-lg-4'>
            <div className='container pb-4 text-center'>
                <Card style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h4>Price: {price} </h4>
                        <Button variant="primary">Go Shopping</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Product;