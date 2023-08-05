import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Styles.css";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";

const Carrusel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>
              Bienvenidos a <br /> hecho con am❤️r
            </h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-1")} alt="Imagen Carrusel 1" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>Agenda tu cita</h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-2")} alt="Imagen Carrusel 2" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>
              Precios <br /> adaptables
            </h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-3")} alt="Imagen Carrusel 3" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>Cumpleaños infantil</h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-4")} alt="Imagen Carrusel 4" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>Cumpleaños para adulto</h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-5")} alt="Imagen Carrusel 5" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>
              Nos adaptamos al <br /> gusto del cliente
            </h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-6")} alt="Imagen Carrusel 6" />
      </SwiperSlide>
      <SwiperSlide>
        <TextImg>
          <div>
            <h2>
              Planeamos la boda <br /> de tus sueños
            </h2>
          </div>
        </TextImg>
        <img src={GetImageUrl("carrusel-7")} alt="Imagen Carrusel 7" />
      </SwiperSlide>
    </Swiper>
  );
};

const TextImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: #00000070;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 80%;
    padding: 0.5rem;
  }

  h2 {
    margin: 0;
  }
`;

export default Carrusel;
