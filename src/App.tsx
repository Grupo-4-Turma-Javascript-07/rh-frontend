import Home from './components/home/Home'
import { BrowserRouter } from "react-router-dom";
import Sobre from "./components/sobre/Sobre"
import Servico from "./components/servicos/Servico";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Sobre />
        <Servico />
      </BrowserRouter>
    </>
  );
}
export default App;