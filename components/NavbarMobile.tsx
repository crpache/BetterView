import Link from "next/link"
import { CloseIcon } from "./icons/CloseIcon"

type Props = {
  onClose: () => void
}

export const NavbarMobile = ({ onClose } : Props) => {
  return (
    <div className="h-screen w-screen fixed flex flex-col justify-center">
      <div className="w-full flex justify-end self-start p-4" role='button' onClick={onClose}>
        <CloseIcon />
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-12 items-center justify-center list-none text-3xl h-full">
          <li className="">
            <Link href='/'>Home</Link>
          </li>
          <li className="">
            <Link href='/about'>About</Link>
          </li>
          <li className="">
            <Link href='/services'>Services</Link>
          </li>
          <li className="">
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}