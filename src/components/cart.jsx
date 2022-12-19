import React from "react"
import Data from "../data"
import ItemCard from "./cart_itemcard"


export default function Cart(props) {

  const toRender = props.basket.foods.map((basket) => {
    let data = Data.find(eachData => eachData.id === basket.id)
    return  <ItemCard
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            quantity={basket.quantity}
            desc={data.desc}
            incrementCart={props.incrementCart}
            decrementCart={props.decrementCart}
            removeItem={props.removeItem}
            clearCart={props.clearCart}
            />
  })
  const bill = props.basket.foods.map((basket) => {
    let data = Data.find(eachData => eachData.id === basket.id)
    return (data.price*basket.quantity)
  }).reduce((x,y)=>x+y,0)
  return (

      <main className="cart">
        <div className="delivery">
          <i className="bi bi-bicycle"></i>
          <div>
            <div>Delivery Address</div>
            <div><b>Quezon City</b></div>
          </div>
        </div>
        <div className="cart-label">
          <div>My Cart</div>
          <i className="bi bi-x-circle-fill" onClick={props.clearCart}></i>
        </div>
        <div className="cart-items">{toRender}</div>
        <div className="cart-bottom">
          <div><div>Subtotal</div><div>${bill}</div></div>
          <div><div>Delivery fee</div><div>$5</div></div>
          <div><div>Total</div><div>${bill+5}</div></div>
          <button>Proceed to Check Out</button>

        </div>
      </main>

  )
}