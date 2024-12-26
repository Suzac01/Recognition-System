import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../loginform/loginform.module.css";
import apple from "../../../assets/icons/signup/apple.png";
import facebook from "../../../assets/icons/signup/facebook.png";
import google from "../../../assets/icons/signup/google.png";

const LoginForm = () => {
  const [logindata, setLogindata] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [userRole, setUserRole] = useState(null); // Role management

  const navigate = useNavigate();

  // Handles input field changes
  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setLogindata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the "Remember Me" toggle
  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  // Handles the form submission and validates with the backend
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = logindata.email.trim();
    const trimmedPassword = logindata.password.trim();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: trimmedEmail,
        password: trimmedPassword,
      });

      const { message, role } = response.data;

      if (message === "Login successful") {
        setUserRole(role); // Set user role state
        localStorage.setItem("userRole", role); // Persist role in local storage

        // Check if the role is null or undefined
        if (role === null || role === "null") {
          // Redirect to the user part if role is null
          navigate("/dashboard"); // Adjust route as needed
        } else {
          // Redirect to the admin dashboard if the role is admin
          navigate("/dashboard");
        }
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login", error);
      alert("Invalid credentials!");
    }
  };



  return (
      <div className={styles["signup-form-overlay"]}>
        <div className={styles["signup-form-container"]}>
          {/* Social Login Section */}
          <h6 style={{ color: "black", fontWeight: "bold", fontSize: "20px", marginLeft: "35%", marginBottom: "6%" }}>
            Login with
          </h6>
          <div className={styles["iconn"]}>
            <img src={facebook} alt="Sign In Icon" className={styles["signupicon"]} />
            <img src={apple} alt="Sign In Icon" className={styles["signupicon"]} />
            <img src={google} alt="Sign In Icon" className={styles["signupicon"]} />
          </div>

          {/* Divider */}
          <div className={styles["or-divider"]}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          {/* Login Form */}
          <form className={styles["signup-form"]} onSubmit={HandleSubmit}>
            <div style={{ fontSize: "12px", color: "black" }}>
              Email
              <input
                  type="email"
                  name="email"
                  value={logindata.email}
                  onChange={HandleInputChange}
                  placeholder="Your Email"
                  className={styles["input-field"]}
                  required
              />
            </div>
            <div style={{ fontSize: "12px", marginTop: "20px", marginBottom: "10px", color: "black" }}>
              Password
              <input
                  type="password"
                  name="password"
                  value={logindata.password}
                  onChange={HandleInputChange}
                  placeholder="Your Password"
                  className={styles["input-field"]}
                  required
              />
            </div>

            {/* Remember Me Toggle */}
            <div className={styles["remember-me-toggle"]}>
              <div
                  className={`${styles["toggle-switch"]} ${rememberMe ? styles["on"] : styles["off"]}`}
                  onClick={handleRememberMeToggle}
              >
                <div className={`${styles["toggle-circle"]} ${rememberMe ? styles["on"] : styles["off"]}`}></div>
                <label style={{ fontSize: "12px", marginBottom: "3px", color: "black", marginLeft: "50px" }}>
                  Remember Me
                </label>
              </div>
            </div>

            <button type="submit" className={styles["signup-btn"]}>
              Login
            </button>
          </form>

          {/* Signup Redirect */}
          <div className={styles["signin-link"]}>
            <p>
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;
