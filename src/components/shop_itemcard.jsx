import React from "react"
import Data from "../data"

export default function ItemCard(props) {

  return (
    <main className="item-card">
      <img src={props.img}></img>
      <div>{props.title}</div>
      <div>{props.desc}</div>
      <div>${props.price}</div>
      <button onClick={()=>props.selectItem(props.id)}>Order</button>
    </main>
  )
}