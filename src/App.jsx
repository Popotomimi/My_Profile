// Navigation
import { BrowserRouter } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Myprojects from "./components/Myprojects";
import Skills from "./components/Skills";
import Videos from "./components/Videos";

// Animate
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="welcome"></div>
      <div className="content">
        <h1 className="animate__animated animate__bounceInDown">
          Seja bem vindo!
        </h1>
      </div>
      <div className="welcome"></div>
      <Myprojects />
      <Skills />
      <Videos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
