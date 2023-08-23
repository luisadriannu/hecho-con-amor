import { useRef, useState } from "react";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { motion } from "framer-motion";
import {
  ContentCards,
  Card,
  TextContentImage,
  Modal,
  ModalContent,
  ContentFlexCard,
  ImageModal,
} from "./LastestNews";

const data = [
  {
    id: 1,
    title: "Set para fotos",
    image: `${GetImageUrl("most-requested-1")}`,
    category: "Set de fotos",
  },
  {
    id: 2,
    title: "Set de fotos con globo",
    image: `${GetImageUrl("most-requested-2")}`,
    category: "Set para fotos",
  },
  {
    id: 3,
    title: "Fiesta infantil hombre araña",
    image: `${GetImageUrl("most-requested-3")}`,
    category: "Cumpleaños infantil",
  },
  {
    id: 4,
    title: "Mesa de honor para novios",
    image: `${GetImageUrl("most-requested-4")}`,
    category: "Romántico",
  },
  {
    id: 5,
    title: "Cena romántica",
    image: `${GetImageUrl("most-requested-5")}`,
    category: "Romántico",
  },
  {
    id: 6,
    title: "Set de fotos para fiestas",
    image: `${GetImageUrl("most-requested-6")}`,
    category: "Set para fotos",
  },
];

const MostRequested = () => {
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
    >
      <article className="container section">
        <h2 className="text-center margin-titles">Lo más solicitado</h2>
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
              <div>
                <h4>{titleCard}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odio, sit accusamus adipisci nobis temporibus, ab ut
                  accusantium cum dignissimos minima sint qui magni rem
                  corrupti! Animi temporibus perferendis error quae.
                  {descriptionCard}
                </p>
              </div>
            </ContentFlexCard>
          </ModalContent>
        </Modal>
      </article>
    </motion.section>
  );
};

export default MostRequested;
