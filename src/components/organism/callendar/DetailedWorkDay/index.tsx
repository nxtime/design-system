import moment, { Moment } from "moment";
import { detailedData } from "../../../../examples/mocked/detailedWorkDay";
import "moment/dist/locale/pt-br";
import Select from "../../../molecule/select";

moment.locale("pt-br");

const breakTypes = {
  "206": "Almoço",
  "205": "Banheiro",
};

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DetailedRow = ({
  data,
  lastSevenDays,
}: {
  data: (typeof detailedData)[number]["period"];
  lastSevenDays: Moment[];
}) => {
  return (
    <div className="detailed-workday--period">
      {lastSevenDays.map((day, index) => {
        const currentDay = moment(day).format("DD [de] MMMM");

        const item = data.find(
          ({ date }) =>
            moment(date).format("YYYY/MM/DD") === day.format("YYYY/MM/DD"),
        );

        if (item === undefined) {
          return (
            <div key={index} className="day">
              <span>{currentDay}</span>
            </div>
          );
        }

        const startServiceTime = moment.utc(item.start).format("HH[h]mm");
        const finishServiceTime = moment.utc(item.finish).format("HH[h]mm");

        return (
          <div className="day" key={index}>
            <span>{currentDay}</span>
            <span className="service">Serviço</span>
            <span className="service-time">
              {startServiceTime} - {finishServiceTime}
            </span>
            <span className="description">{item.description}*</span>
            <div className="breaks">
              {item.breaks.map((currentBreak, breakIndex) => {
                const startBreakTime = moment
                  .utc(currentBreak.start)
                  .format("HH[h]mm");
                const finishBreakTime = moment
                  .utc(currentBreak.finish)
                  .format("HH[h]mm");
                return (
                  <div className="break-item" key={breakIndex}>
                    <span className="break-item--label">
                      {breakTypes[String(currentBreak.type) as "206"]}
                    </span>
                    <span className="break-item--content">
                      {startBreakTime} - {finishBreakTime}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DetailedWorkDay = () => {
  const lastSevenDays = Array.from({ length: 7 }).map((_, i) =>
    moment()
      .clone()
      .subtract(7 - i, "days"),
  );

  return (
    <div className="detailed-workday container">
      <header className="detailed-workday--header container row spacing">
        <div className="group rounded-box">
          <label className="bg-primary">Filtro</label>
          <Select items={["Semana", "Mês", "Ano"]} />
        </div>
        <span>Intervalo de data: 08/08/2023 - 14/08/2023</span>
      </header>
      <div className="detailed-workday--container">
        <div className="detailed-workday--item">
          <span className="" style={{ width: "10rem" }}></span>
          <div className="weekdays">
            {lastSevenDays.map((day) => {
              const currentDay = moment(day).day();
              return <span className="">{weekDays[currentDay]}</span>;
            })}
          </div>
        </div>
        {detailedData.map((item, index) => {
          return (
            <div key={index} className="detailed-workday--item">
              <span>{item.agent.firstName}</span>
              <DetailedRow
                key={index}
                data={item.period}
                lastSevenDays={lastSevenDays}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailedWorkDay;
