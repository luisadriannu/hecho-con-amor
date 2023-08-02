import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkToWhatsapp from "./components/LinkToWhatsapp";
import Home from "./pages/Home";
import ContentCategories from "./components/ContentCategories";
import Error404 from "./components/Error404";
import Contacto from "./pages/Contacto";
import BirthdayChildren from "./pages/BirthdayChildren";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria" element={<ContentCategories />} />
          <Route path="/fiesta-infantil" element={<BirthdayChildren />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      {/* <Home /> */}
      <LinkToWhatsapp />
      <Footer />
    </>
  );
}

export default App;
