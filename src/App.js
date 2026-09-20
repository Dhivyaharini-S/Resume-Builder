import React, { useState } from "react";
import Form from "./components/form";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {

  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
    photo: ""
  });

  return (
    <div className="container">

      <h1>React Resume Builder</h1>

      <div className="main">

        <Form
          data={resumeData}
          setData={setResumeData}
        />

        <ResumePreview
          data={resumeData}
        />

      </div>

    </div>
  );
}

export default App;
