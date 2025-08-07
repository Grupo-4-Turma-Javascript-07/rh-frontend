import Home from './pages/home/Home'
import { BrowserRouter } from "react-router-dom";

import Sobre from "./components/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Sobre />
      </BrowserRouter>
    </>
  );
}
export default App;