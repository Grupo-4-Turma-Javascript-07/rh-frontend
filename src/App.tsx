import { BrowserRouter } from "react-router-dom";
import Sobre from "./components/sobre/Sobre"
import Servico from "./components/servicos/Servico";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sobre />
        <Servico />
      </BrowserRouter>
    </>
  );
}

export default App;