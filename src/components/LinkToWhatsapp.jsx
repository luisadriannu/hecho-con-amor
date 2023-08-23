import { motion } from "framer-motion";
import { styled } from "styled-components";
import whatsappIcon from "../assets/whatsapp-icon.png";

const LinkToWhatsapp = () => {
  return (
    <LinkWhatsapp>
      <motion.article
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=7671120719"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
        </a>
      </motion.article>
    </LinkWhatsapp>
  );
};

const LinkWhatsapp = styled.div`
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
