import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/')
    }
    if (user) {
        navigate('/');
    }
    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.name.password;
        // createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form my-5 py-5'>
            <h2 className='register-text'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" required placeholder='name' />
                <input type="email" name="email" id="" required placeholder='email' />
                <input type="password" name="password" id="" required placeholder='password' />
                <input type="submit" value="Register" required />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;