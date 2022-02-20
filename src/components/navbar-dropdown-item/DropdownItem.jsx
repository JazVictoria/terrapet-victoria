import React from 'react';
import './DropdownItem.css';
import { Link } from 'react-router-dom';

const DropdownItem = ({ itemName, dropItems }) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {itemName}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {dropItems.map(item => {
                  return (<li><Link to={`/category/${item}`} className="dropdown-item">{item}</Link></li>)
              })}  
            </ul>
        </li>
    )
}

export default DropdownItem;
