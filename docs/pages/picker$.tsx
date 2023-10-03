import React, { useState } from "react";
import { DateRangePicker } from "../../src";
import { initAppTranslation } from "translation-system";
import moment from "moment";

const ChartsPage = () => {
  initAppTranslation({ language: "pt-BR" });
  const [date, changeDate ] = useState({
      start: moment(),
      end: moment()
      });

  return (
    <DateRangePicker
      defaultSelected={date}
      onSearch={(newDate) => {
        changeDate(newDate);
      }}
    >
      {({ endDateProps, startDateProps }) => (
        <>
          <input
            name="start"
            className="input input-neutral ring"
            {...startDateProps}
          />
          <input
            name="end"
            className="input input-neutral ring"
            {...endDateProps}
          />
        </>
      )}
    </DateRangePicker>
  );
};

export default ChartsPage;
