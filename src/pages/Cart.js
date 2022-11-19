import React, { useContext, useState } from "react";
import "../css/Cart.css";
import CartContext from "../context/cart/CartContext";
import Button from "../components/Button/Button";

const Cart = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="cart">
      {cartItems.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <div className="cart-receipt">
          <div className="cart-payment">
            <div className="cart-shipment-details">
              <h3>Shipment Details</h3>
              <input
                className="input-name"
                type="text"
                placeholder="* You name"
              />
              <input className="input-email" type="text" placeholder="Email" />
              <input
                className="input-name"
                type="text"
                placeholder="* Phone number"
              />
              <input
                className="input-name"
                type="text"
                placeholder="* Address"
              />
              <p>(*) is can't be left blank</p>
            </div>
            <div className="cart-payment-methods">
              <h3>Payment methods</h3>
              <div className="cart-payment-item">
                <input type="radio" name="radio-payment" />
                <span>
                  <i class="fa-brands fa-cc-amazon-pay"></i> Payment by card
                  (ATM, Visa, masterCard)
                </span>
              </div>
              <div className="cart-payment-item">
                <input type="radio" name="radio-payment" />
                <span>
                  <i class="fa-solid fa-truck"></i> Payment on Delivery (COD)
                </span>
              </div>
            </div>
          </div>

          <div className="cart-list">
            {cartItems.map((item, key) => (
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

                  <div
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="fas fa-times" />
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: </h3>
              <h3>
                {cartItems.reduce(
                  (amount, item) => item.price * quanity + amount,
                  0
                )}
                $
              </h3>
            </div>
            <Button>Order completion</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
