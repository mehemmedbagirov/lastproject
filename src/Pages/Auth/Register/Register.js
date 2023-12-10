import React from 'react'
import loginRegisterBg from "../../../Images/login-register-bg.png"
import HeartLogo from '../../../Images/likeLogo.svg'
import { Link } from 'react-router-dom'
import "./Register.scss"

function Register() {
  return ( 
    <main className='account'>
    <section className='account-left'>
      <div className="login-img">
          <img src={loginRegisterBg} alt="banner" />
      </div>
    </section>
    <section className='account-right'>
    <div className="login">
      <div className="login-area">

          <div className="header">
            <div className="logo">
              <img src={HeartLogo} alt="HeartLogo" />
            </div>
            <h3 className="title">Hearts</h3>
          </div>
        
        <div className="login-password">
          <h4 className="login-password-tittle">Sign Up</h4>
          <form className='login-form' action="">
            <input className="login-input" type="text" placeholder="Enter your email" name="email" required/>

            <div className="name-surname">
              <input className="login-input" type="text" placeholder="Your first name" name="email" required/>
              <input className="login-input" type="text" placeholder="Your last name" name="email" required/>
            </div>
            
            <input name="password" className="login-input" type="password" placeholder="Password" required/>
              

            <Link to={"/register2"}>
              <button className="login-box">Continue</button>
            </Link>
          </form>

          <div className="login-text-signup">
            <p className="login-text">Already have an account?</p>
            <Link className="login-link" to='/login'>Log In</Link>
          </div>
        </div>
      </div>
  </div>
    </section>
  </main>
  
  )
}

export default Register