import React, { useState, useRef, useEffect } from "react";

const StudentForm = ({ closeForm }) => {
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
    registerNumber: "",
    department: "",
    section: "",
    email: "",
    phone: "",
    academicYear: "",
    admissionType: "",
    status: "Active",
    photo: null,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://my-manager-backend-96w3.onrender.com/ece/studentInfo",
      contactData,
      { withCredentials: true }
    );
  };

  return (
    <div className="form">
      <div className="inForm" ref={formRef}>
        <div className="name">
          <h2>Student Info</h2>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              placeholder="Student Name"
              onChange={handleChange}
              required
            />
            <input
              name="registerNumber"
              value={formData.registerNumber}
              placeholder="Register Number"
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
              name="section"
              value={formData.section}
              placeholder="Section"
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
              name="academicYear"
              value={formData.academicYear}
              placeholder="Academic Year (2023-2027)"
              onChange={handleChange}
              required
            />
            <div className="formSelect">
              <select name="admissionType" onChange={handleChange}>
                <option value="Convener">Convener</option>
                <option value="Management">Management</option>
                <option value="Lateral Entry">Lateral Entry</option>
              </select>
              <i className="fa-solid fa-angle-down dcarot1"></i>
            </div>

            <div className="formSelect">
              <select name="status" onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Passed Out">Passed Out</option>
                <option value="Discontinued">Discontinued</option>
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

export default StudentForm;
