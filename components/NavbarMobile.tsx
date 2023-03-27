import Link from "next/link"
import { useEffect } from "react"
import { CloseIcon } from "./icons/CloseIcon"

type Props = {
  onClose: () => void
}

export const NavbarMobile = ({ onClose } : Props) => {
  /* useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    const html = document.getElementsByTagName('html')[0]
    body.style.setProperty('overflow', 'hidden', 'important')
    html.style.setProperty('overflow', 'hidden', 'important')
    return () => {
      body.style.setProperty('overflow', 'auto', 'important')
      html.style.setProperty('overflow', 'auto', 'important')
    }
  }, []) */

  return (
    <div className="h-[100dvh] w-screen fixed flex flex-col justify-center overscroll-contain">
      <div className="w-full flex justify-end self-start p-4" role='button' onClick={onClose}>
        <CloseIcon />
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-12 items-center justify-center list-none text-3xl h-full">
          <li className="" onClick={onClose}>
            <Link href='/'>Home</Link>
          </li>
          <li className="" onClick={onClose}>
            <Link href='/about'>About</Link>
          </li>
          <li className="" onClick={onClose}>
            <Link href='/services'>Services</Link>
          </li>
          <li className="" onClick={onClose}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}