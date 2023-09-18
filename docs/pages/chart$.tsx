import React from "react";
import { Chart } from "../../src";
import { initAppTranslation } from "translation-system";


const ChartsPage = () => {
  initAppTranslation({ language: "pt-BR" });

  return (
    <div className="container row">
      <Chart.default
        type="bar"
        data={[
          {
            adherence: 20,
            groupName: "Grupo 1",
            workGroupId: "123",
          },
        ]}
        hide={["workGroupId"]}
        translation="charts"
        width={800}
        height={600}
      >
        {({ currentSize, ...props }) => {
          console.log(currentSize, props);
          return <Chart.Bar {...currentSize} {...props} maxItemValue={100} groupBy="groupName" />;
        }}
      </Chart.default>
    </div>
  );
};

export default ChartsPage;
