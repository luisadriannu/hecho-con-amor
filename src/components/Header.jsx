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
  // const [stylesInteractive, setStylesInteractive] = useState(false);
  const [btnMenu, setBtnMenu] = useState(false);

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
    setBtnMenu(!btnMenu);
  };

  // const toggleStyle = () => {
  //   setStylesInteractive(!stylesInteractive);
  // };

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
        <button
          onClick={() => {
            toggleMenu();
          }}
        >
          <i className={btnMenu ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>
        <Logo>
          <a href="/">
            <img src={GetImageUrl("logo-hecho-con-amor")} alt="Logo" />
          </a>
        </Logo>
        <Menu ref={menu} className="menu">
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
          </LinkMenu>
          {listBirthday ? (
            <ContentListBirthday>
              <NavLink
                to="/fiesta-infantil"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Intantil</div>
              </NavLink>

              <NavLink
                to="/fiesta-adulto"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Adulto</div>
              </NavLink>
              <NavLink
                to="/fiesta-xv"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● XV Años</div>
              </NavLink>
            </ContentListBirthday>
          ) : null}
          <LinkMenu onClick={extendMenu} ref={photos}>
            Fotos <i className="bi bi-caret-down-fill"></i>
          </LinkMenu>
          {listPhotos ? (
            <ContentListBirthday>
              <NavLink
                to="/set-para-fotos"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Set de fotos</div>
              </NavLink>
              <NavLink
                to="/graduaciones"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Graduaciones</div>
              </NavLink>
            </ContentListBirthday>
          ) : null}
          <LinkMenu onClick={extendMenu} ref={romantic}>
            Romántico <i className="bi bi-caret-down-fill"></i>
          </LinkMenu>
          {listRomantic ? (
            <ContentListBirthday>
              <NavLink
                to="/cenas-romanticas"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Cenas románticas</div>
              </NavLink>
              <NavLink
                to="/bodas"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Bodas</div>
              </NavLink>
            </ContentListBirthday>
          ) : null}
          <LinkMenu onClick={extendMenu} ref={babys}>
            Bebés <i className="bi bi-caret-down-fill"></i>
          </LinkMenu>
          {listBabys ? (
            <ContentListBirthday>
              <NavLink
                to="/baby-showers"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Baby showers</div>
              </NavLink>

              <NavLink
                to="/bautizo"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Bautizos</div>
              </NavLink>
            </ContentListBirthday>
          ) : null}
          <LinkMenu onClick={extendMenu} ref={arrangement}>
            Arreglos <i className="bi bi-caret-down-fill"></i>
          </LinkMenu>
          {listArrangements ? (
            <ContentListBirthday>
              <NavLink
                to="/centros-de-mesa"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Centros de mesa</div>
              </NavLink>

              <NavLink
                to="/mesas-de-dulces"
                onClick={() => {
                  toggleMenu();
                  scrollTop();
                }}
              >
                <div>● Mesas de dulces</div>
              </NavLink>
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

  @media screen and (min-width: 1024px) {
    border-bottom: 2px solid #000;
  }
`;

const HeaderMenu = styled.article`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 62px;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;

  button {
    z-index: 999;
    padding: 0.75rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:active {
      border: 2px dashed #000 !important;
    }

    i {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    border: none;

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
  border-right: 2px solid #000;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  transition: transform 0.3s ease;
  transform: translate(-100%, 0);
  font-weight: bold;
  padding-top: 4rem;

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:active {
      border: 2px dashed #000 !important;
    }
  }

  /* button {
    padding: 0.3rem 0.3rem 0.3rem 0;
    width: 64px;
    height: 59px;
    padding: 0.75rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 2.5rem;
      color: #bb1616;
    }
  } */

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    height: 62px;
    width: 100%;
    transform: translate(0, 0);
    position: static;
    padding-top: 1rem;
    border: none;
  }
`;

const LinkMenu = styled.div`
  cursor: pointer;
  padding: 0.15rem 0;

  &:active {
    border: 2px dashed #000 !important;
  }

  &:hover {
    div {
      opacity: 1;
      pointer-events: auto;
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

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 8rem;
  }
`;

const ContentListBirthday = styled.div`
  background-color: #fff;
  font-weight: normal;
  padding-left: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  &:active {
    border: none;
  }

  div {
    &:active {
      border: none;
    }
  }

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
