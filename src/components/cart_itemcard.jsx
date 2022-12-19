import React from "react"


export default function ItemCard(props) {
  
  return (
    <main className="product">
      <div>
        <div className="product-buttons">
          <button onClick={()=>props.decrementCart(props.id)}>-</button>
          <div>{props.quantity}</div>
          <button onClick={()=>props.incrementCart(props.id)}>+</button>
        </div>
        <div onClick={()=>props.removeItem(props.id)}>Remove</div>
      </div>

      <div className="product-details">
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <div>${props.price}</div>
      </div>
      <div className="product-total">${props.quantity*props.price}</div>
    </main>
  )
}