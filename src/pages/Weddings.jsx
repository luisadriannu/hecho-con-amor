import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("wedding-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("wedding-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("wedding-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("wedding-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("wedding-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("wedding-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("wedding-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("wedding-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("wedding-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("wedding-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("wedding-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("wedding-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("wedding-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("wedding-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("wedding-15")}`,
  },
];

const Weddings = () => {
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
        <h2 className="text-center">Bodas</h2>
        <h4>¿Estas interesado en tener un evento de boda?</h4>

        <p>
          ¿Ya tienes fecha para dar ese gran paso al matrimonio? <br />
          Cuenta con nosotros para todo! Tenemos las mejores opciones para ese
          gran día, la boda de tus sueños. Decoración de salón desde principio a
          fin.
        </p>
        <ul>
          <li>Altar</li>
          <li>Mesa de novios</li>
          <li>Pastel y regalos</li>
          <li>Entrada</li>
          <li>Set para fotos</li>
        </ul>
        <p>
          Vamos a endulzar la vida a tus invitados con una hermosa y rica mesa
          de postres! Te ayudo en la organización de tu evento desde el 1er día
        </p>
        <ul>
          <li>Mobiliario</li>
          <li>Salón</li>
          <li>Meseros</li>
          <li>Banquete</li>
        </ul>
        <p>
          Y toda la ayuda que necesites para tu tranquilidad,olvídate del estrés
          y deja todo en mis manos.
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
export default Weddings;
