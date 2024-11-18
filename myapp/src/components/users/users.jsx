import React from 'react';
import Navbar from "../common/navbar/navbar";
import Main from "../dashboard/main/main";
import Sidebar from "../common/sidebar/sidebar";
import styles from './users.module.css';
import dashimg from '../../assets/dashimg.png';
import UserRec from '../users/UserRec/userRec';


export default function App() {
    return (
        <div>
            <div className={styles['container-full']}>
                <Navbar/>
                <UserRec/>
                <img src={dashimg} className={styles['background-image']} alt="Dashboard Background" />

                <div className={styles.overlay}></div>

                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

