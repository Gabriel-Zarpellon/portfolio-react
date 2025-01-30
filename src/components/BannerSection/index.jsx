import { IoLogoGithub } from "react-icons/io";
import ProfileImg from "../../assets/ProfileImg.png";
import SkillIcons from "../../assets/SkillIcons.png";

export function BannerSection() {
  return (
    <section>
      <div>
        <img src={ProfileImg} alt="Profile Image" />
        <p>Hello, my name is Anna</p>
      </div>
      <div>
        <h1>I love creating and developing projects</h1>
        <p>
          Discover here in this environment, created especially for you, all my
          projects and technologies
        </p>
        <div>
          <a href="#">See Projects</a>
          <a href="#">
            <IoLogoGithub size={21} />
          </a>
        </div>
      </div>
      <img src={SkillIcons} alt="Skill Icons" />
    </section>
  );
}
