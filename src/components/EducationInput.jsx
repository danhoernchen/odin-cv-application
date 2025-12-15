import EducationItem from "./EducationItem";
import STYLES from "../styles/tailwindStyles";

function EducationInput({ educationInput, setEducationInput }) {
  function handleSubmit(event) {
    event.preventDefault();
    setEducationInput(educationInput);
  }
  function addEntry(event) {
    event.preventDefault();
    const newInput = [
      ...educationInput,
      { school: "", area: "", startDate: "", endDate: "" },
    ];
    setEducationInput(newInput);
  }

  return (
    <div className={STYLES.inputContainer}>
      <form className="education">
        {educationInput.map((entry) => {
          return (
            <EducationItem
              header={educationInput.indexOf(entry)}
              area={entry.area}
              school={entry.school}
              startDate={entry.startDate}
              endDate={entry.endDate}
              key={educationInput.indexOf(entry)}
              index={educationInput.indexOf(entry)}
              setEducationInput={setEducationInput}
              educationInput={educationInput}
            ></EducationItem>
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

export default EducationInput;
