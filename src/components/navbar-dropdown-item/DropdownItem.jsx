import React from 'react';
import './DropdownItem.css';

const DropdownItem = ({ itemName, dropItems }) => {
    return (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {itemName}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {dropItems.map(item => {
                  return (<li><a class="dropdown-item" href="#">{item}</a></li>)
              })}  
            </ul>
        </li>
    )
}

export default DropdownItem;
