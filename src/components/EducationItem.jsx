import { useState } from "react";
import STYLES from "../styles/tailwindStyles";
import EducationInput from "./EducationInput";

function EducationItem(props) {
  const [area, setArea] = useState(props.area);
  const [school, setSchool] = useState(props.school);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const groupClasses = "relative z-0 w-full mb-5 group";

  function handleSave(event) {
    event.preventDefault();
    const newEntry = { school, area, startDate, endDate };
    const newInput = [...props.educationInput];
    newInput[props.index] = newEntry;
    console.log(newInput);
    props.setEducationInput(newInput);
  }

  return (
    <div className="education-item max-w-md mx-auto border-gray-300 border my-3 p-3">
      <h3>Entry {props.header + 1}</h3>
      <div className={STYLES.inputGroup}>
        <input
          type="text"
          name="school"
          id="school"
          value={school}
          onChange={(el) => setSchool(el.currentTarget.value)}
          placeholder=""
          className={STYLES.inputItem}
        />
        <label htmlFor="school" className={STYLES.inputLabel}>
          School
        </label>
      </div>
      <div className={groupClasses}>
        <input
          type="text"
          name="area-of-study"
          id="area-of-study"
          value={area}
          onChange={(el) => {
            setArea(el.currentTarget.value);
          }}
          placeholder=""
          className={STYLES.inputItem}
        />
        <label htmlFor="area-of-study" className={STYLES.inputLabel}>
          Area of study
        </label>
      </div>

      <div className="dates grid md:grid-cols-2 md:gap-6">
        <div className={groupClasses}>
          <input
            type="date"
            name="start-date"
            id="start-date"
            className={STYLES.inputItem}
            value={startDate}
            onChange={(el) => setStartDate(el.currentTarget.value)}
          />
          <label htmlFor="start-date" className={STYLES.inputLabel}>
            Start Date
          </label>
        </div>
        <div className={groupClasses}>
          <input
            type="date"
            name="end-date"
            id="start-date"
            className={STYLES.inputItem}
            value={endDate}
            onChange={(el) => setEndDate(el.currentTarget.value)}
          />
          <label htmlFor="end-date" className={STYLES.inputLabel}>
            End Date
          </label>
        </div>
        <button className={STYLES.secondaryButton} onClick={handleSave}>
          Save Entry
        </button>
      </div>
    </div>
  );
}

export default EducationItem;
