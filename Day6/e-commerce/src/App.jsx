// e-commerce-app.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div className="home">
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Unveil Exceptional Deals</h1>
        <p className="hero-subtitle">Premium products, exceptional value, all at your fingertips.</p>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    </header>
    <section className="features">
      <div className="feature">
        <h2>Vast Variety</h2>
        <p>Browse through an extensive collection of items, suited for every taste and need.</p>
      </div>
      <div className="feature">
        <h2>Swift Delivery</h2>
        <p>Experience lightning-fast shipping, bringing your purchases straight to your doorstep.</p>
      </div>
      <div className="feature">
        <h2>Trusted Security</h2>
        <p>Shop with peace of mind using our encrypted and secure payment methods.</p>
      </div>
    </section>
  </div>
);

const Products = () => (
  <div className="products">
    <header className="products-header">
      <h1 className="products-title">Explore Our Top Picks</h1>
      <p className="products-subtitle">Handpicked selections tailored to your preferences and lifestyle.</p>
    </header>
    <section className="product-list">
      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1530745342582-0795f23ec976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="Product 1" className="product-image" />
        <h2 className="product-name">Product 1</h2>
        <p className="product-description">A must-have item designed to make everyday tasks easier.</p>
        <Link to="/product/1" className="btn btn-secondary">See More</Link>
      </div>
      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1567365607350-aa8ebcd4e0da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="Product 2" className="product-image" />
        <h2 className="product-name">Product 2</h2>
        <p className="product-description">Engineered for excellence, combining quality and durability.</p>
        <Link to="/product/2" className="btn btn-secondary">See More</Link>
      </div>
      <div className="product-card">
        <img src="https://images.unsplash.com/photo-1493236272120-200db0da1927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="Product 3" className="product-image" />
        <h2 className="product-name">Product 3</h2>
        <p className="product-description">Designed for versatility and maximum convenience.</p>
        <Link to="/product/3" className="btn btn-secondary">See More</Link>
      </div>
    </section>
  </div>
);

const ProductDetails = ({ id }) => (
  <div className="product-details">
    <h1>Product Details: {id}</h1>
    <p>Discover all the features, specs, and benefits of Product {id}. It’s the perfect addition to your collection.</p>
    <Link to="/cart" className="btn">Add to Cart</Link>
  </div>
);

const Cart = () => (
  <div className="cart">
    <h1>Your Shopping Cart</h1>
    <p>It looks like your cart is empty. Why not fill it with some great finds?</p>
    <Link to="/products" className="btn">Browse Products</Link>
  </div>
);

const NotFound = () => (
  <div className="not-found">
    <h1>Oops! 404 - Page Not Found</h1>
    <p>We can't seem to find the page you're looking for. Let’s take you back to the homepage.</p>
    <Link to="/" className="btn">Back to Home</Link>
  </div>
);


const App = () => (
  <Router>
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={({ match }) => <ProductDetails id={match.params.id} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;