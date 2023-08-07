import { styled } from "styled-components";
import ConffetiBackground from "../components/ConfettiBackground";
import { useForm } from "../hooks/useForm";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { AnimatePresence } from "framer-motion";
import "../components/Styles.css";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /^\d{3}-?\d{3}-?\d{4}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.name = "El campo 'Email' es incorrecto";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo 'Teléfono' es requerido.";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "El campo 'Teléfono' es incorrecto.";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido.";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres.";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3445",
};

const Contacto = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
      }}
      exit={{ opacity: 0 }}
    >
      <ConffetiBackground>
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="m-0"
        >
          Contacto
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
        >
          Para cualquier consulta o aclaración sobre nuestros servicios o sobre
          algún tipo de fiesta que le interese, llámanos o envíanos un mensaje,
          nuestro equipo estará encantado de ayudarte.
        </motion.h4>
      </ConffetiBackground>
      <motion.article
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
      >
        <ContentMainContact className="container section">
          <ContactInfo>
            <i className="bi bi-shop"></i>
            <h3>Hecho con amor</h3>
            <p>
              Somos una empresa dedicada a cumplir sueños y hacer de tu evento
              algo inolvidable.
            </p>
            <h5>Wedding Planner</h5>
            <p>
              <b>Dirección:</b> Riva Palacio Mich.
            </p>
            <i className="bi bi-clock icon-contact"></i>
            <p>LUNES-SABADO: 10:00 A.M. - 6:00 P.M.</p>
            <p>
              <b>Teléfono:</b> <a href="tel:7671120719">(+52) 767 112 0719</a>
            </p>
            <i className="bi bi-envelope-fill icon-contact"></i>
            <p>
              <a href="mailto:#######">hechoconamor@gmail.com</a>
            </p>
          </ContactInfo>
          <ContactForm>
            <h3>Tu mensaje</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name"> NOMBRE Y APELLIDOS</label>
              <input
                type="text"
                name="name"
                id="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
                maxLength="50"
              />
              {errors.name && <p style={styles}>{errors.name}</p>}
              <label htmlFor="email"> TU CORREO ELECTRÓNICO</label>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
                maxLength="50"
              />
              {errors.email && <p style={styles}>{errors.email}</p>}
              <label htmlFor="phone"> TELÉFONO</label>
              <input
                type="text"
                name="phone"
                id="phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.phone}
                required
                maxLength="15"
              />
              {errors.phone && <p style={styles}>{errors.phone}</p>}
              <label htmlFor="comments"> TU MENSAJE</label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="10"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                required
                maxLength="255"
              ></textarea>
              {errors.comments && <p style={styles}>{errors.comments}</p>}
              <input type="submit" value="Enviar" />
            </form>
            {loading ? <Loading /> : null}
            <AnimatePresence>{response ? <Message /> : null}</AnimatePresence>
          </ContactForm>
        </ContentMainContact>
      </motion.article>
    </motion.section>
  );
};

const ContactInfo = styled.div`
  text-align: center;
  h3 {
    color: #bb1616;
    margin: 0;
  }

  p {
    margin: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    flex-shrink: 0;
    width: 60%;
  }
`;

const ContentMainContact = styled.div`
  padding: 4rem 20px 4rem 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  }
`;

const ContactForm = styled.div`
  width: 100%;

  input[type="text"],
  input[type="email"],
  textarea {
    border: thin solid rgba(71, 71, 71, 0.224);
    border-radius: 0.25rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
    outline: none;
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
    resize: none;
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    display: block;
    width: 100%;
    border: none;
    border-radius: 0.25rem;
    padding: 1rem 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    background-color: #bb1616;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1;
    text-transform: none;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }

  form {
    margin-bottom: 1rem;
  }

  label {
    padding: 0.5rem 0;
    margin: 0 0 0.5rem 0;
    display: inline-block;
    color: #444;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;

    &::before {
      content: "*";
      color: #bb1616;
    }
  }

  input:focus {
    background-color: #f4f4f4;
  }

  textarea:focus {
    background-color: #f4f4f4;
  }
`;
export default Contacto;
