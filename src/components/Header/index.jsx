import NameLogo from "../../assets/NameLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <header className="section-black">
      <div className="container">
        <img src={NameLogo} alt="Name Logo" />
        <button>
          <GiHamburgerMenu size={21} />
        </button>
      </div>
    </header>
  );
}
