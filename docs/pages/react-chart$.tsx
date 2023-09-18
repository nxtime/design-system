import React from "react";
import GenericChart from "../../src/components/atom/chart/Generic";

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
    average_service_time: 25490,
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

const ReactChartPage = () => {
  return (
    <GenericChart
      translation="data.services"
      type="bar"
      groupBy="hour"
      hidden={["average_service_time"]}
      data={data}
      labelFormatter={(hour) => hour + "h"}
    />
  );
};

export default ReactChartPage;
