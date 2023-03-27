import { Button } from '@/components/Button'
import { MainLayout } from '@/components/layouts/MainLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home = () => {
  const { push } = useRouter()
  return (
    <>
      <Head>
        <title>BetterView</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className='flex flex-col gap-20'>
          <div className='flex flex-col items-start justify-center gap-6 md:gap-9 px-12 md:px-24 pt-[65px] md:pt-60px w-full h-[100svh] topography-bg'>
            <h1 className='text-left font-extrabold w-full bg-transparent'>
              Code your vision,<br/> 
              shape your future
            </h1>
            <h3 className='text-left font-extralight w-[70%] md:w-full bg-transparent'>
              Innovative Web Development for Modern Businesses
            </h3>
            <Button onClick={() => push('/contact')}>
              Start now
            </Button>
          </div>

          <section className='flex flex-col px-12 md:px-24 gap-20 mb-36'>
            <div className='flex flex-col md:flex-row justify-start gap-8'>
              <h2 className='font-extrabold text-left'>Design</h2>
              <p className='leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, similique, autem iusto repellat molestiae aut quidem ipsa dolor corrupti ut eum deleniti accusamus provident eaque exercitationem itaque? Culpa, ipsum blanditiis!</p>
            </div>

            <div className='flex flex-col md:flex-row justify-start gap-8'>
              <h2 className='font-extrabold text-left'>Performance</h2>
              <p className='leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, similique, autem iusto repellat molestiae aut quidem ipsa dolor corrupti ut eum deleniti accusamus provident eaque exercitationem itaque? Culpa, ipsum blanditiis!</p>
            </div>

            <div className='flex flex-col md:flex-row justify-start gap-8'>
              <h2 className='font-extrabold text-left'>Scalability</h2>
              <p className='leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, similique, autem iusto repellat molestiae aut quidem ipsa dolor corrupti ut eum deleniti accusamus provident eaque exercitationem itaque? Culpa, ipsum blanditiis!</p>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  )
}

export default Home
