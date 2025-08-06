import { BrowserRouter } from "react-router-dom";
import Sobre from "./components/sobre/Sobre"

function App() {
  return (
    <>
      <BrowserRouter>
        <Sobre />
      </BrowserRouter>
    </>
  );
}

export default App;