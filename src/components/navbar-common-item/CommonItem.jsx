import React from 'react';
import './CommonItem.css';

const CommonItem = ({ itemName }) => {
    return (
        <li class="nav-item">
            <a class="nav-link" href="#">{itemName}</a>
        </li>
    )
}

export default CommonItem;
