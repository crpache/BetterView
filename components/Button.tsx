type Props = {
  onClick: () => void
  children: string
}

export const Button = ({
  onClick, 
  children
} : Props) => {

  return (
    <button 
      className="border border-solid border-white px-4 py-2 md:px-6 md:py-3 rounded font-semibold text-base md:text-xl bg-white text-black hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  )
}