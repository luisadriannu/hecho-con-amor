import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { useRef, useState } from "react";
import "./Styles.css";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Cena romántica",
    image: `${GetImageUrl("lastest-new-1")}`,
    category: "Romántico",
    description: "",
  },
  {
    id: 2,
    title: "Set de fotos de cumpleaños",
    image: `${GetImageUrl("lastest-new-2")}`,
    category: "Set de fotos",
    description: "",
  },
  {
    id: 3,
    title: "Decoración para novios",
    image: `${GetImageUrl("lastest-new-3")}`,
    category: "Romántico",
    description: "",
  },
  {
    id: 4,
    title: "Mesa de honor para novios",
    image: `${GetImageUrl("lastest-new-4")}`,
    category: "Romántico",
    description: "",
  },
  {
    id: 5,
    title: "Set de fotos de cumpleaños",
    image: `${GetImageUrl("lastest-new-5")}`,
    category: "Set de fotos",
    description: "",
  },
  {
    id: 6,
    title: "Set de fotos de cumpleaños",
    image: `${GetImageUrl("lastest-new-6")}`,
    category: "Set de fotos",
    description: "",
  },
];

const LastestNews = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [titleCard, setTitleCard] = useState("");
  const [descriptionCard, setDescriptionCard] = useState("");

  const modal = useRef();

  const getInfo = (imgSrc, title, description) => {
    setImgSrc(imgSrc);
    setTitleCard(title);
    setDescriptionCard(description);
  };

  const toggleModalInfo = () => {
    modal.current.classList.toggle("active");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className="pb-1"
    >
      <article className="section container">
        <h2 className="text-center">Últimas novedades</h2>
        <ContentCards>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                $backgroundimage={item.image}
                onClick={() => {
                  toggleModalInfo();
                  getInfo(item.image, item.title, item.description);
                }}
              >
                <TextContentImage>
                  <small>
                    <b>Categoría: {item.category}</b>
                  </small>
                  <h4>{item.title}</h4>
                </TextContentImage>
              </Card>
            );
          })}
        </ContentCards>

        <Modal className="modal" ref={modal}>
          <ModalContent>
            <button onClick={toggleModalInfo}>
              <i className="bi bi-x-lg"></i>
            </button>
            <ContentFlexCard>
              <ImageModal $backgroundImage={imgSrc} alt="Imagen" />
              <BoxInfo>
                <h4>{titleCard}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odio, sit accusamus adipisci nobis temporibus, ab ut
                  accusantium cum dignissimos minima sint qui magni rem
                  corrupti! Animi temporibus perferendis error quae.
                  {descriptionCard}
                </p>
              </BoxInfo>
            </ContentFlexCard>
          </ModalContent>
        </Modal>
      </article>
    </motion.section>
  );
};

const ContentCards = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  gap: 1rem;
`;

const Card = styled.article`
  background-image: url(${(props) => props.$backgroundimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid #000;
  position: relative;
  min-height: 412px;
  cursor: pointer;
`;

const TextContentImage = styled.div`
  position: absolute;
  color: #fff;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.44);
  top: 1rem;
  left: 1rem;

  h4 {
    margin: 0;
  }
`;

const Modal = styled.div`
  background-color: rgba(34, 34, 34, 0.55);
  z-index: 999;
  position: fixed;
  z-index: 998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 90%;
  border: 2px solid #000;
  position: relative;

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 100%;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.37);

    i {
      color: #bb1616;
      font-size: 1.5rem;
    }
  }

  h4,
  p {
    margin: 0.5rem 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 800px;
  }
`;

const ImageModal = styled.div`
  background-image: url(${(props) => props.$backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid #000;
  height: 368px;
  width: 100%;
`;

const BoxInfo = styled.div`
  padding: 1rem 0;
`;

const ContentFlexCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    gap: 1rem;

    div {
      width: 90%;
    }
  }
`;

export {
  LastestNews,
  ContentCards,
  Card,
  TextContentImage,
  Modal,
  ModalContent,
  ContentFlexCard,
  ImageModal,
};
