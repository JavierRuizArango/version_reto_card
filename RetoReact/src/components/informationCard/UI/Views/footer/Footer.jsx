import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--items">
        <a target="_blank" href="https://www.instagram.com/spillwayallay"  rel="noreferrer">
          <FaInstagram size='100%' className="footer--icon" />
        </a>
        <a target="_blank" href="https://github.com/JavierRuizArango" rel="noreferrer"  >
          <FaGithub size='100%' className="footer--icon" />
        </a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100078461207514&mibextid=ZbWKwL" rel="noreferrer" >
          <FaFacebook size='100%' className="footer--icon" />
        </a>
      </div>
    </div>
  );
}
