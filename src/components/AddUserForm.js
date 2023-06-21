import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here before adding the user
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
    // Adding the user
    addUser({ name, email, phone });
    // Reseting form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} id="addUserForm">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="inputName"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="inputEmail"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="inputPhone"
      />
      <button type="submit" id="addUser">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
