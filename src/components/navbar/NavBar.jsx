import React from 'react';
import logo from '../../images/logo.svg';
import './NavBar.css';
import CommonItem from '../navbar-common-item/CommonItem';
import DropdownItem from '../navbar-dropdown-item/DropdownItem';
import CartWidget from '../cart-widget/CartWidget';

const NavBar= () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <DropdownItem itemName="Categorías" dropItems={['Perros', 'Gatos', 'Peces', 'Aves', 'Roedores']} />
                        <DropdownItem itemName="Servicios" dropItems={['Veterinaria', 'Baño y peluquería']} />
                        <CommonItem itemName="Sucursales" />
                        <CommonItem itemName="Contacto" />
                        <CommonItem itemName="Ayuda" />
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
