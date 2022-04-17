import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // this is called custom hook :3 nice name, i like

    const handleRemoveProduct = (product)=> {
        // console.log(product);
        const rest = cart.filter(pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    
    
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(cart=> <ReviewItem
                    key={cart.id}
                    cart={cart}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button>Proceed shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;