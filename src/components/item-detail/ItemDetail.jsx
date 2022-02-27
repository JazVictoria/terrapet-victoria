import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(item.stock);
    const [readyToFinish, setReady] = useState(false);
    const { updateCart } = useContext(CartContext)

    const onConfirm = (value) => {
        updateCart(item.id, item.title, item.price, value);
        setStock(stock - value);
        setReady(true);
    }

    return (
        <div className="card mb-3 ItemDetail">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <h5 className="card-text">${item.price}</h5>
                        <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
                    </div>
                    <div>
                        {
                            !readyToFinish ?
                            <ItemCount stock={stock} onConfirm={onConfirm} />
                            :
                            <div className="card-footer">
                                <Link to={'/cart'}>
                                    <button className="btn btn-primary submit" type="submit">Finalizar compra</button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
