import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId, price } = useParams();
    return (
        <div className='my-5 py-5 text-center'>

            <h3 >This is serviceDetail: {serviceId}</h3>
            <p>Price: {price}</p>

        </div>
    );
};

export default ServiceDetail;