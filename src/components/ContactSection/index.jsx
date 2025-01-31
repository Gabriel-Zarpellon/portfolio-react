import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import styles from "./style.module.scss";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className={styles.contactBox}>
          <div>
            <h2 className="title two">
              Let's set up a conversation and{" "}
              <span>develop our creativity</span> together?
            </h2>
            <p className="paragraph">
              Advertise your brand organically within Dribbble’s design
              inspiration feed.
            </p>
          </div>
          <ul>
            <li>
              <div className={styles.whatsapp}>
                <FaWhatsapp size={21} />
              </div>
              <div>
                <h4 className="title four">My phone</h4>
                <p className="paragraph sm">
                  I'm available for a voice chat, let's be creative
                  together?
                </p>
                <a href="#" className="link sm white">
                  Call Now
                </a>
              </div>
            </li>
            <li>
              <div className={styles.email}>
                <HiOutlineMail size={21} />
              </div>
              <div>
                <h4 className="title four">My email</h4>
                <p className="paragraph sm">
                  Send me an email reporting feedbacks, suggestions and ideas
                </p>
                <a href="#" className="link sm white">
                  Send Email Now
                </a>
              </div>
            </li>
            <li>
              <div className={styles.linkedin}>
                <FaLinkedin size={21} />
              </div>
              <div>
                <h4 className="title four">My LinkedIn</h4>
                <p className="paragraph sm">
                  We can create more constant interactions as well as a sharing
                  network
                </p>
                <a href="#" className="link sm white">
                  Go To LinkedIn Now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
