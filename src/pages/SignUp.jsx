import React from "react"
import Navbar from "../components/navbar"
import Signup from "../components/signup"
import Footer from "../components/footer"

export default function App(props) {
  return (
    <main>
      <Navbar/>
      <Signup basket={props.basket} submitSignUp={props.submitSignUp}/>
      <Footer/>
    </main>
  )
}