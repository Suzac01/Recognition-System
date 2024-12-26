import React, { useState } from 'react';
import './signupform.css';
import apple from '../../../assets/icons/signup/apple.png';
import facebook from '../../../assets/icons/signup/facebook.png';
import google from '../../../assets/icons/signup/google.png';
import axios from 'axios';

const SignupForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);  // State to control modal visibility
  const [signupdata, setsignupdata] = useState({
    name: '',
    email: '',
    password: '',
  });

  const HandleInputChange = (e) => {
    const {name, value} = e.target;
    console.log(`Input Change Detected: ${name} = ${value}`);
    setsignupdata((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signup', signupdata);
      console.log('Signup successful', response.data);
      setModalVisible(true);  // Show modal after successful signup
      setsignupdata({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Error during signup', error);
    }
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const closeModal = () => {
    setModalVisible(false);  // Close modal
  };

  return (
      <div className="signup-form-overlay">
        <div className="signup-form-container">
          <div className="iconn">
            <h3><img src={facebook} alt="Sign In Icon" className="signupicon"/></h3>
            <h3><img src={apple} alt="Sign In Icon" className="signupicon"/></h3>
            <h3><img src={google} alt="Sign In Icon" className="signupicon"/></h3>
          </div>

          <div className="or-divider">
            <hr/>
            <span>or</span>
            <hr/>
          </div>

          <form onSubmit={HandleSubmit} className="signup-form">
            <div style={{fontSize: '12px', marginBottom: '3px'}}>Name</div>
            <input type="text" name="name" value={signupdata.name} onChange={HandleInputChange}
                   placeholder="Your Full Name" className="input-field" required/>

            <div style={{fontSize: '12px', marginBottom: '3px'}}>Email</div>
            <input type="email" name="email" value={signupdata.email} onChange={HandleInputChange}
                   placeholder="Your Email Address" className="input-field" required/>

            <div style={{fontSize: '12px', marginBottom: '3px'}}>Password</div>
            <input type="password" name="password" value={signupdata.password} onChange={HandleInputChange}
                   placeholder="Your Password" className="input-field" required/>

            <div className="remember-me-toggle">
              <label style={{fontSize: '12px', marginBottom: '3px'}}>Remember me</label>
              <div className={`toggle-switch ${rememberMe ? 'on' : 'off'}`} onClick={handleRememberMeToggle}>
                <div className={`toggle-circle ${rememberMe ? 'on' : 'off'}`}></div>
              </div>
            </div>

            <button type="submit" className="signup-btn">SIGN UP</button>
          </form>

          <div className="signin-link">
            <p>Already have an account? <a href="/login">Login ?</a></p>
          </div>
        </div>
        {/* Modal for successful signup */}
        {modalVisible && (
            <div className="modal fade show" style={{display: 'block' }} id="signupModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" style={{marginTop:'12%'}} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Signup Successful</h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          fontSize: '20px',
                          color: 'red',
                          border: 'none',
                          background: 'transparent'
                        }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-icon" style={{textAlign: 'center', fontSize:'70px'}}>
                      <i className="fas fa-check-circle"
                         style={{color: 'green', fontSize: '50px'}}></i> {/* Green Check Icon */}
                    </div>
                    <p style={{textAlign: 'center'}}>You can now log in.</p>
                  </div>
                  <div className="modal-footer" style={{justifyContent: 'center'}}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => window.location.href = "/login"}
                        style={{backgroundColor: '#2D3748', borderColor: '#2D3748'}}
                    >
                      Go to Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};


export default SignupForm;
