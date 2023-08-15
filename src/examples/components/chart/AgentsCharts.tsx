import moment from "moment";
import Chart, { Time } from "../../../components/atom/chart";

const timedata = [
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
      },
    ],
    breaks: [
      {
        start: moment().subtract(1, "hour"),
        finish: moment(),
      },
      {
        start: moment().subtract(2, "hours"),
        finish: moment().subtract(1.5, "hours"),
      },
    ],
    adherences: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment().subtract(3, "hours"),
      },
    ],
  },
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
      },
    ],
    breaks: [
      {
        start: moment().subtract(1.25, "hour"),
        finish: moment(),
      },
      {
        start: moment().subtract(3, "hours"),
        finish: moment().subtract(2.5, "hours"),
      },
    ],
    adherences: [
      {
        start: moment().subtract(6, "hours"),
        finish: moment().subtract(4, "hours"),
      },
    ],
  },
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
      },
    ],
    adherences: [

      {
        start: moment().subtract(8, "hours"),
        finish: moment().subtract(2, "hours"),
      },
    ],
    breaks: [
      {
        start: moment().subtract(0.75, "hour"),
        finish: moment().subtract(0.25, "hour"),
      },
      {
        start: moment().subtract(3, "hours"),
        finish: moment().subtract(2.5, "hours"),
      },
    ],
  },
];

const translations = {
  breaks: "Pausa",
  adherences: "Aderência",
  period: "Período",
};

const AgentsCharts = () => {
  const translator = (keyName: keyof typeof translations) => {
    if (!Object.prototype.hasOwnProperty.call(translations, keyName))
      return keyName;
    return translations[keyName];
  };

  return (
    <div className="container w-screen h-screen center bg-primary">
      <div className="container container-lg rounded-box bg-neutral row shadow-md">
        <Chart type="line bar time" data={[]} width={600} height={150}>
          {({ tooltipRef, lineRef, currentSize, maxItemValue }) => {
            return (
              <Time
                tooltipRef={tooltipRef}
                lineRef={lineRef}
                data={timedata}
                translation={translator}
                labels={["Ricardo", "José", "Marcos"]}
                theme={{
                  breaks: "fill-danger",
                  adherences: "fill-success",
                }}
                {...currentSize}
                maxItemValue={maxItemValue}
              />
            );
          }}
        </Chart>
      </div>
    </div>
  );
};

export default AgentsCharts;
