import { FaCode } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { GrDeploy } from "react-icons/gr";


export function CardProject({name, description, img, code, deploy}: {name : string, description : string ,img : StaticImageData, code :string, deploy : string} ) {
    return(
        <div className="flex flex-col grow-[1] shrink-[1] basis-96 items-center border p-4 rounded-md gap-2 opacity-0 translate-x-[-1000px] even:translate-x-[1000px]" id="project-card">
          <div className=" ">
            <Image
            src={img}
            alt={name}
            width={256}
            height={256}
            layout="responsive"
            objectFit="cover"
            
            
            />
          </div>
          <h3 className="font-semibold text-2xl">{name}</h3>
          <p className="">{description}</p>
          <div className="flex justify-around w-full">
            <a href={deploy} target="_blank" className="border py-4 px-6 group">Deploy <GrDeploy size={24} color="white" className="inline transition-all group-hover:translate-x-2"/></a>
            <a href={code} target="_blank" className="border py-4 px-6 group">Código <FaCode size={24} color="white" className="inline transition-all group-hover:translate-x-2" /></a>
          </div>
        </div>
    )
}