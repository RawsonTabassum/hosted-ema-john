import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    const navigate = useNavigate();


    const handleEmailBlur = (event)=> {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event)=> {
        setPassword(event.target.value);
    }


    const handleConfirmPasswordBlur = (event)=> {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }


    const handleCreateUser = (event)=> {
        event.preventDefault();

        if(password.length < 6){
            setError('*password must be at least 6 chatacters')
            return;
        }

        if(password !== confirmPassword){
            setError('*The passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form action="" onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='input-field' onBlur={handleEmailBlur} type='email' name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className='input-field' onBlur={handlePasswordBlur} type='password' name='password' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input className='input-field' onBlur={handleConfirmPasswordBlur} type='password' name='confirm_password' required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>

                <p>
                    Already have an account?
                    <Link className='form-link' to='/login'> Login</Link>
                </p>

                <div className='line'>
                    <hr />
                    <p> or </p>
                    <hr />
                </div>

                <button className='google-signin'>Sign in using Google</button>
            </div>
        </div>
    );
};

export default SignUp;