import About from "./about/page";
import HeroSection from "./components/heroSection";
import Contact from "./contact/page";
import Project from "./project/page";
import "./globals.css";

export default function Home() {
  const img = {
    img: "/./image.jpg",
  };
  return (
    
    <div className="bg-bg mx-auto min-h-screen border-2 border-opacity-5 border-neutral-200">
      <HeroSection />
    
      
      
    
      <div className="pt-20" id="project">
        <Project />
      </div>
      <br /> <br />
      <div className="pt-20" id="about">
        <About />
      </div>
      <br /> <br />
      <div className="pt-20" id="contact">
        <Contact />
      </div>
    </div>
    
  );
}
