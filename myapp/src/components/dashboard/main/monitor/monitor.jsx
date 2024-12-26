import React, { useState, useEffect } from 'react';
import styles from '../main.module.css';
import camera from '../../../../assets/cam.png';

const Monitor = () => {

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/users');
                const data = await response.json();
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className={styles['main-container']}>
            <div className={styles['container-fluid']}>
                <h3 style={{marginLeft: '30%'}}> Camera is about to open.</h3>

                <img style={{marginLeft: '40%', marginTop: '10%'}} src={camera}/>

                <h6 style={{marginLeft: '40%' ,marginTop: '10%'}}>Please stay calm.</h6>

            </div>
        </div>
    );
};

export default Monitor;
