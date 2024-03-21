import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar.js";
import Home from "./components/home/Home";
import Favorite from "./components/favorite/Favorite";
import Details from "./components/details/Details";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
