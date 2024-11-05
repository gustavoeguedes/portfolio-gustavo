"use client";
import Image from "next/image";
import { Container } from "../container";
import { StackCard } from "./stackCard";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCss3, FaHtml5, FaJs, FaJsSquare, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

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
        markers: true,
        scrub: true,
      },
    });
    return () => {
      gsap.killTweensOf("#about-section");
    };
  }, []);
  return (
    <Container>
      <article className="min-h-[calc(100dvh-5rem)] flex p-4 gap-4 overflow-hidden" id="about-section">
        <div className="w-1/2 translate-x-[-1000px] about">
          <h2 className="text-center text-2xl font-semibold mb-4">Sobre mim</h2>
          <p>
            Sou estagiário na RKM Sistemas, com 24 anos e atualmente cursando o
            4º período de Sistemas de Informação. Estou me especializando em
            tecnologias modernas de desenvolvimento, como Node.js, Express,
            Prisma, React.js e Next.js, com foco em criar soluções eficientes e
            escaláveis.
          </p>
        </div>
        <div className="w-1/2 translate-x-[1000px] about ">
          <h2 className="text-center text-2xl font-semibold mb-4">Stacks</h2>
          <div className="flex flex-wrap  gap-2">
          <StackCard name="HTML">
            <FaHtml5 size={24} color="white" />
              </StackCard>
            {/* <StackCard name="CSS"/>
            
            <StackCard name="JavaScript"/>
            <StackCard name="TypeScript"/>
            <StackCard name="React"/>
            <StackCard name="Next.js"/>
            <StackCard name="Node.js"/>
            <StackCard name="Express"/>
            <StackCard name="Prisma"/>
            <StackCard name="SQL"/>
            <StackCard name="Npm"/>
            <StackCard name="Composer"/>
            <StackCard name="PHP"/>
            <StackCard name="Laravel"/> */}
            <StackCard name="CSS">
            <FaCss3 size={24} color="white" />
            </StackCard>
            <StackCard name="Javascript">
            <FaJsSquare size={24} color="white" />
            </StackCard>
            <StackCard name="React">
            <FaReact size={24} color="white" />
            </StackCard>
            <StackCard name="Next.js">
            <SiNextdotjs size={24} color="white" />
            </StackCard>
          </div>
        </div>
      </article>
    </Container>
  );
}
