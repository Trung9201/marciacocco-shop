import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import { data as product } from "../components/Data/Data";

const Details = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      {product.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.image} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <p>{item.detail}</p>
            <Link to="/cart" className="cart" onClick={() => addToCart(item)}>
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
