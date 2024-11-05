import { Container } from "../container";
import { ButtonContact } from "./buttonContact";

export function Contact() {
    
    return(
        <Container>
            <div className="min-h-[calc(100dvh-5rem)] flex flex-col justify-center items-center gap-12">
                <h2 className="text-3xl font-bold">Entre em Contato!</h2>
                <div className="flex gap-4">
                    <ButtonContact contact="Whatsapp" />
                    <ButtonContact contact="Email" />
                    <ButtonContact contact="Linkedin" />
                </div>
            </div>
        </Container>
    )
}