import { GetImageUrl } from "../helpers/GetImageUrl";
import { ContentInfo, Gallery, Pics, Modal } from "./BirthdayChildren";
import { useImage } from "../hooks/useImage";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("candies-table-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("candies-table-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("candies-table-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("candies-table-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("candies-table-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("candies-table-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("candies-table-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("candies-table-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("candies-table-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("candies-table-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("candies-table-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("candies-table-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("candies-table-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("candies-table-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("candies-table-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("candies-table-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("candies-table-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("candies-table-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("candies-table-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("candies-table-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("candies-table-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("candies-table-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("candies-table-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("candies-table-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("candies-table-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("candies-table-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("candies-table-27")}`,
  },
  {
    id: 28,
    image: `${GetImageUrl("candies-table-28")}`,
  },
  {
    id: 29,
    image: `${GetImageUrl("candies-table-29")}`,
  },
  {
    id: 30,
    image: `${GetImageUrl("candies-table-30")}`,
  },
  {
    id: 31,
    image: `${GetImageUrl("candies-table-31")}`,
  },
  {
    id: 32,
    image: `${GetImageUrl("candies-table-32")}`,
  },
  {
    id: 33,
    image: `${GetImageUrl("candies-table-33")}`,
  },
  {
    id: 34,
    image: `${GetImageUrl("candies-table-34")}`,
  },
  {
    id: 35,
    image: `${GetImageUrl("candies-table-35")}`,
  },
  {
    id: 36,
    image: `${GetImageUrl("candies-table-36")}`,
  },
  {
    id: 37,
    image: `${GetImageUrl("candies-table-37")}`,
  },
  {
    id: 38,
    image: `${GetImageUrl("candies-table-38")}`,
  },
  {
    id: 39,
    image: `${GetImageUrl("candies-table-39")}`,
  },
];

const CandiesTable = () => {
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
        <h2 className="text-center">Mesas de dulces</h2>
        <h4>¿Estas interesado en tener una mesa de dulces para tu fiesta?</h4>
        <p>
          Has de tu evento algo divertido con una mesa y decoración con dulces,
          postres,salado o mixto! Lo etiquetamos,los personalizamos y le damos
          color a tu evento! <br /> Contamos con variedad de producto,con
          variedad de modelos y variedad de sabores exquisitos para tu paladar.{" "}
          <br />
          Pregunta por nuestros paquetes y nuestra variedad.
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
export default CandiesTable;
