// Hooks
import { useEffect, useRef } from "react";

// IMG
import Urso from "../../assets/img/urso.jpg";
import Panda from "../../assets/img/panda.jpg";
import Girafa from "../../assets/img/girafa.jpg";
import Capivara from "../../assets/img/capivara.jpg";

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
      <h2>Interaja com as imagens</h2>
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
      <h2 className="seccond">Tipos de Loading</h2>
      <div className="container-loading">
        <div className="spinner"></div>
        <div className="floating-squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="loading-text">Carregando...</div>
      </div>
    </div>
  );
};

export default About;
