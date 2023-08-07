import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import { useLoader } from "../hooks/useLoader";
import LoaderGallery from "../components/LoaderGallery";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("xv-birthday-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("xv-birthday-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("xv-birthday-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("xv-birthday-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("xv-birthday-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("xv-birthday-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("xv-birthday-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("xv-birthday-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("xv-birthday-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("xv-birthday-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("xv-birthday-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("xv-birthday-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("xv-birthday-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("xv-birthday-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("xv-birthday-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("xv-birthday-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("xv-birthday-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("xv-birthday-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("xv-birthday-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("xv-birthday-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("xv-birthday-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("xv-birthday-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("xv-birthday-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("xv-birthday-24")}`,
  },
];

const XVBirthday = () => {
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
        <h2 className="text-center">XV Años</h2>
        <h4>¿Estas interesado en tener una fiesta de XV Años?</h4>
        <p>
          XV años solo se cumple una vez en la vida, y para celebrarlo en grande
          tenemos los mejores servicios para ti. Decoración completa de salón,
          pista o en tu propia casa, tu lugar de preferencia. <br />
          Contamos con:
        </p>
        <ul>
          <li>Mesa de honor.</li>
          <li>Set para tus mejores fotos</li>
          <li>Entrada principal</li>
          <li>Mesa de dulces</li>
          <li>Decoración con telas</li>
          <li>Flores</li>
          <li>Globos</li>
          <li>Centros de mesa</li>
          <li>Mobiliario</li>
        </ul>
        <small>
          <b>Hacemos de tu evento algo diferente, único y especial.</b>
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
export default XVBirthday;
