import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";

const WhySelect = () => {
  return (
    <MainContent className="vh-100">
      <article className="container section">
        <h2 className="text-center">¿Porque elegirnos?</h2>
        <ContentWhySelect>
          <div>
            <h4>
              <i className="bi bi-magic"></i> <br />
              Hacemos tus ideas realidad
            </h4>
            <p>
              Las ideas que tengas en mente las tomamos en cuenta para tus
              sorpresas o fiestas
            </p>
          </div>
          <div>
            <h4>
              <i className="bi bi-star-fill"></i> <br />
              Wedding planner
            </h4>
            <p>
              Te proponemos los lugares para la celebración de tu boda o fiesta
              y ayuda con la búsqueda gestión y contratación de todos los
              proveedores que puedan ser necesarios para organizar tu evento
            </p>
          </div>
          <div>
            <h4>
              <i className="bi bi-gift-fill"></i> <br />
              Temáticas
            </h4>
            <p>Contamos con diversas variedades de temáticas para fiestas</p>
          </div>
        </ContentWhySelect>
      </article>
    </MainContent>
  );
};

const MainContent = styled.section`
  background-image: url(${GetImageUrl("dirt-bg")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentWhySelect = styled.div`
  padding-top: 0.75rem;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;

    gap: 1.5rem;
  }
`;

export default WhySelect;
