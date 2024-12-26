import React, { useState, useEffect } from 'react';
import styles from './main.module.css';

const Main = ({ userRole }) => {
  const [users, setUsers] = useState([]);
  const [editingEmail, setEditingEmail] = useState(null);
  const [editableUser, setEditableUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingEmail(user.email);
    setEditableUser({ ...user });
  };

  const handleCancel = () => {
    setEditingEmail(null);
    setEditableUser(null);
  };

  const handleUpdate = async (email) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editableUser),
      });

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers((prevUsers) =>
          prevUsers.map((user) =>
              user.email === email ? { ...user, ...data } : user
          )
      );
      handleCancel();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  const handleDelete = async (email) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${email}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.email !== email)
        );
      } else {
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
      <div className={styles['main-container']}>
        <div className={styles['container-fluid']}>
          <h3>User List</h3>
          <div className={styles.tableContainer}>
            <table className={styles.userTable}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {users.length > 0 ? (
                  users.map((user) => (
                      <tr key={user.email}>
                        {editingEmail === user.email && editableUser ? (
                            <>
                              <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={editableUser.name}
                                    onChange={handleInputChange}
                                />
                              </td>
                              <td>
                                <input
                                    type="text"
                                    name="role"
                                    value={editableUser.role}
                                    onChange={handleInputChange}
                                />
                              </td>
                              <td>
                                <button
                                    onClick={() => handleUpdate(user.email)}
                                    className={styles.updateButton}
                                >
                                  Update
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className={styles.cancelButton}
                                >
                                  Cancel
                                </button>
                              </td>
                            </>
                        ) : (
                            <>
                              <td>{user.name}</td>
                              <td>{user.role}</td>
                              <td>
                                {userRole === 'admin' && (
                                    <>
                                      <button
                                          onClick={() => handleEdit(user)}
                                          className={styles.editButton}
                                      >
                                        Edit
                                      </button>
                                      <button
                                          onClick={() => handleDelete(user.email)}
                                          className={styles.deleteButton}
                                      >
                                        Delete
                                      </button>
                                    </>
                                )}
                              </td>
                            </>
                        )}
                      </tr>
                  ))
              ) : (
                  <tr>
                    <td colSpan="3">No users found</td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Main;
