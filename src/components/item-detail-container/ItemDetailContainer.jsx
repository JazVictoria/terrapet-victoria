import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';
import ItemDetail from '../item-detail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from "../../firebase";

const ItemDetailContainer = () => {
    const [itemInfo, setItemInfo] = useState(null)
    const { id } = useParams();

    const getItem = async () => {
        try {
            const item = doc(db, "items", id);
            const itemDetail = await getDoc(item);
            setItemInfo({...itemDetail.data()});
        } catch (error) {
            console.log('Ocurrio un error: ', error);
        }
    };

    useEffect(() => {
        getItem();
    }, [id])

    return (
        <div className="ItemDetailContainer">
            {itemInfo && <ItemDetail item={itemInfo} />}
        </div>
    )
}

export default ItemDetailContainer;
