import { styled } from "styled-components";
import whatsappIcon from "../assets/whatsapp-icon.png";

const LinkToWhatsapp = () => {
  return (
    <LinkWhatsapp>
      <a
        href="https://api.whatsapp.com/send?phone=7671120719"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsappIcon} alt="Whatsapp" />
      </a>
    </LinkWhatsapp>
  );
};

const LinkWhatsapp = styled.article`
  width: 50px;
  height: 50px;
  z-index: 996;
  position: fixed;
  bottom: 1rem;
  left: 1rem;

  img {
    border-radius: 100%;
  }
`;

export default LinkToWhatsapp;
