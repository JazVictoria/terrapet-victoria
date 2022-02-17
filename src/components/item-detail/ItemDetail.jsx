import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className="card mb-3 ItemDetail">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <h5 className="card-text">${item.price}</h5>
                        <p className="card-text"><small className="text-muted">Stock disponible: {item.stock}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
