import STYLES from "../styles/tailwindStyles.js";
import ExperienceItem from "./ExperienceItem.jsx";

function ExperienceInput({ experienceInput, setExperienceInput }) {
  function handleSubmit(event) {
    event.preventDefault();
    setExperienceInput(experienceInput);
  }
  function addEntry(event) {
    event.preventDefault();
    const newInput = [
      ...experienceInput,
      {
        company: "",
        area: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ];
    setExperienceInput(newInput);
  }
  return (
    <div className={STYLES.inputContainer}>
      <form className="epxerience">
        {experienceInput.map((entry) => {
          return (
            <ExperienceItem
              company={entry.company}
              position={entry.company}
              responsibilities={entry.responsibilities}
              startDate={entry.startDate}
              endDate={entry.endDate}
              key={experienceInput.indexOf(entry)}
              index={experienceInput.indexOf(entry)}
              experienceInput={experienceInput}
              setExperienceInput={setExperienceInput}
            ></ExperienceItem>
          );
        })}
        <div className="max-w-md mx-auto date-buttons grid md:grid-cols-2 md:gap-2">
          <button
            type="button"
            onClick={addEntry}
            className={STYLES.secondaryButton}
          >
            Add Entry
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className={STYLES.primaryButton}
          >
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceInput;
