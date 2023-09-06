import React, { useState } from "react";
import { Table } from "../../src";
import { initAppTranslation } from "translation-system";

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

type TBreak = {
  _id: string;
  start: string;
  finish: string;
  type: number;
};

type TTimeScale = {
  login: string;
  logout: string;
  breaks: TBreak[];
};

interface IScalegroupReturn {
  _id: string;
  timeScale: TTimeScale;
  workGroups: Array<Record<string, number>>;
}

const scalegroup = [] as IScalegroupReturn[];

const TablePageDemo = () => {
  initAppTranslation({ language: "en" });
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setIsLoading((s) => !s)}
      >
        Carregar
      </button>
      <Table
        data={scalegroup}
        dataConfig={{
          timeScale: (timescale) => {
            return `${timescale.breaks[0].finish}`;
          },
        }}
        loading={isLoading}
      />
    </>
  );
};

export default TablePageDemo;
