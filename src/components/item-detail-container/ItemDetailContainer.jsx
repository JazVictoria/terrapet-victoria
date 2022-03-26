import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';
import ItemDetail from '../item-detail/ItemDetail';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import { useParams } from 'react-router-dom';
import db from "../../firebase";

const ItemDetailContainer = () => {
    const [itemInfo, setItemInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const { id } = useParams();

    const getItem = async () => {
        try {
            setLoading(true);
            const item = doc(db, "items", id);
            const itemDetail = await getDoc(item);
            setItemInfo({id: id, ...itemDetail.data()});
            
            if (itemDetail.data() && itemDetail.data().category) {
                setLoading(false);
            } else {
                setLoading(false);
                setShowError(true);  
            }
        } catch (error) {
            setLoading(false);
            setShowError(true);
            console.log('Ocurrio un error: ', error);
        }
    };

    useEffect(() => {
        getItem();
    }, [id])

    return (
        <div>
            {loading ?
                <Spinner />
                :
                (showError ?
                    <Error message={"El producto que buscas no existe"} hasButton={false} />
                    :
                    <div className="ItemDetailContainer">
                        {itemInfo && <ItemDetail item={itemInfo} />}
                    </div>
                )
            }
        </div>
    )
}

export default ItemDetailContainer;
