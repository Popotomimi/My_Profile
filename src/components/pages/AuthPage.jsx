// IMG
import formOne from "../../assets/img/formOne.jpg";
import formTwo from "../../assets/img/formTwo.jpg";
import formThree from "../../assets/img/formThree.jpg";

// Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <h1>✨ Projeto Fullstack de Autenticação Segura ✨</h1>

      <h2>Formulário interativo</h2>

      <div className="container-animals">
        <div className="animals">
          <img src={formOne} alt="Imagem de um formulário" />
        </div>
        <div className="animals">
          <img src={formTwo} alt="Imagem de um formulário" />
        </div>
        <div className="animals">
          <img src={formThree} alt="Imagem de um formulário" />
        </div>
      </div>

      <p className="space-two">
        Neste projeto, desenvolvi um formulário interativo onde, ao clicar no
        campo de senha, o Garfield fecha os olhos. Já ao selecionar a opção
        "mostrar senha", ele abre um dos olhos, espiando a senha.
      </p>

      <section className="backend-section">
        <h2>📌 Backend</h2>
        <p>
          API Rest desenvolvida com <strong>Nest.js</strong> e{" "}
          <strong>MongoDB</strong>, hospedada no Render e utilizando Atlas DB
          (AWS).
          <br />
          <strong>Foco:</strong> Segurança com criptografia (bcrypt), variáveis
          de ambiente (dotenv) e tokens JWT para autenticação.
        </p>
        <ul className="dependencies">
          <li>
            🔒 <strong>Criptografia</strong>:
          </li>
          <li>Bcrypt para armazenar senhas de forma segura.</li>
          <li>
            🌱 <strong>Variáveis de Ambiente</strong>:
          </li>
          <li>dotenv para proteger chaves e credenciais.</li>
        </ul>
        <p>
          <strong>Principais Dependências:</strong>
        </p>
        <ul className="dependencies">
          <li>
            <strong>nestjs/mongoose 📂</strong>
          </li>
          <li>Integração simplificada do MongoDB com o Nest.js</li>
          <li>
            <strong>bcrypt 🔑</strong>
          </li>
          <li>Para hashar senhas.</li>
          <li>
            <strong>class-transformer 🧹</strong>
          </li>
          <li>
            Transformação e limpeza de objetos entre classes e plain objects.
          </li>
          <li>
            <strong>class-validator ✅</strong>
          </li>
          <li>Validação de dados recebidos na API.</li>
          <li>
            <strong>cors 🌐</strong>
          </li>
          <li>
            Para permitir requests entre diferentes origens (Cross-Origin
            Resource Sharing).
          </li>
          <li>
            <strong>dotenv 🛡️</strong>
          </li>
          <li>Gerenciamento de variáveis de ambiente.</li>
          <li>
            <strong>jsonwebtoken 🧾</strong>
          </li>
          <li>Criação e verificação de tokens JWT para autenticação.</li>
        </ul>
      </section>

      <section className="frontend-section">
        <h2>🌟 Frontend</h2>
        <p>
          Construído com <strong>Vite</strong>, <strong>React.js</strong> e{" "}
          <strong>TypeScript</strong>. Gerencia autenticação com context e
          custom hooks. Estilização moderna feita com{" "}
          <strong>TailWind CSS</strong>, focando na experiência do usuário.
        </p>
        <p>
          <strong>Principais Funcionalidades:</strong>
        </p>
        <ul className="dependencies">
          <li>Login e Logout</li>
          <li>Cadastro</li>
          <li>Dashboard 📊</li>
          <li>Edição de dados pessoais ✍️</li>
        </ul>
        <p>
          <strong>Principais Dependências:</strong>
        </p>
        <ul className="dependencies">
          <li>
            <strong>axios 🌐</strong>
          </li>
          <li>Realizar requisições HTTP de forma simples.</li>
          <li>
            <strong>react, react-dom ⚛️</strong>
          </li>
          <li>Core da aplicação React.</li>
          <li>
            <strong>react-router-dom 🗺️</strong>
          </li>
          <li>Para gerenciar rotas da aplicação.</li>
          <li>
            <strong>react-icons 🎨</strong>
          </li>
          <li>Para ícones estilizados.</li>
          <li>
            <strong>react-toastify 🔔</strong>
          </li>
          <li>Exibição de notificações amigáveis e personalizáveis.</li>
        </ul>
      </section>

      <div className="footer-auth">
        <p>
          <strong>Link do projeto em produção:</strong>{" "}
          <a href="https://reactjwt.netlify.app/">
            <FaExternalLinkAlt /> Produção
          </a>
        </p>
        <p className="repository">
          <strong>Repositórios:</strong>{" "}
          <a href="https://github.com/Popotomimi/AuthJWT">
            <FaGithub /> GitHub Backend
          </a>{" "}
          <a href="https://github.com/Popotomimi/FrontAuthToken">
            <FaGithub /> GitHub Frontend
          </a>
        </p>
        <p>
          <strong>💡 Dica: </strong> Segurança e experiência do usuário são
          prioridades!
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
