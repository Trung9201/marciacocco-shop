import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/Data";
import "./Products.css";
import CartContext from "../../context/cart/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products">
      {data.map((product, index, key) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={product.image} alt={product.name} />
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <div className="product-btn">
            <div className="overlay">
              <Link
                className="product-btn-detail"
                to={`/product/${product.id}`}
              >
                Details
              </Link>
              <div onClick={() => addToCart(product)}>
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
