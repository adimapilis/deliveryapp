import React from "react"
import Data from "../data"


export default function Order(props) {
  const selected= props.selected
  let item = Data.find(x => x.id ===selected) || []
  return (
    <main className="order-bg">
      <div className="order">
        <i className="bi bi-x-circle-fill" onClick={props.clearSelected}></i>
        <img src={item.img}></img>
        <div className="order-details">
          <div>{item.title}</div>
          <div className="order-price">
            <div>Price: ${props.quantity*item.price}</div>
            <div className="order-buttons">
              <button onClick={props.decrement}>-</button>
              <div>{props.quantity}</div>
              <button onClick={props.increment}>+</button>
            </div>
          </div>
          <button className="order-button2" onClick={()=>props.addToCart(selected)}>ORDER</button>
        </div>
      </div>
    </main>
  )
}
