import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import { data as product } from "../components/Data/Data";
import "../css/Detail.css";

const Details = () => {
  const { addToCart } = useContext(CartContext);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const idProduct = Number(window.location.pathname.slice(9)) - 1;

  return (
    <div>
      <div className="detail-product" key={product[idProduct]._id}>
        <img src={product[idProduct].image} alt="" />
        <div className="info">
          <h3>Name product: {product[idProduct].name}</h3>
          <span>Price: ${product[idProduct].price}</span>
          <p className="details">Details: {product[idProduct].detail}</p>
          <Link
            to="/cart"
            className="btn-cart"
            onClick={() => addToCart(product[idProduct])}
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
