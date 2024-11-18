import React, { useState } from 'react';
import styles from './main.module.css';

const Main = () => {
  // Ensure `users` initializes with role data
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Programmer' },
    { id: 2, name: 'Bob', role: 'Developer' }
  ]);

  const handleEdit = (id) => {
    console.log(`Edit user ${id}`);
  };

  const handleUpdate = (id) => {
    console.log(`Update user ${id}`);
  };

  const handleDelete = (id) => {
    // Remove user by id
    setUsers(users.filter(user => user.id !== id));
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
                <th>Role</th> {/* New column for role */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td> {/* Display the role */}
                    <td>
                      <button onClick={() => handleEdit(user.id)} className={styles.editButton}>Edit</button>
                      <button onClick={() => handleUpdate(user.id)} className={styles.updateButton}>Update</button>
                      <button onClick={() => handleDelete(user.id)} className={styles.deleteButton}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}>No users available</td>
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
