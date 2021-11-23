// import logo from './logo.svg';
// import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ContactoPage from "./pages/Contacto";
import GaleriaPage from "./pages/Galeria";
import HomePage from "./pages/Home";
import NosotrosPage from "./pages/Nosotros";
import NovedadesPage from "./pages/Novedades";
import ServiciosPage from "./pages/Servicios";

import '../src/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/nosotros" exact element={<NosotrosPage />} />
          <Route path="/contacto" exact element={<ContactoPage />} />
          <Route path="/servicios" exact element={<ServiciosPage />} />
          <Route path="/novedades" exact element={<NovedadesPage/>} />
          <Route path="/galeria" exact element={<GaleriaPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
