import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { motion } from "framer-motion";

const WhySelect = () => {
  return (
    <MainContent className="vh-100">
      <article className="container section">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          ¿Porque elegirnos?
        </motion.h2>
        <ContentWhySelect>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeIn",
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <h4>
              <i className="bi bi-magic"></i> <br />
              Hacemos tus ideas realidad
            </h4>
            <p>
              Las ideas que tengas en mente las tomamos en cuenta para tus
              sorpresas o fiestas
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeIn",
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <h4>
              <i className="bi bi-star-fill"></i> <br />
              Wedding planner
            </h4>
            <p>
              Te proponemos los lugares para la celebración de tu boda o fiesta
              y ayuda con la búsqueda gestión y contratación de todos los
              proveedores que puedan ser necesarios para organizar tu evento
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeIn",
              delay: 1.1,
            }}
            viewport={{ once: true }}
          >
            <h4>
              <i className="bi bi-gift-fill"></i> <br />
              Temáticas
            </h4>
            <p>Contamos con diversas variedades de temáticas para fiestas</p>
          </motion.div>
        </ContentWhySelect>
      </article>
    </MainContent>
  );
};

const MainContent = styled.section`
  background-image: url(${GetImageUrl("dirt-bg")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentWhySelect = styled.div`
  padding-top: 0.75rem;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;

    gap: 1.5rem;
  }
`;

export default WhySelect;
