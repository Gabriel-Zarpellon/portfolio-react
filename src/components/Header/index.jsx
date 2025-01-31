import NameLogo from "../../assets/NameLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import styles from "./style.module.scss";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="section-black">
      <div className="container">
        <div className={styles.headerBox}>
          <img src={NameLogo} alt="Name Logo" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={21} />}
          </button>
          <nav>
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Contato</a>
            <a href="#">Mídias Digitais</a>
          </nav>
        </div>
      </div>
      <nav className={isOpen ? styles.open : styles.close}>
        <a href="#">Home</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
        <a href="#">Mídias Digitais</a>
      </nav>
    </header>
  );
}
