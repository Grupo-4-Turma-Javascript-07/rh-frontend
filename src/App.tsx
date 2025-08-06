import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Servicos from "./pages/servicos/Servicos";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Sobre />
        <Servicos />
      </main>
    </>
  )
}

export default App
