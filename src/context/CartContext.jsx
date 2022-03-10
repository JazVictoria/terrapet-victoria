import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [productQuantity, setproductQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const isInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const updateProductQuantity = () => {
        let totalProducts = 0;
        let totalToPay = 0;
        cart.forEach(item => {
            totalProducts = totalProducts + item.quantity;
            totalToPay = totalToPay + (item.price * item.quantity);
        });
        setproductQuantity(totalProducts);
        setTotalPrice(totalToPay);
    }

    const removeProductFromCart = (id) => {
        const index = cart.findIndex(item => item.id === id);
        let newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
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

    const resetCart = () => {
        setCart([]);
    }

    useEffect(() => {
        updateProductQuantity();
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, updateCart, productQuantity, totalPrice, removeProductFromCart, resetCart }}>
            {children}            
        </CartContext.Provider>
    )
}

export default CartProvider;
