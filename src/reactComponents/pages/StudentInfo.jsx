import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentInfo = () => {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    const allStudentsData = async () => {
      try {
        const response = await axios.get(
          "https://my-manager-backend-96w3.onrender.com/ece/allStudentsInfo",
          {
            withCredentials: true,
          }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];
        setStudentData(data);
      } catch (error) {
        console.log({
          message: "error to fetch all students data",
          error: error.message,
        });
      }
    };
    allStudentsData();
  }, []);
  return (
    <div className="studentInfo">
      {studentData.length === 0 ? (
        <div className="notFound">no student data found</div>
      ) : (
        <div className="infoCards">
          {studentData.map((student) => (
            <div key={student._id} className="infoCard">
              <h2>{student.name}</h2>
              <span>{student.registerNumber}</span>
              <span>
                {student.department}-{student.section}
              </span>

              <span>{student.email}</span>
              <span>{student.phone}</span>
              <span>{student.academicYear}</span>
              <span className="addmissionType">{student.admissionType}</span>
              <span className="activeTag">{student.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentInfo;
