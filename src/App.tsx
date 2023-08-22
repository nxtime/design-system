import { useEffect } from "react";
import HomePage from "./examples/pages/Home";
// import DatePickerPresentation from "./examples/pages/DatePickerPresentation";
// import Login from "./examples/pages/Login";
// import ChartsPresentation from "./examples/pages/ChartsPresentation";
// import TablePresentation from "./examples/pages/TablePresentation";
// import useScroll from "./hooks/useScroll";

function App() {
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "Escape") (document.activeElement as HTMLElement)?.blur();
    };
  }, []);

  // useScroll();

  return (
    <>
      {/* <Login />*/}
      {/* <ChartsPresentation /> */}
      {/* <TablePresentation /> */}
      {/* <DatePickerPresentation /> */}
      <HomePage />
    </>
  );
}

export default App;
