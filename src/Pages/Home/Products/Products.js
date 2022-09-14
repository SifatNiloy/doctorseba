import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className='my-5 py-5 '>
            <h2 className='text-center'>Our Products</h2>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Products;