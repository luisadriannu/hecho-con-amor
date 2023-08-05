import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";

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
];

const Christening = () => {
  const [modal, imgSrc, getImage, closeModal] = useImage(false);

  return (
    <section>
      <Modal className={modal ? "modal active" : "modal"}>
        <button onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </button>
        <img src={imgSrc} />
      </Modal>
      <ContentInfo className="section container">
        <h2 className="text-center">Bautizos</h2>
        <h4>¿Estas interesado en tener una decoración de bautizmo?</h4>
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
      <Gallery className="container section">
        <h3>Galería</h3>
        {data.map((item, index) => {
          return (
            <Pics key={index} onClick={() => getImage(item.image)}>
              <img src={item.image} />
            </Pics>
          );
        })}
      </Gallery>
    </section>
  );
};
export default Christening;
