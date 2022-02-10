import React, { useState } from 'react';
import './ItemListContainer.css';
import ItemCount from '../item-count/ItemCount';

const ItemListContainer = () => {
    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(1);

    const onAdd = (value) => {
        setInitial(initial + value);
    }

    const onConfirm = (value) => {
        setStock(stock - value);
        setInitial(1);
    }

    return (
        <div className="greetingContainer">
            <ItemCount itemName="Hueso antiestres" stock={stock} initial={initial} onAdd={onAdd} onConfirm={onConfirm}/>
        </div>
    )
}

export default ItemListContainer;
