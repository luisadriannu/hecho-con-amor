import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { useImage } from "../hooks/useImage";
import { motion } from "framer-motion";
import LoaderGallery from "../components/LoaderGallery";
import { useLoader } from "../hooks/useLoader";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("birthday-children-1")}`,
  },
  {
    id: 2,
    image: `${GetImageUrl("birthday-children-2")}`,
  },
  {
    id: 3,
    image: `${GetImageUrl("birthday-children-3")}`,
  },
  {
    id: 4,
    image: `${GetImageUrl("birthday-children-4")}`,
  },
  {
    id: 5,
    image: `${GetImageUrl("birthday-children-5")}`,
  },
  {
    id: 6,
    image: `${GetImageUrl("birthday-children-6")}`,
  },
  {
    id: 7,
    image: `${GetImageUrl("birthday-children-7")}`,
  },
  {
    id: 8,
    image: `${GetImageUrl("birthday-children-8")}`,
  },
  {
    id: 9,
    image: `${GetImageUrl("birthday-children-9")}`,
  },
  {
    id: 10,
    image: `${GetImageUrl("birthday-children-10")}`,
  },
  {
    id: 11,
    image: `${GetImageUrl("birthday-children-11")}`,
  },
  {
    id: 12,
    image: `${GetImageUrl("birthday-children-12")}`,
  },
  {
    id: 13,
    image: `${GetImageUrl("birthday-children-13")}`,
  },
  {
    id: 14,
    image: `${GetImageUrl("birthday-children-14")}`,
  },
  {
    id: 15,
    image: `${GetImageUrl("birthday-children-15")}`,
  },
  {
    id: 16,
    image: `${GetImageUrl("birthday-children-16")}`,
  },
  {
    id: 17,
    image: `${GetImageUrl("birthday-children-17")}`,
  },
  {
    id: 18,
    image: `${GetImageUrl("birthday-children-18")}`,
  },
  {
    id: 19,
    image: `${GetImageUrl("birthday-children-19")}`,
  },
  {
    id: 20,
    image: `${GetImageUrl("birthday-children-20")}`,
  },
  {
    id: 21,
    image: `${GetImageUrl("birthday-children-21")}`,
  },
  {
    id: 22,
    image: `${GetImageUrl("birthday-children-22")}`,
  },
  {
    id: 23,
    image: `${GetImageUrl("birthday-children-23")}`,
  },
  {
    id: 24,
    image: `${GetImageUrl("birthday-children-24")}`,
  },
  {
    id: 25,
    image: `${GetImageUrl("birthday-children-25")}`,
  },
  {
    id: 26,
    image: `${GetImageUrl("birthday-children-26")}`,
  },
  {
    id: 27,
    image: `${GetImageUrl("birthday-children-27")}`,
  },
  {
    id: 28,
    image: `${GetImageUrl("birthday-children-28")}`,
  },
  {
    id: 29,
    image: `${GetImageUrl("birthday-children-29")}`,
  },
  {
    id: 30,
    image: `${GetImageUrl("birthday-children-30")}`,
  },
  {
    id: 31,
    image: `${GetImageUrl("birthday-children-31")}`,
  },
  {
    id: 32,
    image: `${GetImageUrl("birthday-children-32")}`,
  },
  {
    id: 33,
    image: `${GetImageUrl("birthday-children-33")}`,
  },
  {
    id: 34,
    image: `${GetImageUrl("birthday-children-34")}`,
  },
  {
    id: 35,
    image: `${GetImageUrl("birthday-children-35")}`,
  },
  {
    id: 36,
    image: `${GetImageUrl("birthday-children-36")}`,
  },
  {
    id: 37,
    image: `${GetImageUrl("birthday-children-37")}`,
  },
  {
    id: 38,
    image: `${GetImageUrl("birthday-children-38")}`,
  },
  {
    id: 39,
    image: `${GetImageUrl("birthday-children-39")}`,
  },
  {
    id: 40,
    image: `${GetImageUrl("birthday-children-40")}`,
  },
  {
    id: 41,
    image: `${GetImageUrl("birthday-children-41")}`,
  },
  {
    id: 42,
    image: `${GetImageUrl("birthday-children-42")}`,
  },
  {
    id: 43,
    image: `${GetImageUrl("birthday-children-43")}`,
  },
  {
    id: 44,
    image: `${GetImageUrl("birthday-children-44")}`,
  },
  {
    id: 45,
    image: `${GetImageUrl("birthday-children-45")}`,
  },
  {
    id: 46,
    image: `${GetImageUrl("birthday-children-46")}`,
  },
  {
    id: 47,
    image: `${GetImageUrl("birthday-children-47")}`,
  },
  {
    id: 48,
    image: `${GetImageUrl("birthday-children-48")}`,
  },
  {
    id: 49,
    image: `${GetImageUrl("birthday-children-49")}`,
  },
  {
    id: 50,
    image: `${GetImageUrl("birthday-children-50")}`,
  },
  {
    id: 51,
    image: `${GetImageUrl("birthday-children-51")}`,
  },
  {
    id: 52,
    image: `${GetImageUrl("birthday-children-52")}`,
  },
  {
    id: 53,
    image: `${GetImageUrl("birthday-children-53")}`,
  },
  {
    id: 54,
    image: `${GetImageUrl("birthday-children-54")}`,
  },
  {
    id: 55,
    image: `${GetImageUrl("birthday-children-55")}`,
  },
  {
    id: 56,
    image: `${GetImageUrl("birthday-children-56")}`,
  },
  {
    id: 57,
    image: `${GetImageUrl("birthday-children-57")}`,
  },
  {
    id: 58,
    image: `${GetImageUrl("birthday-children-58")}`,
  },
  1,
];

const BirthdayChildren = () => {
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
        <h2 className="text-center">Cumpleaños infaltil</h2>
        <h4>¿Estas interesado en una fiesta infantil?</h4>
        <p>Nos especializamos en fiestas infantiles temáticas.</p>
        <ul>
          <li>Superhéroes</li>
          <li>Princesas</li>
          <li>Personajes y programas de moda</li>
        </ul>
        <p>
          Si tienes tu propia idea tratamos de llevarla a la realidad. El modelo
          y colores que elijas, podemos hacer cambios a tu gusto, festeja a tu
          niño(a) de la mejor manera! Con una fiesta temática infantil!.
        </p>
        <ul>
          <li>Mobiliario</li>
          <li>Globos</li>
          <li>Personajes</li>
          <li>Iluminación</li>
          <li>Nombre del festejado (a)</li>
          <li>Número con la edad que cumple</li>
        </ul>
        <p>Y todos los detalles más bonitos para ese gran día</p>

        <h4>Contamos con paquetes especiales:</h4>
        <ul>
          <li>Mesa para pastel y regalos</li>
          <li>Mesa de dulces</li>
          <li>Entrada</li>
          <li>Set para fotos</li>
          <li>Decoración con globos del lugar</li>
          <li>Pastel</li>
          <li>Piñatas</li>
          <li>Centros de mesa</li>
          <li>Aguinaldos</li>
          <li>Mobiliario</li>
          <li>Meseros</li>
          <li>Menú</li>
        </ul>
        <p>No dudes en preguntar por nuestros paquetes y precios.</p>
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

const ContentInfo = styled.article`
  padding-top: 4rem;
`;

const Gallery = styled.article`
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  -webkit-column-width: 100%;
  -moz-column-width: 100%;
  column-width: 100%;

  @media screen and (min-width: 768px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media screen and (min-width: 1024px) {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    padding: 0 12px;
  }
`;

const Pics = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;

  img {
    border: 2px solid #000;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      filter: opacity(0.8);
    }
  }
`;

const Modal = styled.div`
  background-color: rgba(34, 34, 34, 0.55);
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 100%;

    i {
      color: #bb1616;
      font-size: 1.5rem;
    }
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
`;

export { BirthdayChildren, ContentInfo, Gallery, Pics, Modal };
