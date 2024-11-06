import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { GrDeploy } from "react-icons/gr";
import imgGeneratePassword from "../../../assests/image-password-generator.png";

export function CardProject() {
    return(
        <div className="flex flex-col grow-[1] shrink-[1] basis-96 items-center border p-4 rounded-md gap-2 opacity-0 translate-x-[-1000px] even:translate-x-[1000px]" id="project-card">
          <div className=" ">
            <Image
            src={imgGeneratePassword}
            alt="image-password-generator"
            width={256}
            height={256}
            layout="responsive"
            objectFit="cover"
            
            
            />
          </div>
          <h3 className="font-semibold text-2xl">Generator password</h3>
          <p className="">Gerador de senhas seguras feito com next.js, TypeScript e tailwind.css</p>
          <div className="flex justify-around w-full">
            <a href="https://generator-password-xi.vercel.app/" target="_blank" className="border py-4 px-6 group">Deploy <GrDeploy size={24} color="white" className="inline transition-all group-hover:translate-x-2"/></a>
            <a href="https://github.com/gustavoeguedes/generator-password" target="_blank" className="border py-4 px-6 group">Código <FaCode size={24} color="white" className="inline transition-all group-hover:translate-x-2" /></a>
          </div>
        </div>
    )
}