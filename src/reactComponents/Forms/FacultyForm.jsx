import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const FacultyForm = ({ closeForm }) => {
  const formRef = useRef();

  useEffect(() => {
    const formClose = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        closeForm();
      }
    };

    document.addEventListener("mousedown", formClose);
    return () => document.removeEventListener("mousedown", formClose);
  }, [closeForm]);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
    qualification: "",
    dateofjoining: "",
    status: "Active",
    photo: null,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://my-manager-backend-96w3.onrender.com/ece/facultyInfo",
      formData,
      {
        withCredentials: true,
      }
    );
    closeForm();
  };
  return (
    <div className="form">
      <div className="inForm" ref={formRef}>
        <div className="name">
          <h2>Faculty Info</h2>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              name="designation"
              value={formData.designation}
              placeholder="Designation"
              onChange={handleChange}
              required
            />
            <input
              name="department"
              value={formData.department}
              placeholder="Department"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <input
              name="qualification"
              value={formData.qualification}
              placeholder="Qualification"
              onChange={handleChange}
              required
            />
            <input
              name="dateofjoining"
              value={formData.dateofjoining}
              type="date"
              onChange={handleChange}
              required
            />
            <div className="formSelect">
              <select name="status" onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <i className="fa-solid fa-angle-down dcarot1"></i>
            </div>

            <input
              name="photo"
              value={formData.photo}
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
            />

            <button type="submit" className="button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyForm;
