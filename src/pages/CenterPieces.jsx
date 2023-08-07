import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import LoaderGallery from "../components/LoaderGallery";
import { useLoader } from "../hooks/useLoader";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("center-piece-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("center-piece-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("center-piece-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("center-piece-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("center-piece-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("center-piece-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("center-piece-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("center-piece-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("center-piece-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("center-piece-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("center-piece-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("center-piece-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("center-piece-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("center-piece-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("center-piece-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("center-piece-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("center-piece-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("center-piece-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("center-piece-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("center-piece-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("center-piece-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("center-piece-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("center-piece-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("center-piece-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("center-piece-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("center-piece-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("center-piece-27")}`,
  },
  {
    id: 28,
    image: `${GetImageUrl("center-piece-28")}`,
  },
  {
    id: 29,
    image: `${GetImageUrl("center-piece-29")}`,
  },
  {
    id: 30,
    image: `${GetImageUrl("center-piece-30")}`,
  },
  {
    id: 31,
    image: `${GetImageUrl("center-piece-31")}`,
  },
  {
    id: 32,
    image: `${GetImageUrl("center-piece-32")}`,
  },
  {
    id: 33,
    image: `${GetImageUrl("center-piece-33")}`,
  },
  {
    id: 34,
    image: `${GetImageUrl("center-piece-34")}`,
  },
];

const CenterPieces = () => {
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
        <h2 className="text-center">Centros de mesa</h2>
        <h4>¿Estas interesado en tener centros de mesa para tu fiesta?</h4>
        <p>
          Los centros de mesa son una carta de presentación en cada evento,todo
          mundo quiere uno. <br />Y aquí te mostramos algunos de nuestro trabajo
          en diferentes temáticas:
        </p>
        <ul>
          <li>Bodas</li>
          <li>Xv años</li>
          <li>Evento infantil</li>
          <li>Baby shower</li>
        </ul>
        <p>
          Cualquier tipo de temática que desees. Cotiza con nosotros! Te hacemos
          muestras sin compromiso.
        </p>
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
export default CenterPieces;
