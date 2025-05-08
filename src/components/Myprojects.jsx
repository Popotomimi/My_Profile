// React-router-dom
import { Link } from "react-router-dom";

// Hooks
import { useEffect } from "react";

// Img
import MemoryGame from "../assets/img/MemoryGame.jpg";
import SecretWord from "../assets/img/SecretWord.jpg";
import Reactquiz from "../assets/img/ReactQuiz.jpg";
import Devnotes from "../assets/img/DevNotes.jpg";
import Generate from "../assets/img/Generate.jpg";
import Pokenext from "../assets/img/PokeNext.jpg";
import Clones from "../assets/img/Clones.jpg";
import Album from "../assets/img/Album.jpg";
import Finder from "../assets/img/GitHubFinder.jpg";

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
      <p>Jogos:</p>
      <div className="projetcs-online">
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
          <img src={MemoryGame} alt="Imagem do projeto" />
          <h3>Memory Game</h3>
          <p>
            Desenvolvi um jogo de memória com ícones de animais, utilizando
            React, React Icons, Vite e TypeScript. O objetivo é desafiar os
            jogadores a encontrarem os pares corretos, estimulando a memória e a
            concentração. Com uma interface intuitiva e responsiva, o jogo
            oferece uma experiência divertida e educativa para todas as idades!{" "}
            <br />
            Utilizei o Animate.css para adicionar animações e tornar o jogo mais
            envolvente.
          </p>
          <Link
            className="btn"
            to="https://gamereactmemory.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card">
          <img src={SecretWord} alt="Imagem do projeto" />
          <h3>Secret Word</h3>
          <p>
            Desenvolvi um jogo da forca interativo em React, onde os jogadores
            testam seus conhecimentos ao tentar adivinhar palavras. Com uma
            interface dinâmica e responsiva, o jogo oferece uma experiência
            envolvente, desafiando os participantes a descobrirem o termo
            correto antes que fiquem sem tentativas. Ideal para quem gosta de
            jogos educativos e diversão garantida!
          </p>
          <Link
            className="btn"
            to="https://reactsecretword.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
      </div>
      <h2 className="space">Veja projetos que já realizei o deploy:</h2>
      <div className="projetcs-online">
        <div className="card">
          <img src={Finder} alt="Imagem do projeto" />
          <h3>GitHub Finder</h3>
          <p>
            Este projeto foi desenvolvido em React com TypeScript e faz
            integração com a API do GitHub. Ele permite pesquisar usuários da
            plataforma e fornece informações detalhadas, como os repositórios
            mais relevantes, quantidade de seguidores e estrelas acumuladas. Com
            uma interface simples e responsiva, o objetivo é oferecer uma forma
            prática e eficiente de acessar os dados dos perfis do GitHub.
            <br /> <br />
          </p>
          <Link
            className="btn"
            to="https://searchreactgit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card">
          <img src={Album} alt="Imagem do projeto" />
          <h3>Album de Fotos</h3>
          <p>
            Projeto onde você pode acessar um banco de imagens e realizar o
            download das fotos desejadas com facilidade. É possível encontrar
            imagens de alta qualidade, organizadas em categorias variadas e
            prontas para uso. O projeto utiliza Vite com React.js e TypeScript,
            além de integrar a API chamada Unsplash para garantir uma
            experiência rica e prática aos usuários. <br /> <br />
          </p>
          <Link
            className="btn"
            to="https://albumreactphotos.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
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
        <div className="card">
          <img src={Clones} alt="Imagem do projeto" />
          <h3>Clones</h3>
          <p>
            Desenvolvi clones da Amazon, Spotify e Facebook utilizando Next.js,
            TypeScript e Tailwind CSS. Next.js foi essencial para a renderização
            do lado do servidor e melhorar a performance das aplicações.
            TypeScript garantiu a tipagem estática e a segurança do código,
            enquanto Tailwind CSS proporcionou um layout moderno e responsivo.
            Com essas tecnologias, consegui criar interfaces atraentes e
            garantir a escalabilidade dos projetos. <br />
          </p>
          <Link
            className="btn"
            to="https://allclones.netlify.app/"
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
