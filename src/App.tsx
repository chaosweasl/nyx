import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay pointer-events-none"></div>
      <div className="grid-overlay pointer-events-none"></div>
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Footer />
      </main>
    </>
  );
}

export default App;
