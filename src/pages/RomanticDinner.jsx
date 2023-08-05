import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("romantic-dinner-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("romantic-dinner-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("romantic-dinner-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("romantic-dinner-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("romantic-dinner-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("romantic-dinner-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("romantic-dinner-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("romantic-dinner-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("romantic-dinner-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("romantic-dinner-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("romantic-dinner-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("romantic-dinner-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("romantic-dinner-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("romantic-dinner-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("romantic-dinner-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("romantic-dinner-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("romantic-dinner-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("romantic-dinner-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("romantic-dinner-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("romantic-dinner-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("romantic-dinner-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("romantic-dinner-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("romantic-dinner-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("romantic-dinner-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("romantic-dinner-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("romantic-dinner-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("romantic-dinner-27")}`,
  },
];
const RomanticDinner = () => {
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
        <h2 className="text-center">Cenas románticas</h2>
        <h4>¿Estas interesado en una cena romántica?</h4>
        <p>
          Aaaahhh quién no ha estado enamorado una vez en la vida verdad??? Y
          cuando uno tiene ese sentimiento tan bonito para esa persona quieres
          lo mejor y darles las mejores sorpresas. <br />
          Pues aquí tenemos lo justo para ese día especial,las cenas y noches
          románticas de Hecho Con Am❤️r
        </p>
        <p>Te ayudamos a sorprender a tu pareja,en aniversarios.</p>
        <ul>
          <li>Cumpleaños</li>
          <li>Cumple mes</li>
          <li>
            Alguna fecha en especial o solo por el simple hecho de estar juntos
          </li>
          <li>Pétalos</li>
          <li>Velitas</li>
          <li>
            Globos y una rica cena con bebida especial hará de esa noche algo
            inolvidable para ustedes
          </li>
        </ul>
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
export default RomanticDinner;
