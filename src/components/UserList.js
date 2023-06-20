import React from "react";

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="userListDiv">
      {users.map((user) => (
        <div key={user.id} className="userList">
          <p id="listName">Name: {user.name}</p>
          <p id="listEmail">Email: {user.email}</p>
          <p id="listPhone">Phone: {user.phone}</p>
          <button id="editBtn" onClick={() => editUser(user)}>
            Edit
          </button>
          <button id="deleteBtn" onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
