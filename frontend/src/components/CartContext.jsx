import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addProducts = (product, quantity) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id );
            if (itemExists) {
                return prevItems.map((item) => 
                    item.id === product.id ?
                    {...itemExists, quantity: item.quantity + quantity} :
                    item
                )
            } else {
                return [...prevItems, {...product, quantity}]
            }
        })
    }
    const deleteProducts = (product) => {
        setCartItems((prevItems) => {
            const itemToRemove = prevItems.find((item) => 
            item.id === product.id);
            if (itemToRemove)
                return prevItems.filter((item) => item !== itemToRemove);
             else return;
        });
    } 
    const updateQuantity = (product, newQuantity) => {
        if (newQuantity <= 0) {
            deleteProducts(product)
            return;
        }
        setCartItems((prevItems) => {
            prevItems.map((item) => 
                item.id === product.id ? 
                {...item, quantity: newQuantity} :
                item);
        })
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addProducts,
            deleteProducts,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error('useCart must be used within a CartProvider');
    return context;
}