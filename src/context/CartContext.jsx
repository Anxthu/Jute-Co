import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id && item.color === product.color);
            if (existing) {
                return prev.map(item => item.id === product.id && item.color === product.color
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId, color) => {
        setCartItems(prev => prev.filter(item => !(item.id === itemId && item.color === color)));
    };

    const updateQuantity = (itemId, color, amount) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === itemId && item.color === color) {
                const newQty = item.quantity + amount;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const cartTotal = cartItems.reduce((acc, item) => acc + (parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
