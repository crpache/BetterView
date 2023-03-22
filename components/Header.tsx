import { useViewport } from "@/hooks/useViewport"
import { useState } from "react"
import { HamburgerIcon } from "./icons/HamburgerIcon"
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

export const Header = () => {
  const { isDesktop } = useViewport()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (isDesktop) return (
    <header className="flex justify-end w-full px-4 py-3">
      <NavbarDesktop />
    </header>
  )

  if (isMenuOpen) return (
    <NavbarMobile onClose={handleHamburgerClick} />
  )

  return (
    <header className="flex justify-end w-full px-4 py-3">
      <div onClick={handleHamburgerClick} role='button'>
        <HamburgerIcon className="stroke-2" />
      </div>
    </header>
  )
}