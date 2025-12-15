import { useState } from "react";
import GeneralInput from "./components/GeneralInput.jsx";
import EducationInput from "./components/EducationInput.jsx";
import ExperienceInput from "./components/ExperienceInput.jsx";
import GeneralOutput from "./components/GeneralOutput.jsx";
import EducationOutput from "./components/EducationOutput.jsx";
import ExperienceOutput from "./components/ExperienceOutput.jsx";
import "./styles/styles.css";

function App() {
  const [generalInput, setGeneralInput] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
  });
  const [educationInput, setEducationInput] = useState([
    { school: "", area: "", startDate: "", endDate: "" },
  ]);
  const [experienceInput, setExperienceInput] = useState([
    {
      company: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);
  return (
    <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center max-w-[1200px] mx-auto">
      <section className="grid gap-6 p-6 border w-full max-w-lg justify-items-end">
        <GeneralInput
          generalInput={generalInput}
          setGeneralInput={setGeneralInput}
        ></GeneralInput>
        <EducationInput
          educationInput={educationInput}
          setEducationInput={setEducationInput}
        ></EducationInput>
        <ExperienceInput
          experienceInput={experienceInput}
          setExperienceInput={setExperienceInput}
        ></ExperienceInput>
      </section>
      <section className="grid h-fit gap-6 p-6 border w-full max-w-lg ">
        <GeneralOutput generalInput={generalInput}></GeneralOutput>
        <EducationOutput educationInput={educationInput}></EducationOutput>
        <ExperienceOutput experienceInput={experienceInput}></ExperienceOutput>
      </section>
    </main>
  );
}

export default App;
