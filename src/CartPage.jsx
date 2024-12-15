import React from 'react';
import { useCart } from './CartContext';  
import './CartPage.css'; 

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalAmount, getTotalQuantity } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
    </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {getTotalQuantity()}</p>
            <p>Total Price: ${getTotalAmount()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
