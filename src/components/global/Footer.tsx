import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <footer>
        <div className="content-container flex flex-col text-center justify-center items-center">
          <p>Photography by <a aria-label="Shop photographer's Instagram page." className="underline" href="https://www.instagram.com/chelsea_tornga_photography/">@chelsea_tornga_photography</a></p>
          <p className="mt-2">👇🏽 Talk with us today! 👇🏽</p>

          <div className="links-container flex flex-row justify-between sm:justify-around w-[50%] m-4">
          <a
            href="http://www.instagram.com/rarebreedinkstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rare Breed Ink's Instagram page."
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="http://m.facebook.com/Rarebreedink66/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rare Breed Ink's Facebook page."
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Rarebreedink206@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rare Breed Ink's email address."
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="tel:2533011107" rel="noopener noreferrer"
            aria-label="Rare Breed Ink's shop phone number. Tacoma, Washington area code.">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </div>

        </div>

        <p className="mt-2 text-center text-xs text-default-500">&copy; {new Date().getFullYear()} Rare Breed Ink Tattoo Studio, Tacoma, WA</p>
      </footer>
    );
  };
  
export default Footer;