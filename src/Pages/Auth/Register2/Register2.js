import React from 'react'
import { Link } from 'react-router-dom'
import loginRegisterBg from "../../../Images/login-register-bg.png"
import HeartLogo from '../../../Images/likeLogo.svg'
import "./Register2.scss"
function Register2() {
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
            <input className="login-input" type="number" placeholder="Enter your height" name="email" required/>
            <input className="login-input" type="number" placeholder="Enter your weight" name="email" required/>

            <div className="name-surname">
              <select className="login-input" id="cars">
                <option defaultChecked value="Gender">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
                <input className="login-input" type="number" placeholder="Age" name="email" required/>
                <input className="login-input" type="number" placeholder="Blood type" name="email" required/>
            </div>
            
            <div className="buttons">
              <Link to={"/register"}> 
              <button className="back-box">Back</button>
              </Link>
              <button className="login-box">Sign Up</button>
            </div>
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

export default Register2