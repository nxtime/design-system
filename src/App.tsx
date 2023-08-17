import { useEffect } from "react";
import Login from "./examples/pages/Login";
import ChartsPresentation from "./examples/pages/ChartsPresentation";
import TablePresentation from "./examples/pages/TablePresentation";

function App() {
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "Escape") (document.activeElement as any)?.blur();
    };
  }, []);

  return (
    <>
      {/* <Login />*/}
      {/*<ChartsPresentation /> */}

      <TablePresentation />
    </>
  );
}

export default App;
