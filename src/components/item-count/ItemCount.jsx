import React from 'react';
import './ItemCount.css';

const ItemCount = ({ itemName, stock, initial, onAdd, onConfirm }) => {
    //Para esta entrega el componente contendra toda la card
    //mas adelante se dividira en dos partes: card con detalle - contador

    return (
        <div className="card" style={{width: "18rem"}} >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <p className="card-text">Hueso masticable para ayudar a quitar el estres.</p>
                <p className="card-text">Stock disponible: {stock}</p>
                <div className="counter">
                    <button className="btn btn-primary" disabled={initial === 1 || stock === 0} onClick={() => onAdd(-1)}>-</button>
                    <p>{initial}</p>
                    <button className="btn btn-primary" disabled={initial >= stock} onClick={() => onAdd(1)}>+</button>
                </div>
                <button className="btn btn-primary submit" type="submit" disabled={initial <= 0 || stock === 0} onClick={() => onConfirm(initial)}>Comprar</button>
            </div>
        </div>

        //disabled
    )
}
        
export default ItemCount;
