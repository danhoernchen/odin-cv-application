function EducationOutputItem(props) {
  return (
    <tr className="bg-neutral-primary border-b border-default">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {props.school}
      </th>
      <td className="px-6 py-4">{props.area}</td>
      <td className="px-6 py-4">{props.startDate}</td>
      <td className="px-6 py-4">{props.endDate}</td>
    </tr>
  );
}

export default EducationOutputItem;
