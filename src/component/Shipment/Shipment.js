import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = (event)=> {
        setName(event.target.value);
    }

    const handleAddressBlur = (event)=> {
        setAddress(event.target.value);
    }


    const handlePhoneBlur = (event)=> {
        setPhone(event.target.value)
    }

    // if(user){
    //     navigate('/shop')
    // }


    const handleCreateUser = (event)=> {
        event.preventDefault();
        setEmail(user.email);
        const shippingInfo = {name, email, address, phone};
        // console.log(shippingInfo)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form action="" onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input className='input-field' onBlur={handleNameBlur} type='text' name='name' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='input-field' value={user?.email} type='email' name='email' readOnly/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input className='input-field' onBlur={handleAddressBlur} type='text' name='password' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input className='input-field' onBlur={handlePhoneBlur} type='text' name='phone' required/>
                    </div>
                    {/* <p style={{color: 'red'}}>{error}</p> */}
                    <input className='form-submit' type="submit" value="Add shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;