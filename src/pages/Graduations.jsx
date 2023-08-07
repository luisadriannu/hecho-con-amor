import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import { useLoader } from "../hooks/useLoader";
import LoaderGallery from "../components/LoaderGallery";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("graduation-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("graduation-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("graduation-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("graduation-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("graduation-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("graduation-6")}`,
  },
];

const Graduations = () => {
  const [modal, imgSrc, getImage, closeModal] = useImage(false);
  const [loaderGallery] = useLoader();

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeIn",
      }}
      exit={{ opacity: 0 }}
    >
      <Modal className={modal ? "modal active" : "modal"}>
        <button onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </button>
        <img src={imgSrc} />
      </Modal>
      <ContentInfo className="section container">
        <h2 className="text-center">Graduaciones</h2>
        <h4>¿Estas interesado en una decoración de Graduación?</h4>
        <p>
          Las graduaciones son divertidas,llenas de emociones,nostalgia y
          mágicos recuerdos para nuestros hijos. <br />
          Tenemos las mejores decoraciones para la clausura de sus pequeños de
          preescolar. Llenas de color y divertidas. No dudes en contactarnos y
          te hacemos presupuesto sin compromiso.
        </p>
        <small>
          <b>NOTA: Decoraciones en escuelas solo aplica para PREESCOLAR.</b>
        </small>
      </ContentInfo>
      <article className="container section">
        <h3 className="text-center">Galería</h3>
        {loaderGallery ? (
          <LoaderGallery />
        ) : (
          <Gallery>
            {data.map((item, index) => {
              return (
                <Pics key={index} onClick={() => getImage(item.image)}>
                  <img src={item.image} />
                </Pics>
              );
            })}
          </Gallery>
        )}
      </article>
    </motion.section>
  );
};
export default Graduations;
