import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  const [activeTab, setActiveTab]= useState(false);

  return (
    <>
      <div className='main-body'>
        <div className={`container-login ${activeTab ? "active" : ""}`}>
        <div className="form-container sign-up">
          <form>
            <h1 className='mb-3'>Create Account</h1>
            
            <span className='py-3'>Use your email address for registration</span>
            <input type="Name" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Pasword' />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form>
            <h1 className='mb-3'>Sign-In</h1>
          
            <span className='py-3'>Use your email address to sign in </span>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Pasword' />
            <a href=""> Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back</h1>
              <p>Enter your details to use all of site features</p>
              <button className='hidden' onClick={()=> {setActiveTab(false)}}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend</h1>
              <p>Register with your details to use all of site features</p>
              <button className='hidden' onClick={()=> {setActiveTab(true)}} >
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>

      </div>
      
    </>
  );
}