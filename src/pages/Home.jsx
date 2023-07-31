import Carrusel from "../components/Carrusel";
import ConffetiBackground from "../components/ConfettiBackground";
import FeaturedCategories from "../components/FeaturedCategories";
import { LastestNews } from "../components/LastestNews";
import MostRequested from "../components/MostRequested";
import WhySelect from "../components/WhySelect";
import facebook from "../assets/our-facebook.png";

const Home = () => {
  return (
    <section>
      <Carrusel />
      <LastestNews />
      <FeaturedCategories />
      <WhySelect />
      <MostRequested />
      <ConffetiBackground>
        <h2>Nuestro facebook</h2>
        <img src={facebook} alt="Facebook Hecho con amor" />
      </ConffetiBackground>
    </section>
  );
};
export default Home;
