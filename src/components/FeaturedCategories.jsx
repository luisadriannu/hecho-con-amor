import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Styles.css";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("featured-categorie-1")}`,
    title: "Mesa de dulces, postres y mixtos",
    link: "/mesas-de-dulces",
    color: "#D363A5",
  },
  {
    id: 2,
    image: `${GetImageUrl("featured-categorie-2")}`,
    title: "Set para fotos",
    link: "/set-para-fotos",
    color: "#6C9111",
  },
  {
    id: 3,
    image: `${GetImageUrl("featured-categorie-3")}`,
    title: "Cenas romanticas",
    link: "/cenas-romanticas",
    color: "#da3232",
  },
  {
    id: 4,
    image: `${GetImageUrl("featured-categorie-4")}`,
    title: "Declaraciones",
    link: "/cenas-romanticas",
    color: "#AE2752",
  },
  {
    id: 5,
    image: `${GetImageUrl("featured-categorie-5")}`,
    title: "Bautizo",
    link: "/bautizo",
    color: "#A1674F",
  },
  {
    id: 6,
    image: `${GetImageUrl("featured-categorie-6")}`,
    title: "Centros de mesa",
    link: "/centros-de-mesa",
    color: "#69A0E2",
  },
  {
    id: 7,
    image: `${GetImageUrl("featured-categorie-7")}`,
    title: "Arco de luces",
    link: "/bodas",
    color: "#90663F",
  },
  {
    id: 8,
    image: `${GetImageUrl("featured-categorie-8")}`,
    title: "Fiestas con temática",
    link: "/fiesta-adulto",
    color: "#AE9ECF",
  },
  {
    id: 9,
    image: `${GetImageUrl("featured-categorie-9")}`,
    title: "Postres",
    link: "/mesas-de-dulces",
    color: "#2E784D",
  },
  {
    id: 10,
    image: `${GetImageUrl("featured-categorie-10")}`,
    title: "Set de fotos con flores",
    link: "/set-para-fotos",
    color: "#D59FBF",
  },
  {
    id: 11,
    image: `${GetImageUrl("featured-categorie-11")}`,
    title: "Centros de mesa para todo tipo de fiesta",
    link: "/centros-de-mesa",
    color: "#BE6621",
  },
  {
    id: 12,
    image: `${GetImageUrl("featured-categorie-12")}`,
    title: "Pedidas de mano",
    link: "/cenas-romanticas",
    color: "#AD382E",
  },
];

const FeaturedCategories = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
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
        <h2 className="text-center">Categorías descatadas</h2>
        <ContentGrid>
          {data.map((item, index) => {
            return (
              <ContainerCardImage id={item.id} key={index}>
                <NavLink to={item.link} onClick={scrollTop}>
                  <Image $backgroundimage={item.image} />
                  <TextContentImage $backgroundcolor={item.color}>
                    <h5>{item.title}</h5>
                  </TextContentImage>
                </NavLink>
              </ContainerCardImage>
            );
          })}
        </ContentGrid>
      </article>
    </motion.section>
  );
};

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(279px, 1fr));
  gap: 0.75rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(5, 200px);
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;

  @media screen and (min-width: 1024px) {
    transition: all 0.4s ease-in;

    &:hover {
      transform: scale(1.1);
      filter: blur(2px);
    }
  }
`;

const ContainerCardImage = styled.div`
  overflow: hidden;
  /* border-radius: 0.75rem; */
  border: 2px solid #000;
  position: relative;
  height: 200px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 100%;

    /* Picture 1 */
    grid-column: ${(props) => (props.id === 1 ? "1 / 6" : "")};
    grid-row: ${(props) => (props.id === 1 ? "1 / 3 " : "")};

    /* Picture 2 */
    grid-column: ${(props) => (props.id === 2 ? "6 / 8" : "")};
    grid-row: ${(props) => (props.id === 2 ? "1 / 3 " : "")};

    /* Picture 3 */
    grid-column: ${(props) => (props.id === 3 ? "8 / 10" : "")};
    grid-row: ${(props) => (props.id === 3 ? "1 / 2 " : "")};

    /* Picture 4 */
    grid-column: ${(props) => (props.id === 4 ? "1 / 4" : "")};
    grid-row: ${(props) => (props.id === 4 ? "3 / 4" : "")};

    /* Picture 5 */
    grid-column: ${(props) => (props.id === 5 ? "4 / 8" : "")};
    grid-row: ${(props) => (props.id === 5 ? "3 / 4" : "")};

    /* Picture 6 */
    grid-column: ${(props) => (props.id === 6 ? "8 / 10" : "")};
    grid-row: ${(props) => (props.id === 6 ? "2 / 4" : "")};

    /* Picture 7 */
    grid-column: ${(props) => (props.id === 7 ? "1 / 4" : "")};
    grid-row: ${(props) => (props.id === 7 ? "4 / 5" : "")};

    /* Picture 8 */
    grid-column: ${(props) => (props.id === 8 ? "4 / 7" : "")};
    grid-row: ${(props) => (props.id === 8 ? "4 / 5" : "")};

    /* Picture 9 */
    grid-column: ${(props) => (props.id === 9 ? "7 / 10" : "")};
    grid-row: ${(props) => (props.id === 9 ? "4 / 5" : "")};

    /* Picture 10 */
    grid-column: ${(props) => (props.id === 10 ? "1 / 4" : "")};
    grid-row: ${(props) => (props.id === 10 ? "5 / 6" : "")};

    /* Picture 11 */
    grid-column: ${(props) => (props.id === 11 ? "4 / 7" : "")};
    grid-row: ${(props) => (props.id === 11 ? "5 / 6" : "")};

    /* Picture 12 */
    grid-column: ${(props) => (props.id === 12 ? "7 / 10" : "")};
    grid-row: ${(props) => (props.id === 12 ? "5 / 6" : "")};
  }
`;

const TextContentImage = styled.aside`
  background-color: ${(props) => props.$backgroundcolor || "#fff"};
  padding: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  border: 2px solid #000;
  /* text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.44); */
  /* border-radius: 0.25rem; */
  max-width: 80%;
  pointer-events: none;

  h5 {
    margin: 0;
  }
`;

export default FeaturedCategories;
