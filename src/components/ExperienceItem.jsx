import { useState } from "react";
import STYLES from "../styles/tailwindStyles";

function ExperienceItem(props) {
  const [company, setCompany] = useState(props.company);
  const [position, setPosition] = useState(props.position);
  const [responsibilities, setResponsibilities] = useState(
    props.responsibilities
  );
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  function handleSave(event) {
    event.preventDefault();
    const newEntry = {
      company,
      position,
      responsibilities,
      startDate,
      endDate,
    };
    const newInput = [...props.experienceInput];
    newInput[props.index] = newEntry;
    props.setExperienceInput(newInput);
  }

  return (
    <div className="experience-item max-w-md mx-auto border-gray-300 border my-3 p-3">
      <div className={STYLES.inputGroup}>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={(el) => setCompany(el.currentTarget.value)}
          placeholder=""
          className={STYLES.inputItem}
        />
        <label htmlFor="company" className={STYLES.inputLabel}>
          Company
        </label>
      </div>
      <div className={STYLES.inputGroup}>
        <input
          type="text"
          name="position"
          id="position"
          value={position}
          onChange={(el) => setPosition(el.currentTarget.value)}
          placeholder=""
          className={STYLES.inputItem}
        />
        <label htmlFor="position" className={STYLES.inputLabel}>
          Position
        </label>
      </div>
      <div className={STYLES.inputGroup}>
        <label htmlFor="responsibilities" className={STYLES.textAreaLabel}>
          Main Responsibilities
        </label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          placeholder="Shortly describe your main responsibilities in this position"
          value={responsibilities}
          onChange={(el) => setResponsibilities(el.currentTarget.value)}
          className={STYLES.textAreaItem}
          rows={4}
        ></textarea>
      </div>
      <div className={STYLES.inputGroup}>
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          name="start-date"
          id="start-date"
          value={startDate}
          onChange={(el) => setStartDate(el.currentTarget.value)}
          className={STYLES.inputItem}
        />
      </div>
      <div className={STYLES.inputGroup}>
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          name="end-date"
          id="end-date"
          value={endDate}
          onChange={(el) => setEndDate(el.currentTarget.value)}
          className={STYLES.inputItem}
        />
      </div>
      <button className={STYLES.secondaryButton} onClick={handleSave}>
        Save Entry
      </button>
    </div>
  );
}

export default ExperienceItem;
