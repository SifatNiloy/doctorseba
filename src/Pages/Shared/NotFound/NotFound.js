import React from 'react';
import sleeping from '../../../images/sleeping.png'
const NotFound = () => {
    return (
        <div className='text-center'>
            <h5 className='mt-5 pt-5'>The page you are looking for is not found</h5>
            <img className='w-25' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;