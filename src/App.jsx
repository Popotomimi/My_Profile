import "./App.css";

// Navigation
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Meu portifólio</h1>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
