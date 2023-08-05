import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("birthday-adult-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("birthday-adult-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("birthday-adult-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("birthday-adult-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("birthday-adult-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("birthday-adult-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("birthday-adult-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("birthday-adult-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("birthday-adult-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("birthday-adult-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("birthday-adult-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("birthday-adult-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("birthday-adult-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("birthday-adult-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("birthday-adult-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("birthday-adult-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("birthday-adult-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("birthday-adult-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("birthday-adult-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("birthday-adult-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("birthday-adult-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("birthday-adult-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("birthday-adult-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("birthday-adult-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("birthday-adult-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("birthday-adult-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("birthday-adult-27")}`,
  },
  {
    id: 28,
    image: `${GetImageUrl("birthday-adult-28")}`,
  },
  {
    id: 29,
    image: `${GetImageUrl("birthday-adult-29")}`,
  },
];

const BirthdayAdult = () => {
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
        <h2 className="text-center">Cumpleaños Adulto</h2>

        <h4>
          Nuestras decoraciones para celebrar tu cumpleaños,adultos,jóvenes o
          cualquier edad.
        </h4>
        <ul>
          <li>Colores en tendencia</li>
          <li>Flores</li>
          <li>Globos</li>
          <li>etc..</li>
        </ul>
        <p>
          Brillarás en tu celebración. Espacio para pastel, regalos,postres o
          cualquier otro detalles que desees. Contáctanos y danos la oportunidad
          de servirte.
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
export default BirthdayAdult;
