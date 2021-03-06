import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    // useEffect(()=> {
    //     fetch('products.json')
    //       .then(res=> res.json())
    //       .then(data=> setProducts(data));
    // }, [])


    useEffect(()=> {
        // console.log(products);
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])



    const handleAddToCart = (product)=> {
        // console.log(product);
        const exists = cart.find(item=> item.id === product.id)
        let newCart = [];
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter(item=> item.id !== product.id);
            product.quantity += 1;
            newCart = [...rest, product];
        }
        // newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;