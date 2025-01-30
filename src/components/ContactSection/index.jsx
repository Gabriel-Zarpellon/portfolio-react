import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  return (
    <section>
      <div>
        <h2>
          Let's set up a conversation and develop our creativity together?
        </h2>
        <p>
          Advertise your brand organically within Dribbble’s design inspiration
          feed.
        </p>
      </div>
      <ul>
        <li>
          <div>
            <FaWhatsapp size={21} />
          </div>
          <div>
            <h4>My phone</h4>
            <p>
              I'm available for a voice chat, let's about creativity together?
            </p>
            <a href="#">Call Now</a>
          </div>
        </li>
        <li>
          <div>
            <HiOutlineMail size={21} />
          </div>
          <div>
            <h4>My email</h4>
            <p>Send me an email reporting feedbacks, suggestions and ideas</p>
            <a href="#">Send Email Now</a>
          </div>
        </li>
        <li>
          <div>
            <FaLinkedin size={21} />
          </div>
          <div>
            <h4>My LinkedIn</h4>
            <p>
              We can create more constant interactions as well as a sharing
              network
            </p>
            <a href="#">Go To LinkedIn Now</a>
          </div>
        </li>
      </ul>
    </section>
  );
}
