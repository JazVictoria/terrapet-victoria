import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ItemList.css'
import Item from '../item/Item';
import { useParams } from 'react-router-dom';
import db from "../../firebase";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    const getInfo = async () => {
        try {
            const data = collection(db, "items");
            const info = !categoryId ? data : query(data, where("category", "==", categoryId));
            const itemCollection = await getDocs(info);
            setItems(itemCollection.docs.map((doc) => ({id: doc.id ,...doc.data()})));
        } catch (error) {
            console.log('Ocurrio un error: ', error);
        }
    }

    useEffect(() => {
        getInfo()
    }, [categoryId])

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            {(items && items.length > 0) &&
                items.map(item => <Item key={item.productId} productId={item.productId} id={item.id} stockAmount={item.stock} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />)
            }
        </div>
    )
}

export default ItemList;
