import React from "react"

export default function Signup(props) {
  const [signUpData, setSignUpData] = React.useState(
    {fullName:"", contactNumber:"", address:"",  email:"", password:"",password2:""}
  )

  const handleChange = (event) => {
    setSignUpData (prev => {
      const {name, value} = event.target
      return {
        ...prev,
        [name]: value
      }
    })
  }
  console.log(signUpData)

  return (
    <div className="signup-bg">
      <div className="signup-title">Sign up to avail our delivery! </div>
      <form className="signup">
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="fullName"
            value={signUpData.fullName}
            placeholder="Full Name" required
          ></input>
          <input
            type="text"
            onChange={handleChange}
            name="contactNumber"
            value={signUpData.contactNumber}
            placeholder="Contact Number" required
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="address"
            value={signUpData.address}
            placeholder="Address" required
          ></input>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={signUpData.email}
            placeholder="Email" required

          ></input>
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={signUpData.password}
            placeholder="Password" required
          ></input>
          <input
            type="password"
            onChange={handleChange}
            name="password2"
            value={signUpData.password2}
            placeholder="Confirm Password" required
          ></input>
        </div>
        <button onClick={()=>props.submitSignUp(signUpData)}>Create Your Account</button>
      </form>
    </div>
  )
}