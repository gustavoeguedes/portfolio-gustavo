"use client";
import Image from "next/image";
import { Container } from "../container";
import { StackCard } from "./stackCard";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGitAlt,
  FaGithubAlt,
  FaHtml5,
  FaJs,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiPhp, SiPostgresql, SiPrisma, SiSass, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiComposer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export function About() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".about", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 800px",
        end: "top 500px",
        markers: false,
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf("#about-section");
    };
  }, []);
  return (
    <Container>
      <article
        className="min-h-[calc(100dvh-5rem)] flex flex-col md:flex-row p-4 gap-4 overflow-hidden"
        id="about-section"
      >
        <div className="w-full md:w-1/2 opacity-0 translate-x-[-1000px] about">
          <h2 className="text-center text-2xl font-semibold mb-4">Sobre mim</h2>
          <p>
            Sou estagiário na <a href="https://rkms.com.br/" className="underline">RKM Sistemas</a>, com 24 anos e atualmente cursando o
            4º período de Sistemas de Informação. Estou me especializando em
            tecnologias modernas de desenvolvimento, como Node.js, Express,
            Prisma, React.js e Next.js, com foco em criar soluções eficientes e
            escaláveis.
          </p>
        </div>
        <div className="w-full md:w-1/2 opacity-0 translate-x-[1000px] about ">
          <h2 className="text-center text-2xl font-semibold mb-4">Stacks</h2>
          <div className="flex flex-wrap  gap-2">
            <StackCard name="HTML">
              <FaHtml5 size={24} color="white" />
            </StackCard>
 
            <StackCard name="CSS">
              <FaCss3 size={24} color="white" />
            </StackCard>
            <StackCard name="Javascript">
              <FaJsSquare size={24} color="white" />
            </StackCard>
            <StackCard name="PHP">
            <SiPhp size={24} color="white" />
            </StackCard>
            <StackCard name="NPM">
              <FaNpm size={24} color="white" />
            </StackCard>
            <StackCard name="Composer">
              <DiComposer size={24} color="white" />
            </StackCard>
            <StackCard name="Git">
            <FaGitAlt size={24} color="white" />
            </StackCard>
            <StackCard name="GitHub">
            <FaGithubAlt size={24} color="white" />
            </StackCard>
            <StackCard name="VsCode">
            <VscVscode size={24} color="white" />
            </StackCard>
            <StackCard name="Node.js">
              <FaNodeJs size={24} color="white" />
            </StackCard>
            <StackCard name="Express">
              <SiExpress size={24} color="white" />
            </StackCard>
            <StackCard name="Prisma ORM">
              <SiPrisma size={24} color="white" />
            </StackCard>
            <StackCard name="PostgreSQL">
              <SiPostgresql size={24} color="white" />
            </StackCard>
            <StackCard name="MySQL">
              <GrMysql size={24} color="white" />
            </StackCard>
            <StackCard name="Tailwind">
            <SiTailwindcss size={24} color="white" />
            </StackCard>
            <StackCard name="Bootstrap">
            <FaBootstrap size={24} color="white" />
            </StackCard>
            <StackCard name="Sass">
            <SiSass size={24} color="white" />
            </StackCard>
            <StackCard name="React">
              <FaReact size={24} color="white" />
            </StackCard>
            <StackCard name="Next.js">
              <SiNextdotjs size={24} color="white" />
            </StackCard>
            <StackCard name="Laravel">
            <FaLaravel size={24} color="white" />
            </StackCard>
          </div>
        </div>
      </article>
    </Container>
  );
}
