import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Ranking from "./Pages/Ranking";
import Exercises from "./Pages/Exercises";
import Quiz from "./Pages/Quiz";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
