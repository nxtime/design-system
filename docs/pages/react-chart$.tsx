import React from "react";
import GenericChart from "../../src/components/atom/chart/Generic";
import { initAppTranslation, translate } from "translation-system";

const data = [
  {
    hour: 10,
    service_id: 46,
    attempts: 0,
    answereds: 6,
    average_service_time: 19167,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 11,
    service_id: 46,
    attempts: 0,
    answereds: 146,
    average_service_time: 21226,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 12,
    service_id: 46,
    attempts: 0,
    answereds: 96,
    average_service_time: 25490,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 13,
    service_id: 46,
    attempts: 0,
    answereds: 62,
    average_service_time: 34839,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 14,
    service_id: 46,
    attempts: 0,
    answereds: 71,
    average_service_time: 36183,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 15,
    service_id: 46,
    attempts: 0,
    answereds: 46,
    average_service_time: 42717,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 16,
    service_id: 46,
    attempts: 0,
    answereds: 25,
    average_service_time: 46840,
    contact_right_person: 0,
    loggeds_agents: 0,
  },
  {
    hour: 17,
    service_id: 46,
    attempts: 0,
    answereds: 20,
    average_service_time: 0,
    contact_right_person: 20,
    loggeds_agents: 0,
  },
];

const ReactChartPage = () => {
  initAppTranslation({
    language: "pt-BR",
  });

  console.log(translate("data.charts.adherence"))

  return (
    <GenericChart
      translation="data.services"
      type="bar"
      groupBy="hour"
      hidden={["average_service_time"]}
      data={data}
      labelFormatter={(hour) => hour + "h"}
      dataFormatter={(data) => data + " atendidas"}
    />
  );
};

export default ReactChartPage;
