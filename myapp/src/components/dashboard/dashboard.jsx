import React from 'react';
import Sidebar from '../../components/common/sidebar/sidebar.jsx';
import dashimg from '../../assets/dashimg.png';
import styles from './dashboard.module.css';
import Main from '../dashboard/main/main.jsx';
import Navbar from '../../components/common/navbar/navbar.jsx';

const Dashboard = () => {
    return (
        <div className={styles['container-full']}>

                             <Navbar/>
                            <Main/> 
            <img src={dashimg} className={styles['background-image']} alt="Dashboard Background" />

            <div className={styles.overlay}></div>

            <div className={styles.sidebar}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Dashboard;
