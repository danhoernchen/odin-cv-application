import STYLES from "../styles/tailwindStyles";
import EducationOutputItem from "./EducationOutputItem";

function EducationOutput({ educationInput }) {
  return (
    <section className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className={STYLES.table}>
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              School
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Area
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
          {educationInput.map((entry) => (
            <EducationOutputItem
              school={entry.school}
              area={entry.area}
              startDate={entry.startDate}
              endDate={entry.endDate}
              key={educationInput.indexOf(entry)}
              className={STYLES.listItem}
            ></EducationOutputItem>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default EducationOutput;
