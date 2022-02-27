import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
       <div>
           <ul>
                {cart.map(item => {
                    return (
                        <li>
                            <p>{`Producto: ${item.title}`}</p>
                            <p>{`Precio: $${item.price}`}</p>
                            <p>{`Cantidad: ${item.quantity}`}</p>
                            <p>{`Precio total por unidades: ${(item.quantity * item.price)}`}</p>
                        </li>
                    );
                })}
            </ul>
       </div>
    )
}

export default Cart;
