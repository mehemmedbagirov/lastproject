import React from 'react'
import loginRegisterBg from "../../../Images/login-register-bg.png"
import HeartLogo from '../../../Images/likeLogo.svg'
import "./Login.scss"
import { Link } from 'react-router-dom'

function Login() {
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
            <h4 className="login-password-tittle">Log In</h4>
            <form className='login-form' action="">
              <label className="login-password-text">Email</label>
              <input className="login-input" type="text" placeholder="Email..." name="email" required/>

              <label id='password' className="login-password-text">Password</label>
              <input name="password" className="login-input" type="password" placeholder="Pasword..." required/>
                
              <a className="forgote-password-link" href='/'>Forgote pasword?</a>

              <div className="buttons">
                <button className="login-box">Login</button>
              </div>
            </form>

            <div className="login-text-signup">
              <p className="login-text">Don't have an account?</p>
              <Link className="login-link" to='/register'>Sign Up</Link>
            </div>
          </div>
        </div>
    </div>
      </section>
    </main>
  )
}

export default Login