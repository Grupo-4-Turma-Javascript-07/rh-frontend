import { BrowserRouter } from "react-router-dom";
import Sobre from "./components/sobre/Sobre"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sobre />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;