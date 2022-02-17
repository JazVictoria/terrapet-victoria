import React, { useState } from 'react';
import './Item.css';
import ItemCount from '../item-count/ItemCount';

const Item = ({ stockAmount, title, description, price, pictureUrl }) => {
    const [stock, setStock] = useState(stockAmount);
    const [initial, setInitial] = useState(1);

    const onAdd = (value) => {
        setInitial(initial + value);
    }

    const onConfirm = (value) => {
        setStock(stock - value);
        setInitial(1);
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={pictureUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                </div>
                <div className="card-footer">
                    <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
                    <button className="btn btn-primary submit" type="submit" disabled={initial <= 0 || stock === 0} onClick={() => onConfirm(initial)}>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
