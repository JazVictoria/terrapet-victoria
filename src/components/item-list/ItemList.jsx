import React, { useState, useEffect } from 'react';
import './ItemList.css'
import Item from '../item/Item';

const ItemList = () => {
    //info solo para usar como falso response
    const itemsForPromise = [{id: 1, title: 'Hueso antiestres', description: 'Hueso masticable para ayudar a quitar el estres', stock: 5, price: 100, pictureUrl: 'https://sc02.alicdn.com/kf/Hd510c222b8944ec1b66bcebde98328a41/239423207/Hd510c222b8944ec1b66bcebde98328a41.jpg_.webp'}, {id: 2, title: 'Cama Hush', description: 'Cama rectangular de 80 x 80', stock: 9, price: 490, pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71-tsDiw8iL._AC_SL1500_.jpg'}, {id: 3, title: 'Comedero y bebedero', description: 'Comedero y babedero de madera de pino', stock: 7, price: 400, pictureUrl: 'https://i.pinimg.com/originals/25/c7/44/25c744d9908ef66f6c6822f54ce65ddc.jpg'}, {id: 4, title: 'Alimento balanceado', description: 'Bolsa de 10kg de Royal Canin', stock: 9, price: 1200, pictureUrl: 'https://centropet.com/wp-content/uploads/2020/06/988933-MLA32106178535_092019-500x500.jpg'}];


    const [items, setItems] = useState([]);

    const getInfo = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsForPromise);
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
    }, [])

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            {(items && items.length > 0) &&
                items.map(item => <Item key={item.id} stockAmount={item.stock} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} />)
            }
        </div>
    )
}

export default ItemList;
