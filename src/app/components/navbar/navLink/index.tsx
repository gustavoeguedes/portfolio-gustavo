import Link from "next/link";
export function NavLink({ href, name }: { href: string; name: string }) {
  return (
    <li>
      <Link
        className="p-4 relative after:absolute after:content-[''] after:inline-block after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-0 hover:after:scale-100 after:transition-all after:duration-500"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
