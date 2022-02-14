import React from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    return (
        <div className="counter">
            <button className="btn btn-primary" disabled={initial === 1 || stock === 0} onClick={() => onAdd(-1)}>-</button>
            <p>{initial}</p>
            <button className="btn btn-primary" disabled={initial >= stock} onClick={() => onAdd(1)}>+</button>
        </div>
    )
}
        
export default ItemCount;
