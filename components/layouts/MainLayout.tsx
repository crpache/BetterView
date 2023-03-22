import { Footer } from "../Footer"
import { Header } from "../Header"

type Props = {
  children: React.ReactElement
}

export const MainLayout = ({children} : Props) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header />
      <main className="flex p-5 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}