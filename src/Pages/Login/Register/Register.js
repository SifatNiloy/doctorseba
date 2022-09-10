import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='my-5 pt-5 container w-50 mx-auto '>
            <div className=''>
                <h3>Please Register</h3>
                <div className="register-form">

                    <form className='text-center' action="">
                        <input className='input-box' type="text" name="name" id="" placeholder='your name' required />
                        <input className='input-box' type="email" name="email" id="" placeholder='your email' required />
                        <input className='input-box' type="password" name="password" id="" placeholder='password' required />
                        <input className='input-box' type="submit" value="Register" />
                    </form>

                </div>
                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </div>


        </div>
    );
};

export default Register;