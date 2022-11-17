import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Store from "./pages/Store";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details";

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
