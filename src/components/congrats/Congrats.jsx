import React, { useContext } from 'react';
import './Congrats.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import check from '../../images/check.png';

const Congrats = ({ orderId }) => {
    const { resetCart } = useContext(CartContext);
    return (
        <div className="congrats">
            <img src={check} className="check-img" alt="check" />
            <h5>Su nro de orden es:</h5>
            <h1 className="order">{orderId}</h1>
            <Link to={'/'}>
                <button className="btn btn-primary" onClick={() => resetCart()}>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default Congrats;
