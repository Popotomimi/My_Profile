// Hooks
import { useEffect } from "react";

// IMG
import Urso from "../../assets/img/urso.jpg";
import Panda from "../../assets/img/panda.jpg";
import Girafa from "../../assets/img/girafa.jpg";
import Capivara from "../../assets/img/capivara.jpg";
import Cursor from "../Cursor";

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

  return (
    <div>
      <h1 className="first animate__animated animate__jackInTheBox">Sobre</h1>
      <div className="body">
        <div className="container-animation">
          <div className="circle" style={{ "--i": 0 }}></div>
          <div className="circle" style={{ "--i": 1 }}></div>
          <div className="circle" style={{ "--i": 2 }}></div>
          <div className="circle" style={{ "--i": 3 }}></div>
          <div className="circle" style={{ "--i": 4 }}></div>
          <div className="circle" style={{ "--i": 5 }}></div>
          <div className="circle" style={{ "--i": 6 }}></div>
          <div className="circle" style={{ "--i": 7 }}></div>
          <div className="circle" style={{ "--i": 8 }}></div>
          <div className="circle" style={{ "--i": 9 }}></div>
          <div className="circle" style={{ "--i": 10 }}></div>
          <div className="circle" style={{ "--i": 11 }}></div>
          <div className="circle" style={{ "--i": 12 }}></div>
          <div className="circle" style={{ "--i": 13 }}></div>
          <div className="circle" style={{ "--i": 14 }}></div>
          <div className="circle" style={{ "--i": 15 }}></div>
          <div className="circle" style={{ "--i": 16 }}></div>
          <div className="circle" style={{ "--i": 17 }}></div>
          <div className="circle" style={{ "--i": 18 }}></div>
          <div className="circle" style={{ "--i": 19 }}></div>
          <div className="circle" style={{ "--i": 20 }}></div>
        </div>
      </div>
      <h2 className="space">Interaja com as imagens</h2>
      <div className="container-animals">
        <div className="animals">
          <img src={Urso} alt="Imagem de um urso" />
        </div>
        <div className="animals">
          <img src={Panda} alt="Imagem de um panda" />
        </div>
        <div className="animals">
          <img src={Girafa} alt="Imagem de uma Girafa" />
        </div>
        <div className="animals">
          <img src={Capivara} alt="Imagem de uma Capivara" />
        </div>
      </div>
      <div className="about">
        <div className="background-image"></div>
        <div className="about-text">
          <p>
            Olá! Sou Roberto, um desenvolvedor fullstack com um ano de
            experiência em desenvolvimento de aplicações web como freelancer. Ao
            longo desse período, tenho me dedicado a utilizar as melhores
            tecnologias do mercado para criar soluções inovadoras e eficazes.
            Meu objetivo é me tornar um especialista na minha área, e para isso,
            tenho investido em um conhecimento aprofundado e muitos anos de
            estudo.
          </p>
          <p>
            Como desenvolvedor fullstack, tenho a habilidade de trabalhar tanto
            no frontend quanto no backend das aplicações, o que me permite ter
            uma visão completa dos projetos e garantir uma integração perfeita
            entre todas as partes do sistema. A cada projeto, busco aprimorar
            minhas habilidades e entregar resultados que superem as expectativas
            dos meus clientes.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades de
            aprendizado, pois acredito que a evolução constante é essencial para
            alcançar a excelência. Se você precisa de um profissional dedicado,
            apaixonado pelo que faz e comprometido em entregar soluções de alta
            qualidade, estou à disposição para colaborar em seus projetos.
          </p>
          <p id="message" className="message">
            Vamos construir algo incrível juntos!
          </p>
        </div>
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
