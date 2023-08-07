import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkToWhatsapp from "./components/LinkToWhatsapp";
import Home from "./pages/Home";
import ContentCategories from "./components/ContentCategories";
import Error404 from "./components/Error404";
import Contacto from "./pages/Contacto";
import { BirthdayChildren } from "./pages/BirthdayChildren";
import BirthdayAdult from "./pages/BirthdayAdult";
import SetPhotos from "./pages/SetPhotos";
import Graduations from "./pages/Graduations";
import RomanticDinner from "./pages/RomanticDinner";
import Weddings from "./pages/Weddings";
import BabyShower from "./pages/BabyShower";
import CenterPieces from "./pages/CenterPieces";
import CandiesTable from "./pages/CandiesTable";
import Christening from "./pages/Christening";
import { PaymentMethods } from "./pages/PaymentMethods";
import Services from "./pages/Services";
import Hiring from "./pages/Hiring";
import XVBirthday from "./pages/XVBirthday";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria" element={<ContentCategories />} />
            <Route path="/fiesta-infantil" element={<BirthdayChildren />} />
            <Route path="/fiesta-adulto" element={<BirthdayAdult />} />
            <Route path="/fiesta-xv" element={<XVBirthday />} />
            <Route path="/set-para-fotos" element={<SetPhotos />} />
            <Route path="/graduaciones" element={<Graduations />} />
            <Route path="/cenas-romanticas" element={<RomanticDinner />} />
            <Route path="/bodas" element={<Weddings />} />
            <Route path="/baby-showers" element={<BabyShower />} />
            <Route path="/bautizo" element={<Christening />} />
            <Route path="/centros-de-mesa" element={<CenterPieces />} />
            <Route path="/mesas-de-dulces" element={<CandiesTable />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/formas-de-pago" element={<PaymentMethods />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contrataciones" element={<Hiring />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
        <ScrollProgress />
        <Footer />
      </HashRouter>
      <LinkToWhatsapp />
    </>
  );
}

export default App;
