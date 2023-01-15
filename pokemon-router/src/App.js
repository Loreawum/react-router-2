import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PokeNavbar from "./components/PokeNavbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokeDetail from "./views/PokeDetail";
import NotFound from "./views/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PokeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<PokeDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
