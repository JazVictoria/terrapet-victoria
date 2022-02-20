import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../item-detail/ItemDetail';
import MockInfo from '../../mocks';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [itemInfo, setItemInfo] = useState(null)
    const { id } = useParams();

    const getItem = new Promise ((resolve, reject) => {
        const item = MockInfo.find(a => a.id == id);
        console.log(item)
        setTimeout(() => {
            resolve(item);
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
    }, [id])

    return (
        <div className="ItemDetailContainer">
            {itemInfo && <ItemDetail item={itemInfo} />}
        </div>
    )
}

export default ItemDetailContainer;
