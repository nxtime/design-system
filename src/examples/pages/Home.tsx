import Main from "@/components/organism/main";
import TablePresentation from "./TablePresentation";
import DateRangerPicker from "@/components/molecule/picker/date-range";
import moment from "moment";

const HomePage = () => {
  // const { openModal, closeModal } = useModal();
  return (
    <Main>
      <header className="container row justify-between items-center">
        <h2 className="">Products</h2>
        <DateRangerPicker
          defaultSelected={{
            start: moment().subtract(2, "weeks"),
            end: moment(),
          }}
          onSearch={(dates) => {
            console.log(dates);
          }}
        >
          {({ startDateProps, endDateProps }) => (
            <>
              <input
                {...startDateProps}
                name="startDate"
                className="input input-neutral input-ring-info"
                placeholder="Start date (dd/mm/yyyy)"
                required
              />
              <input
                {...endDateProps}
                name="endDate"
                className="input input-neutral input-ring-info"
                placeholder="End date (dd/mm/yyyy)"
                required
              />
            </>
          )}
        </DateRangerPicker>
      </header>
      <TablePresentation />
    </Main>
  );
};

export default HomePage;
