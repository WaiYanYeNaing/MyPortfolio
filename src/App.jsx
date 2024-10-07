import About from "./assets/sections/About";
import Contact from "./assets/sections/Contact";
import Experience from "./assets/sections/Experience";
import Footer from "./assets/sections/Footer";
import Hero from "./assets/sections/Hero";
import Navbar from "./assets/sections/Navbar";
import Project from "./assets/sections/Project";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
