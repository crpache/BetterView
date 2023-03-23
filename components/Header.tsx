import { useViewport } from "@/hooks/useViewport"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HamburgerIcon } from "./icons/HamburgerIcon"
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

export const Header = () => {
  const { isDesktop } = useViewport()
  const { push } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrollToTop, setIsScrollToTop] = useState(false)  

  useEffect(() => {
    const handler = () => {
      if(document.body.scrollTop > 50) {
        setIsScrollToTop(true)
      } else {
        setIsScrollToTop(false)
      }
    }
    document.body.addEventListener('scroll', handler)
    return () => document.body.removeEventListener('scroll', handler)
  }, [])

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const classDesktop = isScrollToTop ? 
    "flex justify-between items-center w-full px-6 py-3 fixed bg-black duration-300 ease-in-out" : 
    "flex justify-between items-center w-full px-6 py-3 fixed bg-transparent duration-300 ease-in-out"

  const classMobile = isScrollToTop ? 
    "flex justify-between items-center w-full px-4 py-3 bg-black fixed duration-300 ease-in-out" : 
    "flex justify-between items-center w-full px-4 py-3 bg-transparent fixed duration-300 ease-in-out"

  if (isDesktop) return (
    <header className={classDesktop}>
      <h2 className='text-center font-extralight w-fit text-3xl bg-transparent cursor-pointer' onClick={() => push('/')} role='button'>
        Better<span className='font-extrabold bg-transparent'>View</span>
      </h2>
      <NavbarDesktop />
    </header>
  )

  if (!isMenuOpen) return (
    <header className={classMobile}>
      <h2 className='text-center text-2xl font-extralight w-fit bg-transparent' onClick={() => push('/')} role='button'>
        Better<span className='font-extrabold bg-transparent'>View</span>
      </h2>
      <div onClick={handleHamburgerClick} role='button'>
        <HamburgerIcon className="stroke-2" />
      </div>
    </header>
  )

  return (
    <NavbarMobile onClose={handleHamburgerClick} />
  )

}