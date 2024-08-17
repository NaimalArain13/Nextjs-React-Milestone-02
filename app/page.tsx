import About from "./about/page";
import HeroSection from "./components/heroSection";
import Contact from "./contact/page";
import Project from "./project/page";
import "./globals.css";

export default function Home() {
  // const img = {
  //   img: "/image.jpg",
  // };
  return (
    <div className="bg-bg border-2 border-opacity-5 border-neutral-200">
      <HeroSection />
      <div id="project">
        <Project />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
