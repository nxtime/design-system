import Chart, { Bar, Line, Time } from "../../../components/atom/chart";
import moment from "moment";

const data = [
  {
    Hora: 10,
    "Tempo médio de serviço": 8,
    Chamadas: 32,
    Relatórios: 24,
    Notícias: 15,
  },
  {
    Hora: 11,
    "Tempo médio de serviço": 10,
    Chamadas: 28,
    Relatórios: 17,
    Notícias: 23,
  },
  {
    Hora: 12,
    "Tempo médio de serviço": 10,
    Chamadas: 22,
    Relatórios: 27,
    Notícias: 28,
  },
  {
    Hora: 13,
    "Tempo médio de serviço": 30,
    Chamadas: 25,
    Relatórios: 8,
    Notícias: 37,
  },
  {
    Hora: 14,
    "Tempo médio de serviço": 37,
    Chamadas: 20,
    Relatórios: 13,
    Notícias: 32,
  },
];

const timedata = [
  {
    period: [
      {
        start: moment().subtract(8, "hours"),
        finish: moment(),
      },
    ],
    pausas: [
      {
        start: moment().subtract(1, "hour"),
        finish: moment(),
      },
      {
        start: moment().subtract(2, "hours"),
        finish: moment().subtract(1.5, "hours"),
      },
    ],
    aderência: [
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
    pausas: [
      {
        start: moment().subtract(1, "hour"),
        finish: moment(),
      },
      {
        start: moment().subtract(3, "hours"),
        finish: moment().subtract(2.5, "hours"),
      },
    ],
    aderência: [
      {
        start: moment().subtract(6, "hours"),
        finish: moment().subtract(4, "hours"),
      },
    ],
  },
];

const UserChart = () => {
  return (
  <div className="container center row">
    <div className="container container-lg row">
      <Chart type="line bar time" data={data} width={600} height={400} snap>
        {({ tooltipRef, lineRef, data, currentSize, maxItemValue }) => {
          return (
            <>
              <Line
                {...currentSize}
                tooltipRef={tooltipRef}
                data={data}
                maxItemValue={maxItemValue}
                lineRef={lineRef}
              />
              <Bar
                {...currentSize}
                data={data}
                showOnly={"Relatórios"}
                tooltipRef={tooltipRef}
                maxItemValue={maxItemValue}
                groupBy={"Hora"}
              />
            </>
          );
        }}
      </Chart>
    </div>
    <div className="container container-lg row">
      <Chart type="line bar time" data={data} width={600} height={100}>
        {({ tooltipRef, lineRef, currentSize, maxItemValue }) => {
          return (
            <Time
              tooltipRef={tooltipRef}
              lineRef={lineRef}
              data={timedata}
              translation={(v) => v}
              labels={["Ricardo", "José"]}
              theme={{
                Pausas: "fill-danger",
                Aderência: "fill-success",
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

export default UserChart;
