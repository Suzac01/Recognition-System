import React, { useState } from 'react';
import './signupform.css';
import  apple from '../../../assets/icons/signup/apple.png';
import  facebook from '../../../assets/icons/signup/facebook.png';
import  google from '../../../assets/icons/signup/google.png';

const SignupForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="signup-form-overlay">
      <div className="signup-form-container">
        <div className="iconn">
        <h3><img src={facebook} alt="Sign In Icon" className="signupicon" /></h3>
        <h3><img src={apple} alt="Sign In Icon" className="signupicon" /></h3>
        <h3><img src={google} alt="Sign In Icon" className="signupicon" /></h3>
        </div>

        <div className="or-divider">
          <hr/>
          <span>or</span>
          <hr/>
        </div>

        <form className="signup-form">
          <div style={{fontSize:'12px', marginBottom:'3px'}}>Name</div>
          <input type="text" placeholder="Your Full Name" className="input-field" required />

          <div style={{fontSize:'12px', marginBottom:'3px'}}>Email</div>
          <input type="email" placeholder="Your Email Address" className="input-field" required />

          <div style={{fontSize:'12px', marginBottom:'3px'}}>Password</div>
          <input type="password" placeholder="Your Password" className="input-field" required />

          <div className="remember-me-toggle">
            <label style={{fontSize:'12px', marginBottom:'3px'}}>Remember me</label>
            <div 
              className={`toggle-switch ${rememberMe ? 'on' : 'off'}`} 
              onClick={handleRememberMeToggle}
            >
              <div className={`toggle-circle ${rememberMe ? 'on' : 'off'}`}></div>
            </div>
          </div>

          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>

        <div className="signin-link">
          <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
