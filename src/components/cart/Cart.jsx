import React, { useContext } from 'react';
import './Cart.css';
import trash from '../../images/trash.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, totalPrice, removeProductFromCart } = useContext(CartContext);

    return (
       <div>
           {(cart && cart.length > 0) ?
                <div>
                    <ul>
                        {cart.map(item => {
                            return (
                                <li>
                                    <p>{`Producto: ${item.title}`}</p>
                                    <p>{`Precio: $${item.price}`}</p>
                                    <p>{`Cantidad: ${item.quantity}`}</p>
                                    <p>{`Subtotal: ${(item.quantity * item.price)}`}</p>
                                    <img src={trash} className="trash" alt="trash icon" onClick={() => removeProductFromCart(item.productId)} />
                                </li>
                            );
                        })}
                    </ul>
                    <p>{`Total: ${totalPrice}`}</p>
                </div>
            :
                <div>
                    <h1>Tu carrito esta vacio :(</h1>
                    <Link to={'/'}>
                        <button className="btn btn-primary">Ver productos</button>
                    </Link>
                </div>
            }
       </div>
    )
}

export default Cart;
