export function ButtonContact({contact, href}: {contact: string, href : string}) {
    return(
        <a className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-500  font-bold py-2 px-4 rounded cursor-pointer" href={href} target="_blank" rel="noreferrer noopener" >
            {contact}
        </a>
    )
}