import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import LoaderGallery from "../components/LoaderGallery";
import { useLoader } from "../hooks/useLoader";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("baby-shower-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("baby-shower-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("baby-shower-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("baby-shower-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("baby-shower-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("baby-shower-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("baby-shower-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("baby-shower-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("baby-shower-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("baby-shower-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("baby-shower-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("baby-shower-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("baby-shower-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("baby-shower-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("baby-shower-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("baby-shower-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("baby-shower-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("baby-shower-18")}`,
  },
];

const BabyShower = () => {
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
        <h2 className="text-center">Baby shower</h2>
        <h4>¿Estas interesado en una decoración para tu baby shower?</h4>
        <p>
          Disfruta del milagro de dar vida a un ser al que amarás el resto de tu
          vida. <br /> La etapa del embarazo es sin duda una de la más
          inolvidable en la vida de un a mujer,formar una familia con ser tan
          pequeño e indefenso,y para celebrar su próxima llegada nada más bonito
          que un baby shower en su honor! Dónde la familia y amigos más queridos
          estarán para acompañarte.
        </p>
        <p>
          Contamos con la decoración ideal para ese gran día! Decoración con
          globos, flores y mucho más. Tu eliges la temática y nosotros te
          ayudamos a elaborarlo.
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
export default BabyShower;
