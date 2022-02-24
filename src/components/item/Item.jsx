import React, { useState } from 'react';
import './Item.css';
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ stockAmount, title, description, price, pictureUrl, id }) => {
    const [stock, setStock] = useState(stockAmount);

    const onConfirm = (value) => {
        setStock(stock - value);
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={pictureUrl} className="card-img-top" alt="..."/>
                <Link to={`/item/${id}`} className="item card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <p className="card-text">Stock disponible: {stock}</p>
                </Link>
                <ItemCount stock={stock} onConfirm={onConfirm} />
            </div>
        </div>
    )
}

export default Item;
