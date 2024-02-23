import React, {useRef,useState,useEffect} from 'react'
import loginRegisterBg from "../../../Images/login-register-bg.png"
import HeartLogo from '../../../Images/likeLogo.svg'
import "./Login.scss"
import { Link } from 'react-router-dom'

function Login({setAuth}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('')

  const [token, setToken] = useState(null)

  const url = "https://5dde-46-32-177-90.ngrok-free.app/auth/login"

  function loginAuth(event) {
    event.preventDefault()
    setEmail(emailRef.current.value)
    setPassword(passwordRef.current.value)
    if(token == null){
      console.log(token);
      setAuth(false)
    }else {
      console.log(token);
      console.log(emailRef.current.value);
      setAuth(true)
    }
    emailRef.current.value = ''
    passwordRef.current.value = ''
  } 

  useEffect(() => {
    const requestOptions = {
      method: 'post', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": email,
        "password": password
    }) 
    };
    fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setToken(data.dto.token) )
    .catch(error => console.error('Hata:', error));
    // token != null setFlag(true) : setFlag(false)
  },[email,password]);

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
            <form onSubmit={loginAuth} className='login-form' action="">
              <label className="login-password-text">Email</label>
              <input ref={emailRef} className="login-input" type="text" placeholder="Email..." name="email" required/>

              <label id='password' className="login-password-text">Password</label>
              <input ref={passwordRef} name="password" className="login-input" type="password" placeholder="Pasword..." required/>
                
              <a className="forgote-password-link" href='/'>Forgote pasword?</a>

              <div className="buttons">
                <button onClick={loginAuth} className="login-box">Login</button>
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