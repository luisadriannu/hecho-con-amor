import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import { useLoader } from "../hooks/useLoader";
import LoaderGallery from "../components/LoaderGallery";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("christening-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("christening-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("christening-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("christening-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("christening-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("christening-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("christening-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("christening-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("christening-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("christening-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("christening-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("christening-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("christening-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("christening-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("christening-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("christening-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("christening-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("christening-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("christening-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("christening-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("christening-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("christening-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("christening-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("christening-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("christening-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("christening-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("christening-27")}`,
  },
  {
    id: 28,
    image: `${GetImageUrl("christening-28")}`,
  },
  {
    id: 29,
    image: `${GetImageUrl("christening-29")}`,
  },
  {
    id: 30,
    image: `${GetImageUrl("christening-30")}`,
  },
  {
    id: 31,
    image: `${GetImageUrl("christening-31")}`,
  },
  {
    id: 32,
    image: `${GetImageUrl("christening-32")}`,
  },
  {
    id: 33,
    image: `${GetImageUrl("christening-33")}`,
  },
  {
    id: 34,
    image: `${GetImageUrl("christening-34")}`,
  },
  {
    id: 35,
    image: `${GetImageUrl("christening-35")}`,
  },
  {
    id: 36,
    image: `${GetImageUrl("christening-36")}`,
  },
];

const Christening = () => {
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
        <h2 className="text-center">Bautizos</h2>
        <h4>¿Estas interesado en tener una decoración de bautizo?</h4>
        <p>
          El sacramento del bautizmo es de los más importantes para todo
          católico. Y para ese evento tan especial te ofrecemos lo mejor en
          decoración.
        </p>
        <ul>
          <li>Área para pastel y regalos</li>
          <li>Iluminación</li>
          <li>Alfombra</li>
          <li>Arreglos florales y globos (opcional)</li>
        </ul>
        <p>
          Tenemos varios diseños para que puedas elegir o bien enviar tu propia
          idea para llevarla a cabo.
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
export default Christening;
