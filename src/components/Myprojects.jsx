// React-router-dom
import { Link } from "react-router-dom";

// Hooks
import { useEffect } from "react";

// Img
import Devnotes from "../assets/img/DevNotes.jpg";
import Reactquiz from "../assets/img/ReactQuiz.jpg";
import Generate from "../assets/img/Generate.jpg";
import Pokenext from "../assets/img/PokeNext.jpg";

const Myprojects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("animated")
          ) {
            entry.target.classList.add(
              "animate__animated",
              "animate__pulse",
              "animated"
            );
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="my-projects">
      <h2>Projetos Online</h2>
      <p>Veja projetos que já realizei o deploy:</p>
      <div className="projetcs-online">
        <div className="card">
          <img src={Generate} alt="Imagem do projeto" />
          <h3>Gerador de senhas</h3>
          <p>
            Projeto onde você consegue gerar senhas aleatórias e seguras, com a
            possibilidade de incluir símbolos, números, letras maiúsculas e
            minúsculas. Você também pode escolher quantos caracteres a senha
            terá, com a facilidade de copiar a senha com apenas um clique.{" "}
            <br /> <br />
          </p>
          <Link
            className="btn"
            to="https://serene-trifle-07e9aa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card">
          <img src={Reactquiz} alt="Imagem do projeto" />
          <h3>React Quiz</h3>
          <p>
            Um jogo de perguntas e respostas sobre programação. Nele, você pode
            escolher entre as categorias de HTML, CSS e JavaScript. Ao
            selecionar uma categoria, o jogo começa exibindo apenas perguntas
            relacionadas a ela. <br /> Além disso, o jogo oferece
            funcionalidades que auxiliam o usuário durante a partida, como dicas
            e a opção de eliminar uma das alternativas para facilitar a
            resposta.
          </p>
          <Link
            className="btn"
            to="https://reactquizdev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card">
          <img src={Devnotes} alt="Imagem do projeto" />
          <h3>Dev Notes</h3>
          <p>
            Projeto FullStack: <br />
            Esse projeto é um clone do Google Keep, onde você pode fazer
            anotações online. Possui funcionalidades para excluir, editar e
            duplicar notas. Na barra de navegação, você pode realizar pesquisas
            e exportar no formato CSV para colocar em uma planilha do Excel, por
            exemplo. <br />
          </p>
          <Link
            className="btn"
            to="https://devnotesreact.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card">
          <img src={Pokenext} alt="Imagem do projeto" />
          <h3>PokeNext</h3>
          <p>
            Desenvolvi uma aplicação web que utiliza a PokeAPI para exibir
            informações detalhadas sobre Pokémons. Usei React.js para criar
            componentes reutilizáveis, Next.js para renderização do lado do
            servidor e melhorar a performance, TypeScript para garantir a
            tipagem estática e segurança do código, e Tailwind CSS para um
            layout totalmente responsivo. Com essas tecnologias, consegui
            consumir a PokeAPI, adaptar o design a qualquer dispositivo e seguir
            boas práticas de componentização, criando um projeto eficiente e
            escalável. <br />
          </p>
          <Link
            className="btn"
            to="https://pokemonmalu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
