import { styled } from "styled-components";
import Confetti from "../assets/confeti.png";

const ConffetiBackground = ({ children }) => {
  return (
    <Background className="vh-100">
      <Conffeti className="container section">{children}</Conffeti>
    </Background>
  );
};

const Background = styled.section`
  background-image: url(${Confetti});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Conffeti = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }
`;
export default ConffetiBackground;
