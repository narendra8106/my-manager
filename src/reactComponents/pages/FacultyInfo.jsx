// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FacultyInfo = () => {
//   const [facultyData, setFacultyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     const fetchFacultyData = async () => {
//       try {
//         const response = await axios.get(
//           "https://my-manager-backend-96w3.onrender.com/ece/facultyInfo",
//           { withCredentials: true }
//         );
//         setFacultyData(response.data || response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Failed to load faculty data");
//         setLoading(false);
//       }
//     };
//     fetchFacultyData();
//   }, []);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <div className="errormessage">{error}</div>;
//   return (
//     <div>
//       <div className="faculty-container">
//         {facultyData.length === 0 ? (
//           <p>No faculty found</p>
//         ) : (
//           facultyData.map((item) => (
//             <div className="faculty-card" key={item._id}>
//               <img src={item.photo} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>{item.designation}</p>
//               <p>{item.department}</p>
//               <p>{item.qualification}</p>
//               <p>{item.email}</p>
//               <p>Status: {item.status}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default FacultyInfo;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FacultyInfo.css";

const FacultyInfo = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const res = await axios.get(
          "https://my-manager-backend-96w3.onrender.com/ece/facultyInfo",
          { withCredentials: true }
        );

        // support both {data: []} and []
        const data = Array.isArray(res.data) ? res.data : res.data.data || [];

        setFacultyData(data);
      } catch (err) {
        setError("Failed to load faculty data");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  if (loading) return <p className="status-msg">Loading faculty...</p>;
  if (error) return <p className="error-msg">{error}</p>;

  return (
    <div className="faculty-container">
      {facultyData.length === 0 ? (
        <p className="status-msg">No faculty found</p>
      ) : (
        facultyData.map((item) => (
          <div className="faculty-card" key={item._id}>
            <img src={item.photo || "/default-user.png"} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="designation">{item.designation}</p>
            <p>{item.department}</p>
            <p>{item.qualification}</p>
            <p className="email">{item.email}</p>
            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default FacultyInfo;
