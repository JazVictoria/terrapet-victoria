import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import trash from '../../images/trash.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import db from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice, removeProductFromCart, resetCart } = useContext(CartContext);
    const [form, setForm ] = useState({
        buyer: {
            name: '',
            phone: '',
            mail: '',
        },
        date: new Date(),
        items: cart,
        total: totalPrice,
    });
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (event) => {
        const { target: { value, id } } = event;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [id]: value,
            }
        });
    }

    const onSubmitBuy = async () => {
        try {
            const orders = collection(db, "orders");
            const order = await addDoc(orders, form);
            setOrderId(order.id);
        } catch (error) {
            console.log('Ocurrio un error: ', error);
        }
    }

    useEffect(() => {
        setForm({
            ...form,
            items: cart,
            total: totalPrice,
        });
    }, [cart])

    return (
       <div>
           {(cart && cart.length > 0) ?
                (!orderId ? 
                    <div className="container">
                        {/* carrito */}
                        <div className="col-6">
                            <ul>
                                {cart.map(item => {
                                    return (
                                        <li>
                                            <p>{`Producto: ${item.title}`}</p>
                                            <p>{`Precio: $${item.price}`}</p>
                                            <p>{`Cantidad: ${item.quantity}`}</p>
                                            <p>{`Subtotal: ${(item.quantity * item.price)}`}</p>
                                            <img src={trash} className="trash" alt="trash icon" onClick={() => removeProductFromCart(item.id)} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <p>{`Total: ${totalPrice}`}</p>
                        </div>
                        {/* form */}
                        <div className="col-6">
                       <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-4">
                                <label for="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" value={form.buyer.name} required onChange={handleInputChange} />
                            </div>
                            <div className="col-md-4">
                                <label for="phone" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" id="phone" value={form.buyer.phone} required onChange={handleInputChange} />
                            </div>
                            <div className="col-md-4">
                                <label for="mail" className="form-label">Mail</label>
                                <input type="email" className="form-control" id="mail" value={form.buyer.mail} required onChange={handleInputChange} />
                            </div>                    
                            <div className="col-12">
                                <button onClick={() => onSubmitBuy()} disabled={form.buyer.name === '' || form.buyer.phone === '' || form.buyer.mail === ''} className="btn btn-primary" type="submit">Finalizar compra</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    :
                    <div>
                        <h2>{`Su orden es la: ${orderId}`}</h2>
                        <Link to={'/'}>
                            <button className="btn btn-primary" onClick={() => resetCart()}>Volver al inicio</button>
                        </Link>
                    </div>
                )
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
