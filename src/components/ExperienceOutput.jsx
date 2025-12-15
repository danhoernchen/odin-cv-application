import STYLES from "../styles/tailwindStyles";
import ExperienceOutputItem from "./ExperienceOutputItem";

function ExperienceOutput({ experienceInput }) {
  console.log(experienceInput[0].responsibilities);
  return (
    <section className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className={STYLES.table}>
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Company
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Position
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              End Date
            </th>
          </tr>
        </thead>
        <tbody>
          {experienceInput.map((entry) => (
            <ExperienceOutputItem
              company={entry.company}
              position={entry.position}
              startDate={entry.startDate}
              endDate={entry.endDate}
              responsibilities={entry.responsibilities}
              key={experienceInput.indexOf(entry)}
              className={STYLES.listItem}
            ></ExperienceOutputItem>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ExperienceOutput;
