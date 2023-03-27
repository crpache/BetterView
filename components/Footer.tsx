import AmexIcon from "./icons/AmexIcon"
import MastercardIcon from "./icons/MastercardIcon"
import PaypalIcon from "./icons/PaypalIcon"
import VisaIcon from "./icons/VisaIcon"

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full justify-center items-center p-2">
      <div className="flex gap-4">
        <VisaIcon />
        <MastercardIcon />
        <AmexIcon />
        <PaypalIcon />
      </div>
      <div className="flex flex-col w-full justify-center items-center md:flex-row">
        <p className="text-sm text-gray-300 font-extralight m-0">Copyright © 2023 Better View Tech LLC.</p>
        <p className="text-sm text-gray-300 font-extralight m-0">All rights reserved</p>
      </div>
    </footer>
  )
}