import React from 'react';
import './Featured.css'
import feature1 from '../../../images/emergency-care.jpg'
import feature2 from '../../../images/low-cost.jpg'
import feature3 from '../../../images/24hourService.jpg'
import feature4 from '../../../images/qualified-doctor.jpg'
const Featured = () => {
    return (
        <div className='featured-section '>
            <h2 className='text-center mt-3'>Featured: </h2>
            <div className="row">

                <div className=" boxes mb-5">
                    <div className='box'>
                        <img className='' src={feature1} alt="" />
                        <h4>Emergency service</h4>
                        <p>emergency service is available 24 hours a day, 7 days in week</p>
                    </div>
                    <div className='box'>
                        <img className='w-100' src={feature2} alt="" />
                        <h4>Low Cost</h4>
                        <p>emergency service is available 24 hours a day, 7 days in week</p>
                    </div>
                    <div className='box'>
                        <img className='w-100' src={feature3} alt="" />
                        <h4>24 hours</h4>
                        <p>emergency service is available 24 hours a day, 7 days in week</p>
                    </div>
                    <div className='box'>
                        <img className='w-100' src={feature4} alt="" />
                        <h4>Qualified Doctors</h4>
                        <p>emergency service is available 24 hours a day, 7 days in week</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Featured;