import React from "react"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [selected, setSelected] = React.useState(0)
  const [quantity, setQuantity] = React.useState(0)
  const [cartOpen, setCartOpen] = React.useState(true)
  const [basket, setBasket] = React.useState(JSON.parse(localStorage.getItem('deliveryapp')) || {user:[],foods:[],userLogged:{}})

  React.useEffect(() => {
    localStorage.setItem('deliveryapp', JSON.stringify(basket))
  }, [basket])

  const toggleCart = () => {
    setCartOpen(prev => !prev)
  }

  console.log(basket)
  const selectItem = (id) => {
    setSelected(id)
    setQuantity(1)
  }

  const increment = () => {
    setQuantity((prev) => {
      return (prev + 1)
    })
  }

  const decrement = () => {
    setQuantity((prev) => {
      if (prev===0) {
        return 0
      }
      else {
        return (prev - 1)
      }
    })
  }

  const incrementCart = (itemID) => {
    let newFoods = basket.foods.map(each =>{
      if (each.id===itemID) {
        return {id:itemID, quantity: each.quantity + 1}
      }
      else {
        return {...each}
      }
    })
    setBasket(prevBasket=>({...prevBasket,foods:newFoods}))
  }

  const decrementCart = (itemID) => {
    let newFoods = basket.foods.map(each =>{
      if (each.id===itemID) {
        return {id:itemID, quantity: each.quantity - 1}
      }
      else {
        return {...each}
      }
    })
    setBasket(prevBasket=>({...prevBasket,foods:newFoods.filter(x => x.quantity !== 0)}))
  }

  const removeItem = (itemID) => {
    let newFoods = basket.foods.map(each =>{
      if (each.id===itemID) {
        return  {id:itemID, quantity: 0}
      }
      else {
        return {...each}
      }
    })
    setBasket(prevBasket=>({...prevBasket,foods:newFoods.filter(x => x.quantity !== 0)}))
  }


  const addToCart = (itemID) =>{
    if (quantity===0) {
      return
    }
    else {
      const exist = basket.foods.find(each=>each.id===itemID)
      if (exist) {
        const newFoods = basket.foods.map(each => {
          if (each.id===itemID) {
            return {id:itemID, quantity: quantity}
          }
          else {
            return {...each}
          }
        })
        setBasket(prevBasket=> ({...prevBasket,foods:newFoods}))
      }
      else {
        setBasket(prevBasket=> ({...prevBasket,
          foods:[...prevBasket.foods,
                {id:itemID, quantity: quantity}]
          })
        )
      }
    }
    setQuantity(0)
    setSelected(0)
  }

  const clearCart = (id) => {
      setBasket(prevBasket => ({...prevBasket, foods:[]}))
    }

  const clearSelected = (id) => {
    setSelected(0)
  }

  const submitSignUp =(signUpData) => {
    setBasket(prevBasket=> ({...prevBasket,
      user:[...prevBasket.user,
            signUpData]
      }))
  }

  const submitLogin =(loginData) => {
    const find=basket.user.find(x => x.email===loginData.email && x.password===loginData.password)
    setBasket(prevBasket=> ({...prevBasket,
      userLogged:find
      }))
  }

  const clearUserLogged = () => {
    setBasket(prevBasket=> ({...prevBasket, userLogged:{}}))
  }

  const clearUser = () => {
    setBasket(prevBasket => ({...prevBasket, user:[]}))
  }

  console.log(basket)
  return (
    <Router>
      <Routes>
        <Route path="/" element=
        {<Home
          />
        }/>
        <Route path="/shop" element=
        {<Shop
          basket={basket}
          selected={selected}
          quantity={quantity}
          cartOpen={cartOpen}
          toggleCart={toggleCart}
          increment={increment}
          decrement={decrement}
          addToCart={addToCart}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
          removeItem={removeItem}
          selectItem={selectItem}
          clearCart={clearCart}
          clearSelected={clearSelected}
          />
        } />

        <Route path="/signup" element={<SignUp basket={basket} submitSignUp={submitSignUp}/>} />
        <Route path="/login" element={<LogIn basket={basket} submitLogin={submitLogin} />} />

      </Routes>
    </Router>
  )
}

