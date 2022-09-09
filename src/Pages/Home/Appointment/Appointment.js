import React from 'react';
import nurse from '../../../images/nurse.jpg'
import './Appointment.css'
const Appointment = () => {
    return (
        <div className='nurse'>
            <div className='nurse-care container py-5'>
                <div className='pe-4'>
                    <h1>The Nurse Is Provided For The Care Of The Patient</h1>
                    <p>Nurses must often pay close attention to every detail of the patient's treatment and how they respond. If a problem is identified, nurses will often be the first to notice; thus, they must be able to quickly report a problem, particularly in the event of an emergency, to a physician.</p>
                    <button className='appointment-btn'>Book An Appointment</button>
                </div>
                <div>
                    <img src={nurse} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;