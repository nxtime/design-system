import moment from "moment";
import Chart, { Time } from "../../../components/atom/chart";

const timedata = [
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
        scaled: moment().subtract(4, "hours"),
      },
    ],
    breaks: [
      {
        start: moment().subtract(1, "hour"),
        finish: moment(),
        scaled: moment().subtract(4, "hours"),
      },
      {
        start: moment().subtract(2, "hours"),
        finish: moment().subtract(1.5, "hours"),
        scaled: moment().subtract(4, "hours"),
      },
    ],
    adherences: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment().subtract(3, "hours"),
        scaled: moment().subtract(4, "hours"),
      },
    ],
  },
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
        scaled: moment(),
      },
    ],
    breaks: [
      {
        start: moment().subtract(1.25, "hour"),
        finish: moment(),
        scaled: moment(),
      },
      {
        start: moment().subtract(3, "hours"),
        finish: moment().subtract(2.5, "hours"),
        scaled: moment(),
      },
    ],
    adherences: [
      {
        start: moment().subtract(6, "hours"),
        finish: moment().subtract(4, "hours"),
        scaled: moment(),
      },
    ],
  },
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
        scaled: moment(),
      },
    ],
    adherences: [

      {
        start: moment().subtract(8, "hours"),
        finish: moment().subtract(2, "hours"),
        scaled: moment(),
      },
    ],
    breaks: [
      {
        start: moment().subtract(0.75, "hour"),
        finish: moment().subtract(0.25, "hour"),
        scaled: moment(),
      },
      {
        start: moment().subtract(3, "hours"),
        finish: moment().subtract(2.5, "hours"),
        scaled: moment(),
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
        <Chart type="time" data={[]} width={800} height={150}>
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
                  period: "fill-transparent"
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
