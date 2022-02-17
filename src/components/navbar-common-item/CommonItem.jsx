import React from 'react';
import './CommonItem.css';

const CommonItem = ({ itemName }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{itemName}</a>
        </li>
    )
}

export default CommonItem;
