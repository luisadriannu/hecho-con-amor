import { useRef, useState } from "react";
import { styled } from "styled-components";
import { GetImageUrl } from "../helpers/GetImageUrl";
import "./Styles.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [listBirthday, setlistBirthday] = useState(false);
  const [listPhotos, setlistPhotos] = useState(false);
  const [listRomantic, setlistRomantic] = useState(false);
  const [listBabys, setlistBabys] = useState(false);
  const [listArrangements, setlistArrangements] = useState(false);

  const menu = useRef();
  const modal = useRef();
  const birthdays = useRef();
  const photos = useRef();
  const romantic = useRef();
  const babys = useRef();
  const arrangement = useRef();

  const toggleMenu = () => {
    menu.current.classList.toggle("toggle-menu");
    modal.current.classList.toggle("active");
  };

  const extendMenu = (e) => {
    if (e.target === birthdays.current) {
      setlistBirthday(!listBirthday);
    }

    if (e.target === photos.current) {
      setlistPhotos(!listPhotos);
    }

    if (e.target === romantic.current) {
      setlistRomantic(!listRomantic);
    }

    if (e.target === babys.current) {
      setlistBabys(!listBabys);
    }

    if (e.target === arrangement.current) {
      setlistArrangements(!listArrangements);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <HeaderMain>
      <HeaderMenu className="container">
        <button onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
        <Logo>
          <a href="/">
            <img src={GetImageUrl("logo-hecho-con-amor")} alt="Logo" />
          </a>
        </Logo>
        <Menu ref={menu} className="menu">
          <button onClick={toggleMenu}>
            <i className="bi bi-x-lg"></i>
          </button>
          <NavLink
            to="/"
            onClick={() => {
              toggleMenu();
              scrollTop();
            }}
          >
            Inicio
          </NavLink>
          <a onClick={extendMenu} ref={birthdays}>
            Cumpleaños <i className="bi bi-caret-down-fill"></i>
          </a>
          {listBirthday ? (
            <ContentListBirthday>
              <ul>
                <NavLink
                  to="/fiesta-infantil"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  Intantil
                </NavLink>
                <li> Adulto</li>
              </ul>
            </ContentListBirthday>
          ) : null}
          <a onClick={extendMenu} ref={photos}>
            Fotos <i className="bi bi-caret-down-fill"></i>
          </a>
          {listPhotos ? (
            <ContentListBirthday>
              <ul>
                <li> Set de fotos</li>
                <li> Graduaciones</li>
              </ul>
            </ContentListBirthday>
          ) : null}
          <a onClick={extendMenu} ref={romantic}>
            Romántico <i className="bi bi-caret-down-fill"></i>
          </a>
          {listRomantic ? (
            <ContentListBirthday>
              <ul>
                <li>Cenas románticas</li>
                <li>Bodas</li>
              </ul>
            </ContentListBirthday>
          ) : null}
          <a onClick={extendMenu} ref={babys}>
            Bebés <i className="bi bi-caret-down-fill"></i>
          </a>
          {listBabys ? (
            <ContentListBirthday>
              <ul>
                <li>Baby showers</li>
              </ul>
            </ContentListBirthday>
          ) : null}
          <a onClick={extendMenu} ref={arrangement}>
            Arreglos <i className="bi bi-caret-down-fill"></i>
          </a>
          {listArrangements ? (
            <ContentListBirthday>
              <ul>
                <li>Centros de mesa</li>
                <li>Mesas de dulces</li>
              </ul>
            </ContentListBirthday>
          ) : null}
          <NavLink
            to="/contacto"
            onClick={() => {
              toggleMenu();
              scrollTop();
            }}
          >
            Contacto
          </NavLink>
        </Menu>
        <Modal onClick={toggleMenu} ref={modal} className="modal" />
      </HeaderMenu>
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  background-color: #fff;
  position: fixed;
  z-index: 997;
  width: 100%;
`;

const HeaderMenu = styled.article`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 62px;
  top: 0;
  display: flex;
  justify-content: space-between;

  button {
    padding: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    i {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    position: static;
    /* flex-direction: row-reverse; */
    button {
      display: none;
    }
  }
`;

const Menu = styled.article`
  z-index: 997;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  transition: transform 0.3s ease;
  transform: translate(-100%, 0);
  font-weight: bold;

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  button {
    padding: 0.3rem 0.3rem 0.3rem 0;
    background-color: transparent;
    width: 50px;
    border: none;
    cursor: pointer;

    i {
      font-size: 1.5rem;
      color: #bb1616;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    height: 62px;
    width: 100%;
    transform: translate(0, 0);
    position: static;

    button {
      display: none;
    }
  }
`;

const Modal = styled.article`
  background-color: rgba(34, 34, 34, 0.55);
  position: fixed;
  z-index: 995;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 8rem;
  }
`;

const ContentListBirthday = styled.div`
  ul {
    margin: 0;
    font-weight: normal;
  }
`;

export default Header;
