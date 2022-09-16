import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);

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
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/');
        // console.log(user)
    }
    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }
    return (
        <div className='register-form my-5 py-5'>
            <h2 className='login-text text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='name' required />
                <input type="email" name="email" placeholder='email' required />
                <input type="password" name="password" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} className='me-2' type="checkbox" name="terms" id="terms" />
                <label id='terms-text' className={agree ? 'opacity-100' : 'opacity-50'} htmlFor="terms">Agree to terms and conditions</label>
                <input disabled={!agree} className='btn btn-primary mt-3' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;