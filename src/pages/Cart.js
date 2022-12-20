import React, { useContext, useState,  } from "react";
import "../css/Cart.css";
import CartContext from "../context/cart/CartContext";
import Button from "../components/Button/Button";

const Cart = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { removeItem, cartItems } = useContext(CartContext);
  const [cart, setCart] = useState(cartItems)

  // const [amount, setamount] = useState(1);
  const updateAmount = (item, d) => {
    console.log(item,d);
    let ind = -1;
    cart.forEach((data, index) => {
      if(data.id === item.id) 
        ind = index
    })

    const tempArr = cartItems;
    tempArr[ind].amount += d;
    if(tempArr[ind].amount <= 0)
      tempArr[ind].amount = 0
  
    setCart([...tempArr])
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <form action="" className="cart-receipt">
          <div className="cart-payment">
            <div className="cart-shipment-details">
              <h3>Shipment Details</h3>
              <input
                className="input-name"
                type="text"
                required
                placeholder="* You name"
              />
              <input
                className="input-email"
                type="text"
                required
                placeholder="Email"
              />
              <input
                className="input-name"
                type="text"
                required
                placeholder="* Phone number"
              />
              <input
                className="input-name"
                type="text"
                required
                placeholder="* Address"
              />
              <p>(*) is can't be left blank</p>
            </div>
            <div className="cart-payment-methods">
              <h3>Payment methods</h3>
              <div className="cart-payment-item">
                <input type="radio" name="radio-payment" required />
                <span>
                  <i class="fa-brands fa-cc-amazon-pay"></i> Payment by card
                  (ATM, Visa, masterCard)
                </span>
              </div>
              <div className="cart-payment-item">
                <input type="radio" name="radio-payment" required />
                <span>
                  <i class="fa-solid fa-truck"></i> Payment on Delivery (COD)
                </span>
              </div>
            </div>
          </div>

          <div className="cart-list">
            {cart.map((item, key) => (
              <div className="cart-item" key={key}>
                <div className="cart-item-imformation">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}$</p>
                    <div className="cart-item-control">
                      <div
                        className="cart-item-control-button"
                         onClick={() => updateAmount(item, -1)}
                      >
                        -
                      </div>
                      <div className="cart-item-control-input">{item.amount}</div>
                      <div
                        className="cart-item-control-button"
                        onClick={() => updateAmount(item, +1)}
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
                  (amount, item) => item.price * item.amount + amount,
                  0
                )}
                $
              </h3>
            </div>
            <Button>Create order</Button>
            {/* Order completion */}
          </div>
        </form>
      )}
    </div>
  );
};

export default Cart;
