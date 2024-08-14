import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; 
const AdminDashboard = () => {
  
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  useEffect(() => {
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
      { id: 4, name: 'Michael Brown', email: 'michael@example.com', role: 'user' },
      { id: 5, name: 'Emily Davis', email: 'emily@example.com', role: 'user' },
      { id: 6, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'user' },
      { id: 7, name: 'David Lee', email: 'david@example.com', role: 'user' },
      { id: 8, name: 'Laura White', email: 'laura@example.com', role: 'user' },
    ]);
  }, []);

  const handleEdit = (user) => {
    setEditUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSave = () => {
    setUsers(users.map(user =>
      user.id === editUser.id
        ? { ...user, name: editedName, email: editedEmail }
        : user
    ));
    setEditUser(null);
  };

  const handleCancel = () => {
    setEditUser(null);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {editUser && (
        <div className="edit-modal">
          <h3>Edit User</h3>
          <label htmlFor="editName">Name:</label>
          <input
            type="text"
            id="editName"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <label htmlFor="editEmail">Email:</label>
          <input
            type="email"
            id="editEmail"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;