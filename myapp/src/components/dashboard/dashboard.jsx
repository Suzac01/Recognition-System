import React, { useState } from 'react';
import Sidebar from "../../components/common/sidebar/sidebar.jsx";
import dashimg from "../../assets/dashimg.png";
import styles from "./dashboard.module.css";
import DashboardCard from "./main/DashboardCard/DashboardCard";
import Charts from "./main/DashboardCard/charts/Charts";
import UserOverview from "./main/DashboardCard/useroverview/Useroverview";
import ViewData from "./main/DashboardCard/charts/viewdata/viewdata";
import Navbar from "../navbar/navbar";
import Main from "./main/main";
import Monitor from "./main/monitor/monitor";

const Dashboard = () => {
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole')); // Get role from localStorage
    const [view, setView] = useState('dashboard'); // Tracks the current view (dashboard, users, or monitor)

    const showUserPage = () => setView('users');
    const showDashboardPage = () => setView('dashboard');
    const showMonitorPage = () => setView('monitor');

    return (
        <div className={styles["container-full"]}>
            <img src={dashimg} className={styles["background-image"]} alt="Dashboard Background" />
            <Navbar />
            <div className={styles.sidebar}>
                <Sidebar
                    onUsersClick={showUserPage}
                    onDashboardClick={showDashboardPage}
                    onMonitorClick={showMonitorPage}
                />
            </div>

            <div className={styles["main-content"]}>
                {view === 'dashboard' && (
                    <>
                        <div className="d-flex">
                            <DashboardCard />
                        </div>
                        {userRole === "admin" ? (
                            <>
                                <UserOverview />
                                <ViewData />
                                <Charts />
                            </>
                        ) : (
                            <p style={{ marginLeft: '40%' }}>LOGIN AS ADMIN TO GET FULL ACCESS</p>
                        )}
                    </>
                )}

                {view === 'users' && <Main userRole={userRole} />} {/* Users view */}
                {view === 'monitor' && <Monitor />} {/* Monitor view */}
            </div>
        </div>
    );
};

export default Dashboard;
