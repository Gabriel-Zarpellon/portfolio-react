import { IoLogoGithub } from "react-icons/io";
import ProfileImg from "../../assets/ProfileImg.png";
import SkillIcons from "../../assets/SkillIcons.png";
import styles from "./style.module.scss";

export function BannerSection() {
  return (
    <section id="home" className={styles.bannerSection}>
      <div className="container">
        <div className={styles.bannerBox}>
          <div>
            <img src={ProfileImg} alt="Profile Image" />
            <p className="paragraph white">Hello, my name is Anna</p>
          </div>
          <div className={styles.bannerBottom}>
            <h1 className="title one">
              I <span>love</span> creating and <span>developing</span> projects
            </h1>
            <p className="paragraph">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </p>
            <div className={styles.linkBox}>
              <a href="#" className="link white">
                See Projects
              </a>
              <a href="#">
                <IoLogoGithub size={21} />
              </a>
            </div>
          </div>
          <img
            src={SkillIcons}
            alt="Skill Icons"
            className={styles.skillIcons}
          />
        </div>
      </div>
    </section>
  );
}
