import module from "../dependencies";
import inicio from "../assets/Images/inicio.png";
import ranking from "../assets/Images/ranking.png";
import tarefas from "../assets/Images/tarefas.png";
import aulas from "../assets/Images/aulas.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = module.useNavigate();

  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-button">
        {location.pathname == "/" ? (
          <div className="selectedIcon1"></div>
        ) : null}
        <module.Button
          sx={{
            display: "inline",
          }}
          onClick={() => navigate("/")}
        >
          <img className="imgFooter" src={inicio} alt="Botão 1" />
        </module.Button>
        <div className="caption">Início</div>
      </div>
      <div className="footer-button">
        {location.pathname == "/ranking" ? (
          <div className="selectedIcon2"></div>
        ) : null}
        <module.Button
          sx={{
            display: "inline",
          }}
          onClick={() => navigate("/ranking")}
        >
          <img className="imgFooter" src={ranking} alt="Botão 1" />
        </module.Button>
        <div className="caption">Ranking</div>
      </div>
      <div className="footer-button">
        {location.pathname == "/exercises" ? (
          <div className="selectedIcon3"></div>
        ) : null}
        <module.Button
          sx={{
            display: "inline",
          }}
          onClick={() => navigate("/exercises")}
        >
          <img className="imgFooter" src={tarefas} alt="Botão 1" />
        </module.Button>
        <div className="caption">Tarefas</div>
      </div>
      <div className="footer-button">
        {location.pathname == "/courses" ? (
          <div className="selectedIcon4"></div>
        ) : null}
        <module.Button
          sx={{
            display: "inline",
          }}
          onClick={() => navigate("/courses")}
        >
          <img className="imgFooter" src={aulas} alt="Botão 1" />
        </module.Button>
        <div className="caption">Aulas</div>
      </div>
    </footer>
  );
};

export default Footer;
