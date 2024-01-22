import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Info.css";

const Info = () => {
  return (
    <div className="info--container">
      <div className="photo--container">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFg5gVHRmPnxg/profile-displayphoto-shrink_800_800/0/1698974403334?e=2147483647&v=beta&t=cZadtKXqhkEK1ITi8QbU2mfi-TpzkBTxmxfC77SrcPQ"
          alt="Imagen de perfil"
          className="info--image"
        />
      </div>
      <h2 className="name center--text">
        Javier Ruiz
      </h2>

      <span className="skill center--text">
        Backend Developer
        </span>

      <span className="center--text">
        <a
          href="https://youtu.be/FtEYp7x-lI4?si=Nu5hdqa6zgHjFUd8"
          target="_blank"
          rel="noopener noreferrer"
          className="web-link"
        >
          Go to website
        </a>
      </span>

      <div className="contact--buttons">
        <button className="white-button radius-button">
          <a href="https://api.whatsapp.com/send?phone=3017346875&text=Hola, Javier, espero estés muy bien. ¿Me ayudas con algo, por favor?">
            Whatsapp <FaWhatsapp className="icon" />
          </a>
        </button>

        <button className="blue-button radius-button">
          <a href="https://www.linkedin.com/in/javier-ruiz-arango-dev">
            LinkedIn <FaLinkedin className="icon" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Info;
