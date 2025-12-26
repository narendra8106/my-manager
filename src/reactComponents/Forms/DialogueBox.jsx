import React, { useRef, useEffect } from "react";

const DialogueBox = ({ closeDialogue, openForm }) => {
  const boxRef = useRef();

  useEffect(() => {
    const outsideBox = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        closeDialogue();
      }
    };
    document.addEventListener("mousedown", outsideBox);
    return () => document.removeEventListener("mousedown", outsideBox);
  }, []);

  return (
    <div>
      <div className="dialogueBox" ref={boxRef}>
        <button className="register" onClick={() => openForm("register")}>
          Register
        </button>
        <button onClick={() => openForm("login")}>Log in</button>
        <button onClick={() => openForm("facultyForm")}>Add Faculty</button>
        <button onClick={() => openForm("studentForm")}>Add Student</button>
        <button className="help" onClick={() => openForm("help")}>
          Help
        </button>
      </div>
    </div>
  );
};

export default DialogueBox;
