// Hooks
import { useEffect } from "react";

// Components
import Cursor from "../Cursor";
import Memorygame from "../Memorygame";

// IMG
import Eu from "../../assets/img/Euzinho.jpg";

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const About = () => {
  useEffect(() => {
    const messageElement = document.getElementById("message");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            messageElement.classList.add("animate");
            observer.unobserve(messageElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(messageElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToMemory = () => {
    const memoryGame = document.getElementById("memory");
    if (memoryGame) {
      memoryGame.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-container">
      <div className="portifolio">
        <h1>Roberto de Oliveira</h1>
        <aside className="sidebar">
          <img src={Eu} alt="Eu" />
          <p className="title">Desenvolvedor JavaScript</p>
          <div className="social-networks">
            <a className="btn btn-social " href="https://github.com/Popotomimi">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/"
              className="btn btn-social">
              <FaLinkedin />
            </a>
          </div>
          <div className="information">
            <div className="info-card">
              <AiFillPhone className="phone-icon" />
              <div>
                <h4>Telefone</h4>
                <p>(11) 95278-9867</p>
              </div>
            </div>
            <div className="info-card">
              <AiOutlineMail className="email-icon" />
              <div>
                <h4>E-mail</h4>
                <p>roberto_o7@outlook.com</p>
              </div>
            </div>
            <div className="info-card">
              <AiFillEnvironment className="pin-icon" />
              <div>
                <h4>Localização</h4>
                <p>São Paulo / SP</p>
              </div>
            </div>
          </div>
          <a
            className="btn"
            href="#memory"
            onClick={(e) => {
              e.preventDefault();
              scrollToMemory();
            }}>
            Download currículo
          </a>
        </aside>
        <div className="about">
          <div className="about-text">
            <h2>Sobre</h2>
            <p>
              Olá! Sou Roberto, um desenvolvedor fullstack com um ano de
              experiência em desenvolvimento de aplicações web como freelancer.
              Ao longo desse período, tenho me dedicado a utilizar as melhores
              tecnologias do mercado para criar soluções inovadoras e eficazes.
              Meu objetivo é me tornar um especialista na minha área, e para
              isso, tenho investido em um conhecimento aprofundado e muitos anos
              de estudo.
            </p>
            <p>
              Como desenvolvedor fullstack, tenho a habilidade de trabalhar
              tanto no frontend quanto no backend das aplicações, o que me
              permite ter uma visão completa dos projetos e garantir uma
              integração perfeita entre todas as partes do sistema. A cada
              projeto, busco aprimorar minhas habilidades e entregar resultados
              que superem as expectativas dos meus clientes.
            </p>
            <p>
              Estou sempre em busca de novos desafios e oportunidades de
              aprendizado, pois acredito que a evolução constante é essencial
              para alcançar a excelência. Se você precisa de um profissional
              dedicado, apaixonado pelo que faz e comprometido em entregar
              soluções de alta qualidade, estou à disposição para colaborar em
              seus projetos.
            </p>
            <p id="message" className="message">
              Vamos construir algo incrível juntos!
            </p>
          </div>
        </div>
      </div>
      <div id="memory">
        <Memorygame />
      </div>
      <div className="hidden">
        <Cursor className="space-two" />
        <h1>Mova o mouse</h1>
        <Cursor />
      </div>
    </div>
  );
};

export default About;
