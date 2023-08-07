import Carrusel from "../components/Carrusel";
import ConffetiBackground from "../components/ConfettiBackground";
import FeaturedCategories from "../components/FeaturedCategories";
import { LastestNews } from "../components/LastestNews";
import MostRequested from "../components/MostRequested";
import WhySelect from "../components/WhySelect";
import facebook from "../assets/our-facebook.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        exit={{ opacity: 0 }}
      >
        <Carrusel />
        <LastestNews />
        <FeaturedCategories />
        <WhySelect />
        <MostRequested />
        <ConffetiBackground>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            Nuestro facebook
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 0.8,
            }}
            viewport={{ once: true }}
            src={facebook}
            alt="Facebook Hecho con amor"
          />
        </ConffetiBackground>
      </motion.section>
    </>
  );
};
export default Home;
