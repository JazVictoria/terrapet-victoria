import React, { useContext } from 'react';
import './CartWidget.css';
import cart from '../../images/cart.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { productQuantity } = useContext(CartContext)

    return (
        <Link to={"/cart"} className="cartContainer">
            <img src={cart} className="cart" alt="cart icon" />
            <p>{productQuantity}</p>
        </Link>
    )
}

export default CartWidget;
