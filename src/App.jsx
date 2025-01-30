import { BannerSection } from "./components/BannerSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectSection } from "./components/ProjectSection";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
