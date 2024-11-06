"use client";
import { Container } from "../container";
import { CardProject } from "./cardProject";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgGeneratePassword from "../../assets/image-password-generator.png";
import imgGitHubFinder from "../../assets/image-github-finder.png";

export function Projects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#project-card", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 700px",
        end: "top 400px",
        markers: false,
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf("#projects");
    };
  }, []);
  return (
    <Container>
      <section
        className="min-h-[calc(100dvh-5rem)]  flex flex-col justify-center items-center gap-12 "
        id="projects-section"
      >
        <h2 className="text-3xl font-bold">Projetos</h2>
        <div
          className="flex w-full flex-wrap justify-center items-center gap-4 max-w-[90%] mx-auto overflow-hidden"
          id="projects"
        >
          <CardProject
            name="Password Generate"
            img={imgGeneratePassword}
            description="Gerador de senhas seguras feito com next.js, TypeScript e tailwind.css"
            code="https://github.com/gustavoeguedes/generator-password"
            deploy="https://generator-password-xi.vercel.app/"
          />
          <CardProject
            name="GitHub Finder"
            img={imgGitHubFinder}
            description="Sistema de busca de perfis no github feito com next.js, TypeScript e tailwind.css"
            code="https://github.com/gustavoeguedes/github-finder"
            deploy="https://github-finder-murex.vercel.app/"
          />
        </div>
      </section>
    </Container>
  );
}
