import module from "../dependencies";
import inicio from "../assets/Images/inicio.png";
import ranking from "../assets/Images/ranking.png";
import tarefas from "../assets/Images/tarefas.png";
import aulas from "../assets/Images/aulas.png";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-button">
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
