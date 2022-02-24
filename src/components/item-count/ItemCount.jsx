import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onConfirm }) => {
    const [initial, setInitial] = useState(1);

    const onAdd = (value) => {
        setInitial(initial + value);
    }

    const onBuy = () => {
        onConfirm(initial);
        setInitial(1);
    }
    
    return (      
        <div className="card-footer">
            <div className="counter">
                <button className="btn btn-primary" disabled={initial === 1 || stock === 0} onClick={() => onAdd(-1)}>-</button>
                <p>{initial}</p>
                <button className="btn btn-primary" disabled={initial >= stock} onClick={() => onAdd(1)}>+</button>
            </div>
            <button className="btn btn-primary submit" type="submit" disabled={initial <= 0 || stock === 0} onClick={onBuy}>Comprar</button>
         </div>
    )
}
        
export default ItemCount;
