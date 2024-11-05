"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Container } from "../container";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Greeting() {
  const [text] = useTypewriter({
    words: [
      "React.js",
      "Next.js",
      "Laravel",
      "express.js",
      "Node.js",
      "MySQL",
      "TypeScript",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 3000,
  });
  useLayoutEffect(() => {
    gsap.to("#greeting", {
      x: 0,
      opacity: 1,

    })
    
    return() => {
      gsap.killTweensOf("#greeting")
    }
  
   
  }, [] )
  return (
    <Container>
      <article className="min-h-[calc(100dvh-5rem)] flex p-4 justify-center flex-col opacity-0 translate-x-[-700px]" id="greeting">
        <h3 className="font-semibold text-3xl">Olá!</h3>
        <h2 className="font-bold text-4xl">
          Eu sou Gustavo, Desenvolvedor full-stack.
        </h2>
        <div className="h-12">
          <span className="font-semibold text-3xl">
            {text}
            <Cursor />
          </span>
        </div>

        <a
          href=""
          className="bg-blue-600 hover:bg-blue-600/80 transition-all p-4 rounded-md self-start"
        >
          Baixar cv
        </a>
      </article>
    </Container>
  );
}
