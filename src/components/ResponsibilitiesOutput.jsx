function ResponsibilitiesOutput(props) {
  return (
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
  );
}

export default ResponsibilitiesOutput;
