import React from 'react';
import img from '../../assets/image.png';
import styles from '../login/login.module.css';
import Navbar from '../navbar/navbar';
import Loginform from '../login/loginform/loginform.jsx';

const Login = () => {
    return (
        <>
            <div className={styles.containerFluid}>
            <Navbar/>
            
    <div className={styles.imageWrapper}>
        
        <img src={img} alt="Background" className={styles.image} />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
            <Loginform/>
            {/* Your login content here */}

        </div>
    </div>

    </div>
        </>
    );
}

export default Login;
