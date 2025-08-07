
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import Sobre from "./components/sobre/Sobre"
import Footer from "./components/footer/Footer";
import Servico from "./components/servicos/Servico";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="pt-20">
        <Home />
        <Sobre />
        <Servico />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;