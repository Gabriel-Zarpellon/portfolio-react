import ProfileImg from "../../assets/ProfileImg.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer className="section-black">
      <div className="container">
        <div className={styles.footerBox}>
          <div>
            <img src={ProfileImg} alt="Profile Image" />
            <div className={styles.textBox}>
              <h3 className="title three">Thank you!</h3>
              <p className="paragraph sm">
                Follow me on my social networks and let's talk
              </p>
            </div>
          </div>

          <div className={styles.iconBox}>
            <a href="#" className={styles.facebook}>
              <FaFacebookF size={18} />
            </a>
            <a href="#" className={styles.instagram}>
              <FaInstagram size={18} />
            </a>
            <a href="#" className={styles.linkedin}>
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
