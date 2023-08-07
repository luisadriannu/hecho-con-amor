import { styled } from "styled-components";
import Confetti from "../assets/confeti.png";

const ConffetiBackground = ({ children }) => {
  return (
    <Background className="vh-100">
      <Conffeti className="container section">{children}</Conffeti>
    </Background>
  );
};

const Background = styled.article`
  background-image: url(${Confetti});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 4rem 0; */
`;

const Conffeti = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  img {
    width: 80%;
  }
`;
export default ConffetiBackground;
