import module from "../dependencies";
import inicio from "../assets/Images/inicio.png";
import ranking from "../assets/Images/ranking.png";
import tarefas from "../assets/Images/tarefas.png";
import aulas from "../assets/Images/aulas.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-button">
        <a href="/">
          <img className="imgFooter" src={inicio} alt="Botão 1" />
          <div className="caption">Início</div>
        </a>
      </div>
      <div className="footer-button">
        <a href="/ranking">
          <img className="imgFooter" src={ranking} alt="Botão 2" />
          <div className="caption">Ranking</div>
        </a>
      </div>
      <div className="footer-button">
        <a href="/exercises">
          <img className="imgFooter" src={tarefas} alt="Botão 3" />
          <div className="caption">Tarefas</div>
        </a>
      </div>
      <div className="footer-button">
        <a href="/courses">
          <img className="imgFooter" src={aulas} alt="Botão 4" />
          <div className="caption">Aulas</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
