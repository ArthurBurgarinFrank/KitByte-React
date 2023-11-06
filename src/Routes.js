import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Ranking from "./Pages/Ranking";
import Quiz from "./Pages/Quiz";
import Courses from "./Pages/Courses";
import Exercises from "./Pages/Exercises";
import Lesson from "./Pages/Lesson"
import Video from "./Pages/Video"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}
