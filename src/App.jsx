import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./reactComponents/Header";
import DialogueBox from "./reactComponents/Forms/DialogueBox";
import LoginForm from "./reactComponents/Forms/LoginForm";
import RegisterForm from "./reactComponents/Forms/RegisterForm";
import ContactForm from "./reactComponents/Forms/ContactForm";
import GradientBg from "./reactComponents/GradientBg";
import Footer from "./reactComponents/Footer";
import HomePage from "../src/reactComponents/pages/HomePage";
import FacultyInfo from "../src/reactComponents/pages/FacultyInfo";
import StudentsInfo from "../src/reactComponents/pages/StudentInfo";
import Anouncements from "../src/reactComponents/pages/Anouncements";
import More from "../src/reactComponents/pages/More";
import FacultyForm from "./reactComponents/Forms/FacultyForm";
import StudentForm from "./reactComponents/Forms/StudentForm";
import Academics from "./reactComponents/pages/Academics";
import Curriculum from "./reactComponents/pages/academicfiles/Curriculum";
import Attendence from "./reactComponents/pages/academicfiles/Attendence";
import Marks from "./reactComponents/pages/academicfiles/Marks";
import Timetable from "./reactComponents/pages/academicfiles/Timetable";

function App() {
  //for dialogue box
  const [openDialogueBox, setOpenDialogueBox] = useState(false);
  const openDialogue = () => setOpenDialogueBox(true);
  const closeDialogue = () => setOpenDialogueBox(false);
  //for forms
  const [activeForm, setActiveForm] = useState(null);
  const openForm = (formName) => {
    setOpenDialogueBox(false);
    setActiveForm(formName);
  };
  const closeForm = () => setActiveForm(null);

  return (
    <>
      <GradientBg />
      <div className="websiteContent">
        <div className="headerSection">
          <Header openDialogue={openDialogue} />
        </div>
        <div className="formSection">
          {openDialogueBox && (
            <DialogueBox closeDialogue={closeDialogue} openForm={openForm} />
          )}
          {activeForm === "login" && (
            <LoginForm closeForm={closeForm} openForm={openForm} />
          )}
          {activeForm === "register" && (
            <RegisterForm closeForm={closeForm} openForm={openForm} />
          )}
          {activeForm === "help" && <ContactForm closeForm={closeForm} />}
          {activeForm === "facultyForm" && (
            <FacultyForm closeForm={closeForm} />
          )}
          {activeForm === "studentForm" && (
            <StudentForm closeForm={closeForm} />
          )}
        </div>
      </div>
      <div className=" websiteContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/facultyinfo" element={<FacultyInfo />} />
          <Route path="/studentinfo" element={<StudentsInfo />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/anouncements" element={<Anouncements />} />
          <Route path="/more" element={<More />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </div>
      <div className="footerSection">
        <Footer />
      </div>
    </>
  );
}

export default App;
