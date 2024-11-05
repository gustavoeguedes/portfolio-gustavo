"use client";
import { NavLink } from "./navLink";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open)
  return (
    <div className='sticky top-0 z-10 backdrop-blur-sm  bg-white/5 h-20 w-full '>
      <div className=" max-w-7xl w-full  pl-4 flex items-center justify-between h-full mx-auto">
        <h1 className="text-white text-3xl font-bold"><a href="https://github.com/gustavoeguedes">Gustavo</a></h1>
        <nav className="z-10 hidden md:block">
          <ul className="flex gap-6">
            <NavLink href="/#greeting" name="Sobre mim" />
            <NavLink href="/" name="Projetos" />
            <NavLink href="/" name="Contato" />
          </ul>
        </nav>
        <button className="p-4 block md:hidden" onClick={() => setOpen(prevValue => !prevValue)}>
        {!open ? <CiMenuFries size={24} color="white" /> : <IoClose size={24} color="white" />}

        </button>
        <nav className={`w-full  absolute left-0 top-20 ${open ? 'block' : 'hidden'} block md:hidden`}>
          <ul className="w-full  bg-slate-950 text-center">
            <li className="">
              <a href="/" className="inline-block w-full p-4">Sobre mim</a>
            </li>
            <li className="">
              <a href="/" className="inline-block w-full p-4">Projetos</a>
            </li>
            <li className="">
              <a href="/" className="inline-block w-full p-4">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
