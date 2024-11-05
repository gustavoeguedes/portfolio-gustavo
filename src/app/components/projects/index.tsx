"use client";
import { Container } from "../container";
import { CardProject } from "./cardProject";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Projects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#project-card", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 500px",
        end: "top 300px",
        markers: false,
        scrub: true,

      }
    }
  );
    return () => {
      gsap.killTweensOf("#projects");
    };
  }, []);
  return (
    <Container>
      <div className="min-h-[calc(100dvh-5rem)]  flex flex-col justify-center items-center gap-12 " id="projects-section">
        <h2 className="text-3xl font-bold">Projetos</h2>
        <div className="flex w-full flex-wrap justify-center items-center gap-4 max-w-[90%] mx-auto overflow-hidden" id="projects">
            <CardProject/>
            <CardProject/>
            
        </div>
      </div>
    </Container>
  );
}
