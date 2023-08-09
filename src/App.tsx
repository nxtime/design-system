import { useEffect } from "react"
import Login from "./Login";

function App() {

  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === 'Escape') (document.activeElement as any)?.blur();
    }
  }, []);

  return (
    <>
      <Login />
    </>

  )
}

export default App
