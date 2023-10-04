import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Ranking from "./Pages/Ranking";
import List from "./Pages/List";
import Quiz from "./Pages/Quiz";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/list" element={<List />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
