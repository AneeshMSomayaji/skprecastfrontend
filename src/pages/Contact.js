import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://skprecastbackend.onrender.com/api/queries", formData);
      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    } catch (error) {
      setResponseMessage("Failed to submit. Try again later.");
    }
  };

  return (
    <div className="page">
      <h1 style={{ color: "#007bff" }}>Contact Us</h1>
      {responseMessage && <p style={{ color: "green" }}>{responseMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
