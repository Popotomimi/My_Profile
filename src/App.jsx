// Navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Animate
import "animate.css";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AuthPage from "./components/pages/AuthPage";
import GeminiPage from "./components/pages/GeminiPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/gemini" element={<GeminiPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
