import React, { useEffect, useState } from "react";
import axios from "axios";

const FacultyInfo = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://my-manager-backend-96w3.onrender.com/ece/allFacultyInfo",
          {
            withCredentials: true,
          }
        );

        const data = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];

        setFacultyData(data);
      } catch (error) {
        console.log("error while fetching all faculty data");
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
              <img
                src={`https://my-manager-backend-96w3.onrender.com/${faculty.photo}`}
                alt={faculty.name}
              />
              <h2>{faculty.name}</h2>
              <span>{faculty.designation}</span>
              <span>{faculty.department}</span>
              <span>{faculty.email}</span>
              <span>{faculty.phone}</span>
              <span>{faculty.qualification}</span>
              <span>{faculty.dateofjoining}</span>
              <span className="activeTag">{faculty.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacultyInfo;
