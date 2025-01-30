import ProfileImg from "../../assets/ProfileImg.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import InstagramIcon from "../../assets/InstagramIcon.png";
import LinkedinIcon from "../../assets/LinkedinIcon.png";

export function Footer() {
  return (
    <footer className="section-black">
      <div className="container">
        <div>
          <img src={ProfileImg} alt="Profile Image" />
          <div>
            <h3 className="title three">Thank you!</h3>
            <p className="paragraph sm">
              Follow me on my social networks and let's talk
            </p>
          </div>
          <div>
            <a href="#">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
