import React from 'react';
import Sidebar from '../../components/common/sidebar/sidebar.jsx';
import dashimg from '../../assets/dashimg.png';
import styles from './dashboard.module.css';
import Main from '../dashboard/main/main.jsx';

const Dashboard = () => {
    return (
        <div className={styles['container-full']}>
            {/* Background Image */}

                            <Main/>

            <img src={dashimg} className={styles['background-image']} alt="Dashboard Background" />

            {/* Overlay */}
            <div className={styles.overlay}></div>

            {/* Sidebar positioned in the top-left corner */}
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Dashboard;
