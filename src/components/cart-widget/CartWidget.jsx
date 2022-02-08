import React from 'react';
import './CartWidget.css';
import cart from '../../images/cart.svg';


const CartWidget = () => {
    return (
        <div className="cartContainer">
            <img src={cart} className="cart" alt="cart icon" />
        </div>
    )
}

export default CartWidget;
