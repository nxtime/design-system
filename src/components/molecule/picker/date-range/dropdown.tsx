import { Icon } from "@iconify/react/dist/iconify.js";
import moment, { Moment } from "moment";
import { RefObject, useState } from "react";

const shortWeekDays = ["Su", "Mo", "Tu", "We", "Th", "Fri", "Sa"];

interface IDateDropDown {
  defaultSelected?: {
    start: Moment;
    end: Moment;
  };
  startDateRef: RefObject<HTMLInputElement>;
  endDateRef: RefObject<HTMLInputElement>;
  onClose: () => void;
}

const DateDropdown = ({
  defaultSelected,
  startDateRef,
  endDateRef,
  onClose,
}: IDateDropDown) => {
  const [currentShowMonth, setCurrentShowMonth] = useState(
    defaultSelected?.end === undefined ? moment() : defaultSelected.end,
  );

  const [currentSelectedDate, setCurrentSelectedDate] = useState<{
    start: Moment | null;
    end: Moment | null;
  }>(
    defaultSelected === undefined
      ? {
        start: null,
        end: null,
      }
      : defaultSelected,
  );

  const currentShowSelectedDate = currentShowMonth;

  const firstDayOfMonth = currentShowSelectedDate.clone().startOf("month");
  const lastDayOfMonth = currentShowSelectedDate.clone().endOf("month");

  const daysOfMonth = [];
  const startWeekday = firstDayOfMonth.day();
  const endWeekday = lastDayOfMonth.day();

  for (let i = startWeekday - 1; i >= 0; i--) {
    daysOfMonth.push(firstDayOfMonth.clone().subtract(i, "days"));
  }

  for (
    let currentDay = firstDayOfMonth.clone().add(1, "day");
    currentDay.isSameOrBefore(lastDayOfMonth);
    currentDay.add(1, "day")
  ) {
    daysOfMonth.push(currentDay.clone());
  }

  for (let i = 1; i <= 6 - endWeekday + 1; i++) {
    daysOfMonth.push(lastDayOfMonth.clone().add(i, "days"));
  }

  return (
    <div className="dropdown">
      <div className="container rounded-box shadow-md bg-base-200">
        <header className="date-header">
          <div className="date-header--actions">
            <button
              type="button"
              className="btn btn-icon btn-sm btn-square btn-neutral"
              onClick={() => {
                setCurrentShowMonth((previusShowMonth) =>
                  previusShowMonth.clone().subtract(1, "month"),
                );
              }}
            >
              <Icon icon="ep:arrow-left-bold" />
            </button>
            <button type="button" className="btn">
              {currentShowSelectedDate.format("MMM, YYYY")}
            </button>
            <button
              type="button"
              className="btn btn-icon btn-sm btn-square btn-neutral"
              onClick={() => {
                setCurrentShowMonth((previusShowMonth) =>
                  previusShowMonth.clone().add(1, "month"),
                );
              }}
              disabled={currentShowMonth
                .clone()
                .add(1, "month")
                .isSameOrAfter(moment())}
            >
              <Icon icon="ep:arrow-left-bold" hFlip={true} />
            </button>
          </div>
          <ul className="date-weekdays">
            {shortWeekDays.map((day) => (
              <li key={day}>
                <span>{day}</span>
              </li>
            ))}
          </ul>
        </header>
        <ul className="days-container">
          {daysOfMonth.map((day, index) => {
            let currentClassName = "";

            const isDaySelected = currentSelectedDate.start
              ?.startOf("day")
              .isSame(day)
              ? "selected start"
              : currentSelectedDate.end?.startOf("day")?.isSame(day)
                ? "selected end"
                : "";

            const isOnMonth =
              day.format("MM") !== currentShowSelectedDate.format("MM")
                ? "not-current"
                : "";

            const isBetween = day.isBetween(
              currentSelectedDate.start,
              currentSelectedDate.end,
            )
              ? "between"
              : "";

            currentClassName +=
              isOnMonth + isDaySelected + isBetween ;

            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      startDateRef.current === null ||
                      endDateRef.current === null
                    )
                      return;
                    if (currentSelectedDate.start?.date() === day.date()) {
                      setCurrentSelectedDate({
                        start: null,
                        end: null,
                      });
                      startDateRef.current.value = "";
                      endDateRef.current.value = "";
                      return;
                    }

                    if (currentSelectedDate.start === null) {
                      setCurrentSelectedDate((previousDate) => ({
                        ...previousDate,
                        start: day,
                      }));

                      startDateRef.current.value = day.format("YYYY-MM-DD");
                    } else if (currentSelectedDate.start !== null) {
                      if (day.isBefore(currentSelectedDate.start)) {
                        setCurrentSelectedDate((previousDate) => ({
                          start: day,
                          end: previousDate.start,
                        }));

                        startDateRef.current.value = day.format("YYYY-MM-DD");
                        endDateRef.current.value =
                          currentSelectedDate.start.format("YYYY-MM-DD");
                        return;
                      }

                      setCurrentSelectedDate((previousDate) => ({
                        ...previousDate,
                        end: day,
                      }));

                      endDateRef.current.value = day.format("YYYY-MM-DD");
                    }
                  }}
                  className={currentClassName}
                  disabled={day.isAfter(moment())}
                >
                  {day.format("DD")}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={onClose}
          className="btn btn-sm btn-primary"
          style={{ alignSelf: "end" }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DateDropdown;
