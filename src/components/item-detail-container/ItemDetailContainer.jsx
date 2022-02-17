import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../item-detail/ItemDetail';

const ItemDetailContainer = () => {

    const itemForPromise = {id: 1, title: 'Hueso antiestres', description: 'Hueso masticable para ayudar a quitar el estres', stock: 5, price: 100, pictureUrl: 'https://sc02.alicdn.com/kf/Hd510c222b8944ec1b66bcebde98328a41/239423207/Hd510c222b8944ec1b66bcebde98328a41.jpg_.webp'};

    const [itemInfo, setItemInfo] = useState(null)

    const getItem = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(itemForPromise);
        }, 2000);
    });

    useEffect(() => {
        getItem
            .then((response) => {
                setItemInfo(response);
            })
            .catch((error) => {
                console.log('Ocurrio un error: ', error);
            });
    }, [])

    return (
        <div className="ItemDetailContainer">
            {itemInfo && <ItemDetail item={itemInfo} />}
        </div>
    )
}

export default ItemDetailContainer;
