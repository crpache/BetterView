import { Footer } from "../Footer"
import { Header } from "../Header"

type Props = {
  children: React.ReactElement
}

export const MainLayout = ({children} : Props) => {
  return (
    <div className="flex flex-col justify-between">
      {/* <Header /> */}
      <main className="flex flex-1 flex-col w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}