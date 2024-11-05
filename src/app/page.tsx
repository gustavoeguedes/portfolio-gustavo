import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Greeting } from "./components/greeting";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
export default function Home() {

  return (
    <>
      <Navbar />
      <Greeting/>
      <About />
      <Projects/>
      <Contact />
    </>
  );
}
