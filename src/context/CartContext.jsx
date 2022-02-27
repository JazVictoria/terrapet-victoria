import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [productQuantity, setproductQuantity] = useState(0);

    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const updateProductQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            return total = total + item.quantity; 
        });
        setproductQuantity(total);
    }

    const updateCart = (id, title, price, quantity) => {
        if(isInCart(id)) {
            const index = cart.findIndex(item => item.id === id);
            let newCart = [...cart];
            newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + quantity };
            setCart(newCart);
        } else {
            setCart([...cart, {id, title, price, quantity}])
        }
    }

    useEffect(() => {
        updateProductQuantity();
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, updateCart, productQuantity }}>
            {children}            
        </CartContext.Provider>
    )
}

export default CartProvider;
