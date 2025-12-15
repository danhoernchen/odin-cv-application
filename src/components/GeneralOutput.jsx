import STYLES from "../styles/tailwindStyles";

function GeneralOutput({ generalInput }) {
  return (
    <section className={STYLES.outputContainer}>
      <h2>General Info</h2>
      <p>
        {generalInput.firstName} {generalInput.lastName}
      </p>
      <p>Mail Address: {generalInput.mail}</p>
      <p>Phone Number: {generalInput.phone}</p>
    </section>
  );
}

export default GeneralOutput;
