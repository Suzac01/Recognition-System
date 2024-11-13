import React, { useState } from 'react';
import styles from '../loginform/loginform.module.css';
import  apple from '../../../assets/icons/signup/apple.png';
import  facebook from '../../../assets/icons/signup/facebook.png';
import  google from '../../../assets/icons/signup/google.png';

const SignupForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className={styles["signup-form-overlay"]}>
  <div className={styles["signup-form-container"]}>
    <h6 style={{color:'black', fontWeight:'bold', fontSize:'20px', marginLeft:'35%', marginBottom:'6%'}}>Sign in with</h6>
    <div className={styles["iconn"]}>
      <h3><img src={facebook} alt="Sign In Icon" className={styles["signupicon"]} /></h3>
      <h3><img src={apple} alt="Sign In Icon" className={styles["signupicon"]} /></h3>
      <h3><img src={google} alt="Sign In Icon" className={styles["signupicon"]} /></h3>
    </div>

    <div className={styles["or-divider"]}>
      <hr/>
      <span>or</span>
      <hr/>
    </div>
    <form className={styles["signup-form"]}>
      <div style={{ fontSize: '12px', color: 'black' }}>Name
      <input type="text" placeholder="Your Full Name" className={styles["input-field"]} required />
      </div>
      <div style={{ fontSize: '12px', marginTop: '20px', marginBottom:'10px', color: 'black' }}>Password
      <input type="email" placeholder="Your Password" className={styles["input-field"]} required />
      </div>
      <div className={styles["remember-me-toggle"]}>
      <div 
          className={`${styles["toggle-switch"]} ${rememberMe ? styles["on"] : styles["off"]}`} 
          onClick={handleRememberMeToggle}
        >
          <div className={`${styles["toggle-circle"]} ${rememberMe ? styles["on"] : styles["off"]}`}></div>
        
        <label style={{ fontSize: '12px', marginBottom: '3px', color:'black', marginLeft:'50px' }}>RememberMe</label>
        
      </div>
      </div>

      <button type="submit" className={styles["signup-btn"]}>SIGN UP</button>
    </form>

    <div className={styles["signin-link"]}>
  <p>Don't have an account? <a href="/signup">Login</a></p>
</div>

  </div>
</div>

  );
};

export default SignupForm;
