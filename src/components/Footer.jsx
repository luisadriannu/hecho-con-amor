import { styled } from "styled-components";
import payments from "../assets/payments.png";

const Footer = () => {
  return (
    <footer className="bg-color-footer">
      <article className="container section">
        <Info>
          <BoxFooter>
            <h5>Sobre nosotros</h5>

            <a href="#">Conoce como trabajamos y nuestros servicios</a>
          </BoxFooter>
          <BoxFooter>
            <h5>Así decoramos</h5>
            <a href="#">
              Conoce como manejamos nuestros contratos y contrataciones
            </a>
          </BoxFooter>
          <BoxFooter>
            <h5>Pago seguro</h5>
            <img src={payments} alt="Metodos de pago" />
          </BoxFooter>
        </Info>
        <hr />
        <SocialMedia>
          <div>
            <a
              href="https://www.facebook.com/HechoConAmor.Altamirano"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="bi bi-pinterest"></i>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=7671120719"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </SocialMedia>
        <Phrase>
          <h5>Hecho con amor</h5>
          <small>
            <i>&quot;Porque lo que se hace con amor está bien hecho.&quot;</i>
          </small>
        </Phrase>
      </article>
    </footer>
  );
};

const Info = styled.div`
  h5 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: left;
  }
`;

const BoxFooter = styled.div`
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;

  i {
    font-size: 1.5rem;
  }

  a {
    color: #000;
  }
`;

const Phrase = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  h5 {
    margin: 0 0 5px;
  }
`;

export default Footer;
