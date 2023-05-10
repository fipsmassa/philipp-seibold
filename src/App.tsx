import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Footer } from "./components/footer/Footer";
import { Skills } from "./components/skills/Skills";
import { Cv } from "./components/cv/Cv";
import { Projects } from "./components/projects/Projects";
import { Blog } from "./components/blog/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Cv />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
