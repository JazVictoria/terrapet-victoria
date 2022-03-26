import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import Error from '../error/Error';
import CartDetail from '../cart-detail/CartDetail';
import CartForm from '../cart-form/CartForm';
import Spinner from '../spinner/Spinner';
import Congrats from '../congrats/Congrats';
import db from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [form, setForm ] = useState({
        buyer: {
            name: '',
            lastName: '',
            phone: '',
            mail: '',
            mail2: '',
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

    const onSubmitBuy = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const orders = collection(db, "orders");
            const order = await addDoc(orders, form);
            setOrderId(order.id);
            setLoading(false);
        } catch (error) {
            console.log('Ocurrio un error: ', error);
            setLoading(false);
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
           {loading && <Spinner />}
           {(cart && cart.length > 0) ?
                (!orderId ? 
                    <div className="container">
                        <CartDetail />
                        <CartForm form={form} onSubmitBuy={onSubmitBuy} handleInputChange={handleInputChange} />
                    </div>
                    :
                    <Congrats orderId={orderId} />
                ) 
                :
                <Error message={"Su carrito se encuentra vacio"} hasButton={true} />
            }
       </div>
    )
}

export default Cart;
