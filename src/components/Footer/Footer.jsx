import "./Footer.css";
import twitterIcon from "../../assets/images/twitter.svg";
import facebookIcon from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a href="#" className="footer-link">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="footer-social">
          <li>
            <a className="footer-socialLink" href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter"></img>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a className="footer-socialLink" href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook"></img>
              <span>Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
