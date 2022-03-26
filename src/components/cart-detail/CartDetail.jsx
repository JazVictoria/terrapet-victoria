import React, { useContext } from 'react';
import './CartDetail.css';
import trash from '../../images/trash.svg';
import { CartContext } from '../../context/CartContext';

const CartDetail = () => {
    const { cart, removeProductFromCart } = useContext(CartContext);
    return (
        <div className="col-5">
            <h3 className="cart-detail">Mi carrito</h3>
                {cart.map(item => {
                    return (
                        <div className="product">
                            <div className="main">
                                <p>{item.title}</p>
                                <img src={trash} className="trash" alt="trash icon" onClick={() => removeProductFromCart(item.id)} />
                            </div>
                            <div className="detail">
                                <p>{`${item.quantity}u.`}</p>
                                <p className="price">{`$${(item.quantity * item.price)}`}</p>
                            </div>
                        </div>
                    );  
                })}
        </div>
    )
}

export default CartDetail;
