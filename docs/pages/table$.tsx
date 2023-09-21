import React, { useState } from "react";
import { Table } from "../../src";
import { normalizeNumber } from "../../src/utils/helpers/transform.ts";
import { initAppTranslation } from "translation-system";

const data2 = [
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
];

const data = [
  {
    hour: 12,
    service_id: 8,
    attempts: 561,
    answereds: 116,
    average_service_time: 12905,
    contact_right_person: 0,
    loggeds_agents: 1,
    occupancyRate: 0,
    productivityRate: 0,
    availabilityFee: 0,
    averageTimeLoggedIn: 0,
    averageTimeSpoken: 0,
    averageIdleTime: 0,
    averageOperatingTime: 0,
    hitRate: 0,
  },
  {
    hour: 13,
    service_id: 8,
    attempts: 1647,
    answereds: 438,
    average_service_time: 53651,
    contact_right_person: 0,
    loggeds_agents: 3,
    occupancyRate: 0,
    productivityRate: 0,
    availabilityFee: 0,
    averageTimeLoggedIn: 0,
    averageTimeSpoken: 0,
    averageIdleTime: 0,
    averageOperatingTime: 0,
    hitRate: 0,
  },
  {
    hour: 14,
    service_id: 8,
    attempts: 523,
    answereds: 146,
    average_service_time: 143419,
    contact_right_person: 0,
    loggeds_agents: 3,
    occupancyRate: 0,
    productivityRate: 0,
    availabilityFee: 0,
    averageTimeLoggedIn: 0,
    averageTimeSpoken: 0,
    averageIdleTime: 0,
    averageOperatingTime: 0,
    hitRate: 0,
  },
  {
    hour: 15,
    service_id: 8,
    attempts: 342,
    answereds: 76,
    average_service_time: 42531,
    contact_right_person: 0,
    loggeds_agents: 2,
    occupancyRate: 0,
    productivityRate: 0,
    availabilityFee: 0,
    averageTimeLoggedIn: 0,
    averageTimeSpoken: 0,
    averageIdleTime: 0,
    averageOperatingTime: 0,
    hitRate: 0,
  },
  {
    hour: 16,
    service_id: 8,
    attempts: 364,
    answereds: 96,
    average_service_time: 15188,
    contact_right_person: 0,
    loggeds_agents: 1,
    occupancyRate: 0,
    productivityRate: 0,
    availabilityFee: 0,
    averageTimeLoggedIn: 0,
    averageTimeSpoken: 0,
    averageIdleTime: 0,
    averageOperatingTime: 0,
    hitRate: 0,
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
        data={data}
        hideColumn={["service_id"]}
        translation="services"
        dataConfig={{
          average_service_time: normalizeNumber,
        }}
        loading={isLoading}
      />
    </>
  );
};

export default TablePageDemo;
