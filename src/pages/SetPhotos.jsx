import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import LoaderGallery from "../components/LoaderGallery";
import { useLoader } from "../hooks/useLoader";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("set-photos-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("set-photos-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("set-photos-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("set-photos-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("set-photos-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("set-photos-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("set-photos-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("set-photos-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("set-photos-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("set-photos-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("set-photos-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("set-photos-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("set-photos-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("set-photos-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("set-photos-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("set-photos-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("set-photos-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("set-photos-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("set-photos-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("set-photos-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("set-photos-21")}`,
  },
];

const SetPhotos = () => {
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
        <h2 className="text-center">Set para fotos</h2>
        <h4>Los mejores recuerdos en una foto.</h4>
        <p>
          Lo de moda en todas las celebraciones. <br /> Contamos con grandes
          decoraciones para familias completas y decoracion pequeñas para el
          festejado y amigos! Vive y recuerda tus mejores momentos en una foto
          sobre un escenario mágico.
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
export default SetPhotos;
