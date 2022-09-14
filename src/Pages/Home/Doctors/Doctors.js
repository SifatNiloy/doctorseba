import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    })
    return (
        <div className="doctor-page">
            <div className='container '>
                <h1 className='text-center my-4 pt-4'>Our Doctors</h1>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Doctors;