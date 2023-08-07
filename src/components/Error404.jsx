import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "./Styles.css";

const Error404 = () => {
  return (
    <ContentError className="vh-100">
      <article className="section container">
        <h2>
          <i className="bi bi-box2-heart-fill"></i> <br />
          Error, no se ha podido encontrar esta sección :(
        </h2>
        <br />
        <NavLink to="/">
          <i className="bi bi-box-arrow-left"></i> Volver a inicio
        </NavLink>
      </article>
    </ContentError>
  );
};

const ContentError = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: #bb1616;
    font-weight: bolder;
  }
`;

export default Error404;
