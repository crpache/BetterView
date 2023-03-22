import Link from "next/link"


export const NavbarDesktop = () => {
  return (
    <nav className="px-4">
      <ul className="flex gap-8 w-fit items-center justify-between list-none font-extralight">
        <li className="cursor-pointer">
          <Link href='/'>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href='/about'>About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href='/services'>Services</Link>
        </li>
        <li className="cursor-pointer">
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}