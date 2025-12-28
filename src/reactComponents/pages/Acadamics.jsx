import React from "react";
import { Link } from "react-router-dom";

const Acadamics = () => {
  return (
    <div className="academics">
      <Link to={"/curriculum"}>
        <section className="curriculum">
          <i class="bi bi-book-half"></i>Curriculum
        </section>
      </Link>
      <Link to={"/attendence"}>
        <section className="attendance">
          <i class="bi bi-journal-check"></i>Attendance
        </section>
      </Link>
      <Link to={"/marks"}>
        <section className="marks">
          <i class="bi bi-pen-fill"></i>Marks
        </section>
      </Link>
      <Link to={"/timetable"}>
        <section className="time-table">
          <i class="bi bi-table"></i>Time Table
        </section>
      </Link>
    </div>
  );
};

export default Acadamics;
