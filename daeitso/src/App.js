import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./page/Startpage/Startpage";
import Header from "./components/Header/Header";
import "./App.css";
import Uploadpage from "./page/Uploadpage/Uploadpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/upload" element={<Uploadpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
