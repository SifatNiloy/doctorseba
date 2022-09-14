import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='my-5 py-5 container mx-auto login-form'>
            <h2 className='text-primary text-center'>Please login</h2>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="name" placeholder='name' required /> */}
                <input type="email" ref={emailRef} name="email" placeholder='email' required />
                <input type="password" ref={passwordRef} name="password" placeholder='password' required />
                <input className='btn btn-primary' type="submit" value="Login" />
            </form>
            <p>New on Doctorseba? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;