import { styled } from "styled-components";
import { motion } from "framer-motion";

const PaymentMethods = () => {
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
      <ContentMain>
        <ContentInfoPayments className="container section">
          <h2 className="text-center">Formas de pago</h2>

          <h3 className="red-color">Transferencia bancaria</h3>
          <p>
            Al hacer la transferencia, indica claramente tu nombre, apellidos y
            contactame mediante whatsapp para enviarnos tu comprobante. Debes
            realizar el pago de tu anticipo en un plazo máximo de 3 días, si no
            se cancelara el evento y la fecha que apartaste. Normalmente las
            transferencias se reflejan en nuestra cuenta en un plazo de 24-48
            horas. La preparación y realización de su evento/fiesta no se
            realiza hasta que recibamos el pago de anticipo en nuestras cuenta o
            nos envíes el comprobante por <b>whatsapp</b>.
          </p>

          <h3 className="red-color">Efectivo</h3>
          <p>
            Podemos acordar un lugar o bien, visitar la empresa hecho con amor
            en: <b>Morelos Pte., 61992 Vicente Riva Palacio, Mich.</b> para
            realizar tu pago en efectivo.
          </p>

          <h3 className="red-color">Depósito</h3>
          <p>
            Puedes depositar tu anticipo o el pago correspondiente de tu
            fiesta/evento en nuestra cuenta bancaria
          </p>
          <p>Cuenta bancaria:</p>
          <p>
            <b>Edelmira Jaramillo Gonzalez</b> <br />
            <b className="red-color">Banco Azteca</b> <br />
            Número de tarjeta: 4027 6657 7680 3968 <br />
            Número de cuenta: 1575 1337 8237 02
            <br />
            CLABE Interbancaria: 1272 6601 3378 2370 28
          </p>

          <small>
            El anticipo lo manejamos de esta manera: <b>Anticipo 30%</b> y queda
            reservada tu fecha. <b>20% fecha a acordar</b>, y el{" "}
            <b>resto 50% 2 días antes de tu evento</b>.
          </small>
          <br />
          <small className="red-color">
            Estamos para servirte y hacer de tu evento lo que desees.
          </small>
        </ContentInfoPayments>
      </ContentMain>
    </motion.section>
  );
};

const ContentMain = styled.article`
  padding: 4rem 0 4rem 0;
`;
const ContentInfoPayments = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;
export { PaymentMethods, ContentMain };
