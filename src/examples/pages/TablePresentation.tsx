import Table from "../../components/organism/table";

const data = [
  {
    client: "Hello",
    system: "World"
  }
];

const TablePresentation = () => {
  return (
      <Table data={data} />
      )
}

export default TablePresentation;
