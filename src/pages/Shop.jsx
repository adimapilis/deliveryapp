import React from "react"
import Navbar from "../components/navbar"
import Order from "../components/order"
import Shop from "../components/shop"
import Footer from "../components/footer"
import Cart from "../components/cart"


export default function ShopPage(props) {
  return (
    <main>
      <Navbar
      toggleCart={props.toggleCart}/>
      {(props.selected) ?
      <Order
        selected={props.selected}
        increment={props.increment}
        decrement={props.decrement}
        addToCart={props.addToCart}
        quantity={props.quantity}
        clearSelected={props.clearSelected}/> : <></>}
      <Shop selectItem={props.selectItem}/>
      {(props.cartOpen) ?
      <Cart
        userLogged={props.userLogged}
        basket={props.basket}
        incrementCart={props.incrementCart}
        decrementCart={props.decrementCart}
        removeItem={props.removeItem}
        clearCart={props.clearCart}/> : <></>}
      <Footer/>
    </main>
  )
}