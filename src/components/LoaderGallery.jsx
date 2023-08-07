import { styled } from "styled-components";
import "./Styles.css";

const LoaderGallery = () => {
  return (
    <ContentLoader>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContentLoader>
  );
};

const ContentLoader = styled.article`
  text-align: center;
  padding: 4rem 0 4rem 0;
`;
export default LoaderGallery;
