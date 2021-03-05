function Table(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.seniority}</td>
    </tr>
  );
}

export default Table;
