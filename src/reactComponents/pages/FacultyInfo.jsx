import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://my-manager-backend-3m4i.onrender.com";
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:7878";

const FacultyInfo = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/ece/allFacultyInfo");

        const data = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];

        setFacultyData(data);
      } catch (error) {
        console.log("error while fetching all faculty data", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {facultyData.length === 0 ? (
        <div className="notFound">faculty not found</div>
      ) : (
        <div className="infoCards">
          {facultyData.map((faculty) => (
            <div key={faculty._id} className="infoCard">
              <img src={faculty.photo} alt={faculty.name} />
              <div className="fDetails">
                <h2>{faculty.name}</h2>
                <span>{faculty.designation}</span>
                <span>{faculty.department}</span>
                <span>{faculty.email}</span>
                <span>{faculty.phone}</span>
                <span>{faculty.qualification}</span>
                <span>{faculty.dateofjoining}</span>
                <span className="activeTag">{faculty.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacultyInfo;
