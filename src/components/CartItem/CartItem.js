import React, { useContext, useState } from "react";
import "../../css/Cart.css";
import CartContext from "../../context/cart/CartContext";

const CartItem = () => {
  const { removeItem, cartItems } = useContext(CartContext);
  const [quanity, setQuanity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuanity(quanity + 1);
    } else {
      setQuanity(quanity - 1 < 1 ? 1 : quanity - 1);
    }
  };

  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div className="cart-item">
          <div className="cart-item-imformation">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}$</p>
              <div className="cart-item-control">
                <div
                  className="cart-item-control-button"
                  onClick={() => updateQuantity("minus")}
                >
                  -
                </div>
                <div className="cart-item-control-input">{quanity}</div>
                <div
                  className="cart-item-control-button"
                  onClick={() => updateQuantity("plus")}
                >
                  +
                </div>
              </div>
            </div>

            <div className="remove-item" onClick={() => removeItem(item.id)}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
