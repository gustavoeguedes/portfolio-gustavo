export function NavLinkHamburguerMenu({href, name, setOpen}: {href : string, name : string, setOpen : React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <li className="">
        <a href={href} className="inline-block w-full p-4" onClick={() => setOpen(false)}>{name}</a>
      </li>
    )
}