import React from 'react';
import './DropdownItem.css';

const DropdownItem = ({ itemName, dropItems }) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {itemName}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {dropItems.map(item => {
                  return (<li><a className="dropdown-item" href="#">{item}</a></li>)
              })}  
            </ul>
        </li>
    )
}

export default DropdownItem;
