import { useState } from "react";
import STYLES from "../styles/tailwindStyles";

function GeneralInput({ generalInput, setGeneralInput }) {
  const [firstName, setFirstName] = useState(generalInput.firstName);
  const [lastName, setLastName] = useState(generalInput.lastName);
  const [mail, setMail] = useState(generalInput.mail);
  const [phone, setPhone] = useState(generalInput.phone);
  async function handleSave(event) {
    event.preventDefault();
    const newInput = { firstName, lastName, mail, phone };
    setGeneralInput(newInput);
  }
  return (
    <div className={STYLES.inputContainer}>
      <form className="general">
        <div className={STYLES.inputGroup}>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder=""
            value={firstName}
            onChange={(el) => {
              setFirstName(el.currentTarget.value);
            }}
            className={STYLES.inputItem}
          />
          <label htmlFor="first-name" className={STYLES.inputLabel}>
            First Name
          </label>
        </div>
        <div className={STYLES.inputGroup}>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder=""
            value={lastName}
            onChange={(el) => setLastName(el.currentTarget.value)}
            className={STYLES.inputItem}
          />
          <label htmlFor="last-name" className={STYLES.inputLabel}>
            Last Name
          </label>
        </div>
        <div className={STYLES.inputGroup}>
          <input
            type="text"
            name="mail"
            id="mail"
            value={mail}
            onChange={(el) => {
              setMail(el.currentTarget.value);
            }}
            className={STYLES.inputItem}
            placeholder=""
          />
          <label htmlFor="mail" className={STYLES.inputLabel}>
            Mail
          </label>
        </div>
        <div className={STYLES.inputGroup}>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={(el) => setPhone(el.currentTarget.value)}
            className={STYLES.inputItem}
            placeholder=""
          />
          <label htmlFor="phone" className={STYLES.inputLabel}>
            Phone Number
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSave}
          className={STYLES.primaryButton}
        >
          Save Section
        </button>
      </form>
    </div>
  );
}

export default GeneralInput;
