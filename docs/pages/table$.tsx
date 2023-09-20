import React, { useState } from "react";
import { Table } from "../../src";
import { initAppTranslation } from "translation-system";

const data2 = [
  {},
  {
    groupId: "636c1851d2ec2865818e3209",
    groupName: "Grupo de Operador 1",
    agents: [
      {
        _id: "635afb9bfcb757708201c0ed",
        firstName: "cicero",
        lastName: "Dev",
        baseUserId: "cicero",
        email: "cicero@comunikime.local",
      },
      {
        _id: "647e01d0e9db28bca091e293",
        firstName: "Abner",
        lastName: "Fernando Gomes Laso Rodrigues",
        baseUserId: "abnerrodrigues",
        email: "abnerrodrigues@brascobra.com.br",
      },
    ],
    agentsLength: 2,
    totalOperationLoggedTime: 0,
    totalOperationBreakWorkedTime: 0,
    totalOperationScaledTime: 0,
    totalOperationBreakScaledTime: 0,
    breakAdherence: 100,
    adherence: 100,
  },
];

const data = [
  {
    hour: 10,
    service_id: 46,
    attempts: 32,
    answereds: 6,
    average_service_time: 19167,
    contact_right_person: 0,
    loggeds_agents: 2,
  },
  {
    hour: 11,
    service_id: 46,
    attempts: 609,
    answereds: 146,
    average_service_time: 21226,
    contact_right_person: 0,
    loggeds_agents: 5,
  },
  {
    hour: 12,
    service_id: 46,
    attempts: 357,
    answereds: 96,
    average_service_time: -865490,
    contact_right_person: 0,
    loggeds_agents: 7,
  },
  {
    hour: 13,
    service_id: 46,
    attempts: 307,
    answereds: 62,
    average_service_time: 34839,
    contact_right_person: 0,
    loggeds_agents: 9,
  },
  {
    hour: 14,
    service_id: 46,
    attempts: 360,
    answereds: 71,
    average_service_time: 36183,
    contact_right_person: 0,
    loggeds_agents: 12,
  },
  {
    hour: 15,
    service_id: 46,
    attempts: 312,
    answereds: 46,
    average_service_time: 42717,
    contact_right_person: 0,
    loggeds_agents: 20,
  },
  {
    hour: 16,
    service_id: 46,
    attempts: 115,
    answereds: 25,
    average_service_time: 46840,
    contact_right_person: 0,
    loggeds_agents: 25,
  },
  {
    hour: 17,
    service_id: 46,
    attempts: 2,
    answereds: 20,
    average_service_time: 0,
    contact_right_person: 20,
    loggeds_agents: 32,
  },
];

const TablePageDemo = () => {
  initAppTranslation({ language: "pt-BR" });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setIsLoading((s) => !s)}
      >
        Carregar
      </button>
      <Table
        hideColumn={["groupId", "agents"]}
        data={data2}
        headers={[
          "groupName",
          "agents",
          "totalOperationLoggedTime",
          "totalOperationBreakWorkedTime",
          "totalOperationScaledTime",
          "totalOperationBreakScaledTime",
          "breakAdherence",
          "adherence",
        ]}
        translation="adherence"
        dataConfig={{
          breakAdherence: (item) => `${item}%`,
          adherence: (item) => `${item}%`,
        }}
        loading={isLoading}
      />
    </>
  );
};

export default TablePageDemo;
