import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nada" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
