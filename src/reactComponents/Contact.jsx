import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill out all fields!");
      return;
    }

    const api_url="https://my-manager-backend-a30q.onrender.com"
    const response = await axios.post(`${api_url}/userdata`, {
      username: name,
      email: email,
      mobile_no: phone,
    });

    console.log(response.data);

    alert("data added successfully");

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="contactForm">
      <div className="contact">
        <h2>CONTACT US</h2>

        <form className="form">
          <span>
            <input
              type="text"
              id="name"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <i className="fa-solid fa-user"></i>
          </span>

          <span>
            <input
              type="email"
              id="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa-solid fa-envelope"></i>
          </span>

          <span>
            <input
              type="tel"
              id="tel"
              placeholder="mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className="fa-solid fa-phone"></i>
          </span>

          <button onClick={submit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
