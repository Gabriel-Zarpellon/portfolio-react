import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="title two">
            Let's set up a conversation and <span>develop our creativity</span>{" "}
            together?
          </h2>
          <p className="paragraph">
            Advertise your brand organically within Dribbble’s design
            inspiration feed.
          </p>
        </div>
        <ul>
          <li>
            <div>
              <FaWhatsapp size={21} />
            </div>
            <div>
              <h4 className="title four">My phone</h4>
              <p className="paragraph sm">
                I'm available for a voice chat, let's about creativity together?
              </p>
              <a href="#" className="link sm white">
                Call Now
              </a>
            </div>
          </li>
          <li>
            <div>
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
            <div>
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
    </section>
  );
}
