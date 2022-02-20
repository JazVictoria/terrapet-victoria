import React, { useState, useEffect } from 'react';
import './ItemList.css'
import Item from '../item/Item';
import MockInfo from '../../mocks';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    const getInfo = new Promise ((resolve, reject) => {
        const itemsInfo = categoryId ? MockInfo.filter(item => item.category === categoryId) : MockInfo;
        setTimeout(() => {
            resolve(itemsInfo);
        }, 2000);
    });

    useEffect(() => {
        getInfo
            .then((response) => {
                setItems(response);
            })
            .catch((error) => {
                console.log('Ocurrio un error: ', error);
            });
    }, [categoryId])

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            {(items && items.length > 0) &&
                items.map(item => <Item key={item.id} id={item.id} stockAmount={item.stock} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />)
            }
        </div>
    )
}

export default ItemList;
