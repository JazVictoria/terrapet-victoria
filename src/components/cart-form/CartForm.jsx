import React, { useContext } from 'react';
import './CartForm.css';
import { CartContext } from '../../context/CartContext';

const CartForm = ({ form, onSubmitBuy, handleInputChange }) => {
    const { totalPrice } = useContext(CartContext);

    return (
        <div className="col-6">
            <div className="form-header">
                <h3>Total a pagar</h3>
                <p className="total">{`$${totalPrice}`}</p>
            </div>
            <form>
                <div className="row mb-4">
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="name" className="form-control" value={form.buyer.name} required onChange={handleInputChange}/>
                        <label className="form-label" for="name">Nombre</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="lastName" className="form-control" value={form.buyer.lastName} required onChange={handleInputChange}/>
                        <label className="form-label" for="lastName">Apellido</label>
                    </div>
                </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="mail" className="form-control" value={form.buyer.mail} required onChange={handleInputChange}/>
                    <label className="form-label" for="mail">Mail</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="mail2" className="form-control" value={form.buyer.mail2} required onChange={handleInputChange}/>
                    <label className="form-label" for="mail2">Repita el mail</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="phone" className="form-control" value={form.buyer.phone} required onChange={handleInputChange}/>
                    <label className="form-label" for="phone">Teléfono</label>
                </div>

                <div>
                    <button onClick={onSubmitBuy} disabled={form.buyer.name === '' || form.buyer.phone === '' || form.buyer.mail === '' || form.buyer.mail2 === '' || (form.buyer.mail !== form.buyer.mail2) } className="btn btn-primary" type="submit">Finalizar compra</button>
                </div>
            </form>
        </div>
    )
}

export default CartForm;
