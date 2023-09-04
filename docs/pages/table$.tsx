import React, { useState } from "react";
import { Table } from "../../src";

const tableData = [
  {
    name: "Jose",
    age: 20,
  },
  {
    name: "Marcos",
    age: 17,
  },
  {
    name: "Thiago",
    age: 24,
  },
];

const TablePageDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setIsLoading((s) => !s)}
      >
        Carregar
      </button>
      <Table data={tableData} loading={isLoading} />
    </>
  );
};

export default TablePageDemo;
