import About from "./about/page";
import HeroSection from "./components/heroSection";
import Contact from "./contact/page";
import Project from "./project/page";

export default function Home() {
  const img = {
    img: "/./image.jpg",
  };
  return (
    <div className="bg-bg mx-auto min-h-screen border-2 border-opacity-5 border-neutral-200">
      <HeroSection />
    
      <div className="pt-20">
        <Project />
      </div>
      <br /> <br />
      <div className="pt-20">
        <About />
      </div>
      <br /> <br />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
}
