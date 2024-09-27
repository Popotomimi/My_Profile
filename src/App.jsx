// Navigation
import { BrowserRouter } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Myprojects from "./components/Myprojects";
import Skills from "./components/Skills";
import Videos from "./components/Videos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Seja bem vindo!</h1>
      <Myprojects />
      <Skills />
      <Videos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
