import ResponsibilitiesOutput from "./ResponsibilitiesOutput";

function ExperienceOutputItem(props) {
  return (
    <>
      <tr className="bg-neutral-primary border-b border-default">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-heading whitespace-nowrap"
        >
          {props.company}
        </th>
        <td className="px-6 py-4">{props.position}</td>
        <td className="px-6 py-4">{props.startDate}</td>
        <td className="px-6 py-4">{props.endDate}</td>
      </tr>
      <tr className="bg-neutral-primary border-b border-default">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-heading whitespace-nowrap"
        >
          Responsibilities
        </th>
        <td colSpan={3} className="px-6 py-4">
          {props.responsibilities}
        </td>
      </tr>
    </>
  );
}

export default ExperienceOutputItem;
