// React-router-dom
import { Link } from "react-router-dom";

// Img
import Devnotes from "../assets/img/DevNotes.jpg";
import Reactquiz from "../assets/img/ReactQuiz.jpg";
import Generate from "../assets/img/Generate.jpg";

const Myprojects = () => {
  return (
    <div className="my-projects">
      <h2>Projetos Online</h2>
      <p>Veja projetos que já reaizei o deploy:</p>
      <div className="projetcs-online">
        <div className="card animate__animated animate__backInDown">
          <img src={Generate} alt="Imagem do projeto" />
          <h3>Gerador de senhas</h3>
          <p>
            Utilização das key codes do JavaScript para gerar caracteres. Para
            gerar letras minúsculas, utilizei o código: JavaScript
            setPassword(String.fromCharCode
            <br />
            (Math.floor(Math.random() * 26) + 97)); O Math.random() * 26 é usado
            porque temos 26 letras no alfabeto. O 97 representa o ponto de
            início das letras minúsculas na tabela de key codes. <br />
            Todo o front-end foi estilizado com CSS puro, garantindo uma
            interface limpa e responsiva. <br />
            Esse gerador de senhas utilizo frequentemente no meu dia a dia.{" "}
            <br />
            Foi o meu primeiro deploy e o projeto mais util até o momento.
          </p>
          <Link
            className="btn"
            to="https://serene-trifle-07e9aa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card animate__animated animate__backInRight">
          <img src={Reactquiz} alt="Imagem do projeto" />
          <h3>React Quiz</h3>
          <p>
            Um jogo de perguntas e respostas sobre programação. Nele, você pode
            escolher entre as categorias de HTML, CSS e JavaScript. Ao
            selecionar uma categoria, o jogo começa exibindo apenas perguntas
            relacionadas a ela. <br /> Além disso, o jogo oferece
            funcionalidades que auxiliam o usuário durante a partida, como dicas
            e a opção de eliminar uma das alternativas para facilitar a
            resposta. <br /> Desenvolvi este projeto utilizando Vite com
            React.js, seguindo as melhores práticas do React.js. O software foi
            criado com CSS puro, separado para cada componente, garantindo uma
            estrutura organizada e eficiente. Também implementei um Context para
            gerenciar a lógica e as regras de negócio do jogo.
          </p>
          <Link
            className="btn"
            to="https://reactquizdev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Acesse
          </Link>
        </div>
        <div className="card animate__animated animate__backInLeft">
          <img src={Devnotes} alt="Imagem do projeto" />
          <h3>Dev Notes</h3>
          <p>
            Projeto FullStack: <br />
            O front-end do Dev Notes foi construído utilizando as seguintes
            tecnologias: <br />
            CSS Puro: Para estilização, garantindo um design limpo e responsivo.
            Vite com React: Para uma configuração de desenvolvimento rápida e
            eficiente. JavaScript​: A linguagem principal para a lógica do
            front-end. react-toastify: Para notificações amigáveis e
            interativas. react-router-dom: Para gerenciamento de rotas e
            navegação. react-icons: Para ícones variados e de fácil integração.
            axios: Para realizar requisições HTTP de forma simples e eficiente.{" "}
            <br />
            O back-end segue o padrão MVC (Model-View-Controller) e foi
            desenvolvido com as seguintes tecnologias: <br />
            Node.js: A plataforma principal para o desenvolvimento do servidor.
            Express: Framework para construção de APIs robustas e escaláveis.
            Mongoose: Para modelagem de dados e integração com o MongoDB. Cors:
            Para permitir requisições de diferentes origens.
          </p>
          <Link
            className="btn"
            to="https://devnotesreact.netlify.app/"
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
