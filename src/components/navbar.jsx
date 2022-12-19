import React from "react"
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <main className="navbar">
      <Link to="/" className="link">
        <div className="left-nav">
          <img src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg"></img>
          <div>DeliveryApp
          </div>
        </div>
      </Link>
      <div className="middle-nav">
        <i className="bi bi-search"></i>
        <input type="search" placeholder="Search Here"></input>
      </div>
      <div className="right-nav">
        <Link to="/shop" className="link">
          <div className="nav-signup">Order Now</div>
        </Link>
        <Link to="/signup" className="link">
          <div className="nav-signup">Sign Up</div>
        </Link>
        <Link to="/login" className="link">
        <div className="nav-login">Login</div>
        </Link>
        <i className="bi bi-bag-check-fill nav-cart" onClick={props.toggleCart}></i>
      </div>
    </main>
  )
}