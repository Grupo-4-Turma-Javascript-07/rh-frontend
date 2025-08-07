
import Home from "./components/home/Home"
import Sobre from "./components/sobre/Sobre"
import Footer from "./components/footer/Footer";
import Servico from "./components/servicos/Servico";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Sobre />
        <Servico />
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;