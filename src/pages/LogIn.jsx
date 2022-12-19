import React from "react"
import Navbar from "../components/navbar"
import Login from "../components/login"
import Footer from "../components/footer"

export default function LogIn(props) {
  return (
    <main>
      <Navbar/>
      <Login basket={props.basket} submitLogin={props.submitLogin}/>
      <Footer/>
    </main>
  )
}