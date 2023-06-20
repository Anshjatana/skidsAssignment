import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const updateUser = (userId, updatedUser) => {
    setUsers(users.map((user) => (user.id === userId ? updatedUser : user)));
    setEditingUser(null);
  };

  const editUser = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1>User Management Application</h1>
      <AddUserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      {isModalOpen && (
        <div>
          <div className="modal-overlay" onClick={closeModal} />
          <div className="modal">
            <EditUserForm
              user={editingUser}
              updateUser={updateUser}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
