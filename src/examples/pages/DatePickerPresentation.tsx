import DateRangerPicker from "@/components/molecule/picker/date-range";
import moment from "moment";

const DatePickerPresentation = () => {
  return (
    <div className="container center" style={{ height: "100vh" }}>
      <form
        className="container container-lg rounded-box bg-neutral"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target as HTMLFormElement);

          console.log(Object.fromEntries(data.entries()));
        }}
      >
        <DateRangerPicker
          defaultSelected={{
            start: moment().subtract(2, "weeks"),
            end: moment(),
          }}
        >
          {({ startDateProps, endDateProps }) => (
            <>
              <input
                {...startDateProps}
                name="startDate"
                className="input input-base-200 input-ring-info"
                placeholder="Start date (dd/mm/yyyy)"
                required
              />
              <input
                {...endDateProps}
                name="endDate"
                className="input input-base-200 input-ring-info"
                placeholder="End date (dd/mm/yyyy)"
                required
              />
            </>
          )}
        </DateRangerPicker>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default DatePickerPresentation;
