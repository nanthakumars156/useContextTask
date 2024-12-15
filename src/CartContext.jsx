import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: quantity } : item
    );
    setCart(newCart);
  };

  const getTotalQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalAmount = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
