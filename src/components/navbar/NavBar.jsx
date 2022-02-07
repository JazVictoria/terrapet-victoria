import React from 'react';
import logo from '../../images/logo.svg';
import './NavBar.css';
import CommonItem from '../navbar-common-item/CommonItem';
import DropdownItem from '../navbar-dropdown-item/DropdownItem';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src={logo} className="logo" alt="logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <DropdownItem itemName="Categorías" dropItems={['Perros', 'Gatos', 'Peces', 'Aves', 'Roedores']} />
                        <DropdownItem itemName="Servicios" dropItems={['Veterinaria', 'Baño y peluquería']} />
                        <CommonItem itemName="Sucursales" />
                        <CommonItem itemName="Contacto" />
                        <CommonItem itemName="Ayuda" />
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
