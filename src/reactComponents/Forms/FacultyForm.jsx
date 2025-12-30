import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://my-manager-backend-96w3.onrender.com";
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:7878";

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
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("department", formData.department);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("qualification", formData.qualification);
    data.append("dateofjoining", formData.dateofjoining);
    data.append("status", formData.status);
    data.append("photo", formData.photo);

    try {
      await axios.post("/ece/facultyInfo", data);
      closeForm();
    } catch (error) {
      console.error({
        message: "upload failed",
        error: error.response?.data || error.message,
      });
    }
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
