import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../dashboard.module.css";

const DashboardCard = () => {
    const role = localStorage.getItem("userRole") || "user";
    const buttonMessage = role === "admin" ? "Add User" : "Send Request";

    const [userInfo, setUserInfo] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [pendingRequests, setPendingRequests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Fetch stored requests from localStorage on component mount
    useEffect(() => {
        const storedRequests = JSON.parse(localStorage.getItem("userRequests")) || [];
        setPendingRequests(storedRequests);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            // Save user request to localStorage
            const userRequests = JSON.parse(localStorage.getItem("userRequests")) || [];
            const updatedRequests = [...userRequests, userInfo];
            localStorage.setItem("userRequests", JSON.stringify(updatedRequests));
            setPendingRequests(updatedRequests);

            console.log("User request saved locally!");
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error saving user request:", error);
        }
    };

    const handleAddUser = async (request, index) => {
        try {

            const response = await axios.post("http://localhost:8080/api/signup", request);
            if (response.status === 200) {
                console.log("User added successfully!");

                const updatedRequests = [...pendingRequests];
                updatedRequests.splice(index, 1);
                localStorage.setItem("userRequests", JSON.stringify(updatedRequests));
                setPendingRequests(updatedRequests);

                localStorage.setItem("userRequests", JSON.stringify(updatedRequests));

                alert("New user added successfully!");
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const handleCardClick = (request) => {
        setSelectedUser(request); // Set the selected user to display in the modal
        setIsModalOpen(true); // Open modal
    };

    return (
        <>
            {/* Card that opens the modal (visible to both admin and user) */}
            {role === "admin" ? (
                <>
                    <div
                        className={`${styles.datacard} ${pendingRequests.length > 0 ? styles.greenHighlight : ""}`}
                        onClick={() => setIsModalOpen(true)}
                        style={{ cursor: "pointer" }}
                    >
                        <p className={styles.InfoCard}>You can add user</p>
                        <h6 className={styles.InfoCardPrice}>Add New User</h6>
                    </div>

                    {/* Admin Side Pending Requests */}
                    {pendingRequests.length > 0 && (
                        <div>
                            <h3>Pending User Requests</h3>
                            {pendingRequests.map((request, index) => (
                                <div
                                    key={index}
                                    className={`${styles.datacard} ${styles.greenHighlight}`}
                                    onClick={() => handleCardClick(request)} // Open the modal with user details
                                >
                                    <p>Email: {request.email}</p>
                                    <p>Username: {request.username}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div
                    className={styles.datacard}
                    onClick={() => setIsModalOpen(true)} // Open modal for user submission
                    style={{ cursor: "pointer" }}
                >
                    <p className={styles.InfoCard}>You can add user</p>
                    <h6 className={styles.InfoCardPrice}>Add New User</h6>
                </div>
            )}

            {/* Modal Popup */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span
                            className={styles.closeBtn}
                            onClick={() => setIsModalOpen(false)} // Close modal
                        >
                            &times;
                        </span>
                        <h3>{role === "admin" ? "Review User" : "Add User"}</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.inputField}
                            value={selectedUser ? selectedUser.email : userInfo.email}
                            onChange={handleInputChange}
                            disabled={role === "admin"}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className={styles.inputField}
                            value={selectedUser ? selectedUser.username : userInfo.username}
                            onChange={handleInputChange}
                            disabled={role === "admin"}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={styles.inputField}
                            value={selectedUser ? selectedUser.password : userInfo.password}
                            onChange={handleInputChange}
                            disabled={role === "admin"}
                            required
                        />
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            onClick={(e) => {
                                if (role === "admin") {
                                    handleAddUser(selectedUser, pendingRequests.findIndex(req => req === selectedUser)); // Admin adds user
                                } else {
                                    handleSubmit(e); // User submits request
                                }
                            }}
                        >
                            {buttonMessage}
                        </button>
                    </div>
                </div>
            )}

            {/* Placeholder Cards */}
            <div className={styles.datacard1}>
                <p className={styles.InfoCard}>TODAY'S SENIOR</p>
                <h6 className={styles.InfoCardPrice}>3505 PERSON</h6>
            </div>
            <div className={styles.datacard2}>
                <p className={styles.InfoCard}>TODAY'S SENIOR</p>
                <h6 className={styles.InfoCardPrice}>3505 PERSON</h6>
            </div>
        </>
    );
};

export default DashboardCard;
