import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../components/item-list-container/ItemListContainer'
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer'
import Cart from '../components/cart/Cart'
import NavBar from '../components/navbar/NavBar'

const Rutas = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
