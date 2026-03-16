import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay pointer-events-none"></div>
      <div className="grid-overlay pointer-events-none"></div>
      <Header />
      <main className="relative z-10 w-full overflow-hidden pt-20">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="blog"><Blog /></div>
        <Footer />
      </main>
    </>
  );
}

export default App;
