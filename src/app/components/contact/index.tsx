"use client"
import { Container } from "../container";
import { ButtonContact } from "./buttonContact";
import { use, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Contact() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#contact", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: "#contact",
                start: "top 700px",
                end: "top 300px",
                markers: false,
                scrub: true,
            },
        });
    }, []);
    return(
        <Container>
            <div className="overflow-hidden">
                <div className="min-h-[calc(100dvh-5rem)] flex flex-col justify-center items-center gap-12 opacity-0 translate-x-[-1000px]" id="contact">
                    <h2 className="text-3xl font-bold">Entre em Contato!</h2>
                    <div className="flex gap-4">
                        <ButtonContact contact="Whatsapp" href="https://wa.me/5533984113134" />
                        <ButtonContact contact="Email" href="mailto:seuemail@exemplo.com
" />
                        <ButtonContact contact="Linkedin" href='https://www.linkedin.com/in/gustavo-esteves-guedes' />
                    </div>
                </div>
            </div>
        </Container>
    )
}