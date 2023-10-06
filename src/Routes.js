import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Map from "./Pages/Map";
import Ranking from "./Pages/Ranking";
import Quiz from "./Pages/Quiz";
import Courses from "./Pages/Courses";
import Exercises from "./Pages/Exercises";
import Lesson from "./Pages/Lesson"
import ImgBell from "./assets/Images/bell.png";

export default function AppRoutes() {

  const exercise = {
    title: "Exercícios",
    description: "WhatsApp",
    img: ImgBell,
  };

  const lessons = [
    {
      title: "Aula",
      description: "WhatsApp",
      img: ImgBell
    },
    {
      title: "Aula",
      description: "WhatsApp",
      img: ImgBell
    }
  ]
  const courses = [
    {
      title: "Redes sociais,",
      description: "Conheça cada uma!",
      img: ImgBell
    },
    {
      title: "Redes sociais,",
      description: "Conheça cada uma!",
      img: ImgBell
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home courses={courses} exercise={exercise} lessons={lessons} />} />
        <Route path="/map" element={<Map exercise={exercise} />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/quiz" element={<Quiz exercise={exercise} />} />
        <Route path="/courses" element={<Courses lessons={lessons} />} />
        <Route path="/exercises" element={<Exercises exercise={exercise} />} />
        <Route path="/lesson" element={<Lesson lessons={lessons} />} />
      </Routes>
    </BrowserRouter>
  );
}
