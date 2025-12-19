import React, { useState, useEffect } from "react";
import Header from "./reactComponents/Header";
import DialogueBox from "./reactComponents/Forms/DialogueBox";
import LoginForm from "./reactComponents/Forms/LoginForm";
import RegisterForm from "./reactComponents/Forms/RegisterForm";
import ContactForm from "./reactComponents/Forms/ContactForm";
import GradientBg from "./reactComponents/GradientBg";
import Footer from "./reactComponents/Footer";

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
        </div>
        {/* <div className="footerSection">
          <Footer />
        </div> */}
      </div>
    </>
  );
}

export default App;
