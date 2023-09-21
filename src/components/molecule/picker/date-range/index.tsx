import { HTMLProps, ReactNode, useRef, useState } from "react";
import { handleEndDateFocus, handleStartDateFocus } from "./functions";
import DateDropdown from "./dropdown";
import moment, { Moment } from "moment";
import { translate } from "translation-system";

type TChildrenResponse = {
  startDateProps: HTMLProps<HTMLInputElement>;
  endDateProps: HTMLProps<HTMLInputElement>;
};

type TSearchResponse = {
  start: Moment;
  end: Moment;
};

interface IDateRangerPickerProps {
  /*
   * Should pass a moment type date
   * with a "Start" and an "End" date
   */
  defaultSelected?: {
    start: Moment;
    end: Moment;
  };
  /*
   * Should pass a single input, or a
   * fragment with multiple input's,
   * it's able to get some props out of
   * this date-range-picker
   */
  children: (_item: Partial<TChildrenResponse>) => ReactNode;
  onSearch?: (_value: TSearchResponse) => void;
}

const DateRangerPicker = ({
  defaultSelected,
  onSearch,
  children,
}: IDateRangerPickerProps) => {
  const [showDropdown, changeShowDropdown] = useState(false);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const startDateProps: HTMLProps<HTMLInputElement> = {
    ref: startDateRef,
    type: "date",
    name: "start",
    onFocus: handleStartDateFocus,
    onClick: () => {
      changeShowDropdown((s) => !s);
    },
    autoComplete: "off",
    defaultValue: defaultSelected
      ? defaultSelected.start.format("YYYY-MM-DD")
      : "",
  };

  const endDateProps: HTMLProps<HTMLInputElement> = {
    ref: endDateRef,
    type: "date",
    name: "end",
    onFocus: handleEndDateFocus,
    onClick: () => {
      changeShowDropdown((s) => !s);
    },
    autoComplete: "off",
    defaultValue: defaultSelected?.end
      ? defaultSelected.end.format("YYYY-MM-DD")
      : "",
  };

  return (
    <>
      <form
        className="date-range-picker"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);

          const data = Object.fromEntries(formData.entries()) as {
            start: string;
            end: string;
          };

          const transformedData = {
            start: moment(data.start, "YYYY-MM-DD"),
            end: moment(data.end, "YYYY-MM-DD"),
          };

          onSearch?.(transformedData);
        }}
      >
        <div className="group rounded-box">
          {children({ startDateProps, endDateProps })}
          <button className="btn btn-primary ring-info">
            {translate("common.search")}
          </button>
        </div>
        {showDropdown && (
          <DateDropdown
            defaultSelected={defaultSelected}
            startDateRef={startDateRef}
            endDateRef={endDateRef}
            onClose={() => changeShowDropdown(false)}
          />
        )}
      </form>
    </>
  );
};

export default DateRangerPicker;
