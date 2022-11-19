import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../context/cart/CartContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { cartItems } = useContext(CartContext);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-toggle" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <Link to="/" className="navbar-logo">
            <img src="./images/logo.png" alt="Logo" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link" onClick={closeMobileMenu}>
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-cart">
              <Link to="/cart" className="nav-link" onClick={closeMobileMenu}>
                <ion-icon name="bag-handle-outline"></ion-icon>
                {cartItems.length > 0 && (
                  <div className="item-count">
                    <span>{cartItems.length}</span>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
