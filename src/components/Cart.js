import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartRobot from "../assets/img/cart-robo.png"
import { Link } from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        console.log("clear");
        dispatch(clearCart());
    };
    
    const CartItems = useSelector((store) => store.cart.items);
    console.log(CartItems);
    
    const sum = CartItems.reduce((total, item) => {
        const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
        return total + (price / 100);
    }, 0);
    
    const ItemTotal = Number(sum);
    const DeliveryCharge = Number((0.05 * sum).toFixed(2));
    const FinalBill = ItemTotal + DeliveryCharge;
    const UserName=useSelector((store)=>store.auth.username);
    console.log("cart",UserName)
    
    return (
        <div className="cart">
            {CartItems.length>0 && (
                <>
                <div className="cart-left">
                    {UserName=="" > 0 &&(
                        <div>
                            <p className='cart-left-text'>Oops! Looks like you need to log in before placing your order. Let's get you signed in for a delicious dining experience!</p>
                            <Link to="/login" className="login-btn cart-left-btn">Login</Link>
                        </div>
                    )}
                    {
                        UserName!=="" && CartItems.length > 0 && (
                            <img src={CartRobot} className='cart-robo'></img>
                        )
                    }
                </div>
                <div className="cart-right">
                    <button className="clear-cart-btn" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                    {CartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className='cart-item-left'>
                                <div className="item-name">{item?.card?.info?.name}</div>
                            </div>
                            <div className='cart-item-right'>
                                <button className='Add-Button'>+</button>
                                <div className="item-price">₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</div>
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <div className="total-left">
                            <p>Item Total:</p>
                            <p>Delivery Charges(5%):</p>
                            <p>To Pay:</p>
                        </div>
                        <div className="total-right">
                            <p>{ItemTotal}</p>
                            <p>{DeliveryCharge}</p>
                            <p>{FinalBill}</p>
                        </div>
                    </div>
                    {UserName!=""&&(
                        <button className='login-btn order-btn'>Order Now</button>
                    )}
                </div>
                </>
               
            )}
            {
                CartItems.length==0 && (
                    <div className='empty-cart'>
                        <div style={{ width: '100%', height: 0, paddingBottom: '22%', position: 'relative' }}>
                            <iframe
                              src="https://giphy.com/embed/UW7dETXIAsCK5m0tkM"
                              width="100%"
                              height="100%"
                              style={{ position: 'absolute' }}
                              className="giphy-embed"
                              allowFullScreen
                            ></iframe>
                         </div>
                        <p className='empty-cart-text'>Looks like your cart is hungry for some delicious dishes! Time to explore our menu and fill it up with tasty treats.</p>
                    </div>
                )
            }
            
         </div>  
        
    );
};

export default Cart;
