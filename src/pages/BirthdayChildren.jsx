import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { useState } from "react";

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
];

const BirthdayChildren = () => {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <section>
      <Modal className={modal ? "modal active" : "modal"}>
        <button onClick={() => setModal(false)}>
          <i className="bi bi-x-lg"></i>
        </button>
        <img src={imgSrc} />
      </Modal>
      <ContentInfo className="section container">
        <h2 className="text-center">Cumpleaños infaltil</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          voluptatibus ex autem architecto ea expedita iure adipisci dolor
          recusandae? Nesciunt sit quisquam totam odio tempora repellat aliquam,
          delectus culpa fugiat?
        </p>
      </ContentInfo>
      <Gallery className="container section">
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
    border-radius: 0.25rem;
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
    background-color: #e5cccc;
    border: none;
    border-radius: 100%;

    i {
      color: #bb1616;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    width: auto;
    max-width: 90%;
    height: auto;
    max-height: 90%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }
`;

export default BirthdayChildren;
