import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='my-5 py-5'>

            <h1>This is serviceDetail: {serviceId}</h1>
            <p>You understarnd?</p>

        </div>
    );
};

export default ServiceDetail;