import React from 'react';
import user1 from '../../../src/images/users/1.jpg'
import user2 from '../../../src/images/users/2.jpg'
import user3 from '../../../src/images/users/3.jpg'
import user4 from '../../../src/images/users/4.jpg'
import user5 from '../../../src/images/users/5.jpg'
import user6 from '../../../src/images/users/6.jpg'
import './Reviews.css';

const Reviews = () => {
    return (
        <div className='reviews-body'>
            <h1 className='text-center text-primary pt-5'>Our patients review</h1>
            <div className='pb-5 m-5 reviews text-center'>
                <div>
                    <img src={user1} alt="" />
                    <p>Arnoldas</p>
                    <h6>"Excellent Service.The doctors are  friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends."</h6>

                    <div style={{ height: '1px' }} className='bg-primary w-25 mx-auto'></div>


                </div>
                <div>
                    <img src={user2} alt="" />
                    <p> Jakub</p>
                    <h6>"I was truly satisfied we chose User.com. It wasn't easy to learn, but it was a profitable investment.Service is really good"</h6>
                    <div style={{ height: '1px' }} className='bg-primary w-75 mx-auto'></div>
                </div>
                <div>
                    <img src={user3} alt="" />
                    <p>Izabela H.</p>
                    <h6>"World class helpful doctors. Dr. Taylor incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. It's rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend becoming her patient!"</h6>

                    <div style={{ height: '1px' }} className='bg-primary w-100 mx-auto'></div>
                </div>
                <div>
                    <img src={user4} alt="" />
                    <p>Marcin</p>
                    <h6>"excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient ."</h6>
                    <div style={{ height: '1px' }} className='bg-primary w-75 mx-auto'></div>
                </div>
                <div>
                    <img src={user5} alt="" />
                    <p>Sheikh</p>
                    <h6>"the doctors combines expertise and a willingness to listen and discuss. Also, they are very friendly and professional. I've never had to wait more than a few minutes when I arrive on time for an appointment.I strongly recommend to my Friends"</h6>
                    <div style={{ height: '1px' }} className='bg-primary w-25 mx-auto'></div>
                </div>
                <div>
                    <img src={user6} alt="" />
                    <p>Amadeusz</p>
                    <h6>"Their support is awesome. They help to solve problems immediately.I will come again if needed"</h6>

                </div>
            </div>
        </div>
    );
};

export default Reviews;