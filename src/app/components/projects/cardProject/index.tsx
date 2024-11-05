export function CardProject() {
    return(
        <div className="flex flex-col grow-[1] shrink-[1] basis-96 items-center border p-4 rounded-md gap-2 translate-x-[-1000px] even:translate-x-[1000px]" id="project-card">
          <div className=" w-64 h-64 bg-slate-200"></div>
          <h3>Project name</h3>
          <p>Sobre o projeto</p>
          <div className="flex justify-around w-full">
            <p>Deploy</p>
            <p>Code</p>
          </div>
        </div>
    )
}