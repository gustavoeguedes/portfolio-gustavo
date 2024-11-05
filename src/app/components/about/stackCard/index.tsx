import React from "react";
import { FaHtml5 } from "react-icons/fa";

export function StackCard({children, name}: {children: React.ReactNode, name: string}) {
    return (
        <div className="flex w-52 flex-[1, 0, auto] gap-2 items-center p-4 border rounded-md hover:scale-105 transition-all">
            <div className="h-6 w-6 ">
            {children}
            </div>
            <h3>{name}</h3>
        </div>
    )
}