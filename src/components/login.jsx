import React from "react"

export default function Login(props) {
  const [loginData, setLoginData] = React.useState(
    {email:"", password:""}
  )

  const handleChange = (event) => {
    setLoginData (prev => {
      const {name, value} = event.target
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div className="login-bg">
      <div className="login-title">Log in to start placing your order!</div>
      <form className="login">
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={loginData.email}
          placeholder="Email" required
        ></input>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={loginData.password}
          placeholder="Password" required
        ></input>
        <button onClick={()=>props.submitLogin(loginData)}>Log In</button>
      </form>
    </div>
  )
}