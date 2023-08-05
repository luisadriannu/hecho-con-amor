import { ContentMain } from "./PaymentMethods";

const Hiring = () => {
  return (
    <ContentMain>
      <ContentMain className="container section">
        <h2 className="text-center">Contrataciones</h2>
        <p>
          Por medio de un contrato donde especificamos nombre del contratante.
        </p>
        <ul>
          <li>Fecha del contrato</li>
          <li>Lugar del evento</li>
          <li>Fecha del evento</li>
          <li>Temática</li>
          <li>Horario</li>
          <li>Nombre del festejado</li>
          <li>El servicio que estás contratando</li>
          <li>Total del servicio</li>
          <li>Anticipos y restantes.</li>
        </ul>
        <p>
          El cual lo manejamos de esta manera: <b>Anticipo 30%</b> y queda
          reservada tu fecha. <b>20% fecha a acordar</b>, y{" "}
          <b>el resto 50% 2 días antes de tu evento</b>.
        </p>
      </ContentMain>
    </ContentMain>
  );
};

export default Hiring;
