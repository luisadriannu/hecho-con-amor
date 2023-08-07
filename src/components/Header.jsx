import { useEffect, useRef, useState } from "react";
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
  const [desktop, setDesktop] = useState(false);

  const menu = useRef();
  const modal = useRef();
  const birthdays = useRef();
  const photos = useRef();
  const romantic = useRef();
  const babys = useRef();
  const arrangement = useRef();

  useEffect(() => {
    let breakpoint = window.matchMedia("(min-width: 1024px)");

    const responsive = (e) => {
      if (e.matches) {
        setlistBirthday(true);
        setlistPhotos(true);
        setlistRomantic(true);
        setlistBabys(true);
        setlistArrangements(true);
        setDesktop(true);
      } else {
        setlistBirthday(false);
        setlistPhotos(false);
        setlistRomantic(false);
        setlistBabys(false);
        setlistArrangements(false);
        setDesktop(false);
      }
    };

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);

    return () => {
      window.removeEventListener("change", responsive);
    };
  }, []);

  const toggleMenu = () => {
    menu.current.classList.toggle("toggle-menu");
    modal.current.classList.toggle("active");
  };

  const extendMenu = (e) => {
    if (!desktop) {
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
    } else {
      return;
    }
  };

  const scrollTop = () => {
    window.scrollTo({
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
          <LinkMenu onClick={extendMenu} ref={birthdays}>
            Cumpleaños <i className="bi bi-caret-down-fill"></i>
            {listBirthday ? (
              <ContentListBirthday>
                <NavLink
                  to="/fiesta-infantil"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Intantil
                </NavLink>
                <br />
                <NavLink
                  to="/fiesta-adulto"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Adulto
                </NavLink>
                <br />
                <NavLink
                  to="/fiesta-xv"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● XV Años
                </NavLink>
              </ContentListBirthday>
            ) : null}
          </LinkMenu>
          <LinkMenu onClick={extendMenu} ref={photos}>
            Fotos <i className="bi bi-caret-down-fill"></i>
            {listPhotos ? (
              <ContentListBirthday>
                <NavLink
                  to="/set-para-fotos"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Set de fotos
                </NavLink>
                <br />
                <NavLink
                  to="/graduaciones"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Graduaciones
                </NavLink>
              </ContentListBirthday>
            ) : null}
          </LinkMenu>
          <LinkMenu onClick={extendMenu} ref={romantic}>
            Romántico <i className="bi bi-caret-down-fill"></i>
            {listRomantic ? (
              <ContentListBirthday>
                <NavLink
                  to="/cenas-romanticas"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Cenas románticas
                </NavLink>
                <br />
                <NavLink
                  to="/bodas"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Bodas
                </NavLink>
              </ContentListBirthday>
            ) : null}
          </LinkMenu>
          <LinkMenu onClick={extendMenu} ref={babys}>
            Bebés <i className="bi bi-caret-down-fill"></i>
            {listBabys ? (
              <ContentListBirthday>
                <NavLink
                  to="/baby-showers"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Baby showers
                </NavLink>
                <br />
                <NavLink
                  to="/bautizo"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Bautizos
                </NavLink>
              </ContentListBirthday>
            ) : null}
          </LinkMenu>
          <LinkMenu onClick={extendMenu} ref={arrangement}>
            Arreglos <i className="bi bi-caret-down-fill"></i>
            {listArrangements ? (
              <ContentListBirthday>
                <NavLink
                  to="/centros-de-mesa"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Centros de mesa
                </NavLink>
                <br />
                <NavLink
                  to="/mesas-de-dulces"
                  onClick={() => {
                    toggleMenu();
                    scrollTop();
                  }}
                >
                  ● Mesas de dulces
                </NavLink>
              </ContentListBirthday>
            ) : null}
          </LinkMenu>
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
    position: relative;
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

const LinkMenu = styled.div`
  cursor: pointer;
  &:hover {
    div {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    display: none;
  }
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
  background-color: #fff;
  font-weight: normal;
  padding: 0.5rem 0 0.5rem 1.75rem;

  @media screen and (min-width: 1024px) {
    padding: 0.75rem;
    position: absolute;
    transition: opacity 0.3s ease-in;
    opacity: 0;
    border-radius: 0.25rem;
    pointer-events: none;
  }
`;

export default Header;
