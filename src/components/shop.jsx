import React from "react"
import Data from "../data"
import ItemCard from "./shop_itemcard"

export default function Shop(props) {
  const items = Data.map((each) =>
  <ItemCard
    key={each.id}
    id={each.id}
    img={each.img}
    title={each.title}
    desc={each.desc}
    price={each.price}
    selectItem={props.selectItem}>
  </ItemCard>
  )


  return (
    <div>
      <main className="shop">
        {items}
      </main>
    </div>
  )
}