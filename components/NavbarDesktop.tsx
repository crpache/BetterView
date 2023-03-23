import Link from "next/link"


export const NavbarDesktop = () => {
  return (
    <nav className="bg-transparent">
      <ul className="flex gap-8 w-fit items-center justify-between list-none font-extralight bg-transparent">
        <li className="cursor-pointer bg-transparent">
          <Link href='/'>Home</Link>
        </li>
        <li className="cursor-pointer bg-transparent">
          <Link href='/about'>About</Link>
        </li>
        <li className="cursor-pointer bg-transparent">
          <Link href='/services'>Services</Link>
        </li>
        <li className="cursor-pointer bg-transparent">
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}