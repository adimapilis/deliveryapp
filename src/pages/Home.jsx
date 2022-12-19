import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <div class="home-content">
        <img class="home-img" src="https://images.pexels.com/photos/9461217/pexels-photo-9461217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <div class="home-container">
          <h1>Welcome to Delivery App</h1>
          <h3>Already have an account?</h3>
          <Link to="/login" class="home-btn">Login</Link>
          <h3>Register new account</h3>
          <Link to="/signup"  class="home-btn">Sign Up</Link>
        </div>

      </div>
      <Footer/>
    </main>
  )
}