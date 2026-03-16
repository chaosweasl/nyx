import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SectionDivider from "./components/SectionDivider";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <div className="flex bg-background min-h-screen">
      <CustomCursor />
      <div className="noise-overlay pointer-events-none"></div>
      <div className="grid-overlay pointer-events-none"></div>
      <Sidebar />
      <main className="relative z-10 w-full md:w-[calc(100%-18rem)] md:ml-72 flex flex-col overflow-x-hidden pt-20 md:pt-0">
        <div id="home">
          <Hero />
        </div>
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}

export default App;
