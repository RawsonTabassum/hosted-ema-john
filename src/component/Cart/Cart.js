import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(props);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const item of cart){
        quantity += item.quantity;
        total += (item.price * item.quantity);
        shipping += item.shipping;
    }
    const tax = (total * .01).toFixed(2);
    const grandTotal = (total + parseFloat(tax)).toFixed(2);
    return (
        <div className='cart'>
            <h2 style={{textAlign: "center"}}>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}$</p>
            <p><strong>Grand Total: ${grandTotal}</strong></p>
            {props.children}
        </div>
    );
};

export default Cart;