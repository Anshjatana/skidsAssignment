import React, { useState } from "react";

const EditUserForm = ({ user, updateUser, closeModal }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before updating the user
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Update the user
    updateUser(user.id, { name, email, phone });
    closeModal();
  };

  return (
    <div className="editFormDiv">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="editlistName"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="editlistEmail"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="editlistPhone"
        />
        <button type="submit" id="updateList">
          Update
        </button>
        <button onClick={closeModal} id="cancelEdit">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
