import Image from 'next/image'
import { Inter } from 'next/font/google'
import Scenes from '../components/ComputersCanvas'
import Navbar from '../components/Navbar'
import Introduction from '@/components/Introduction'
import Heading from '@/components/Heading'
import Experience from '@/components/Experience'
import Technologies from '@/components/Technologies'
import Contact from '@/components/Contact'
import dynamic from 'next/dynamic'
import Projects from '@/components/Projects'
const StarsCanvas = dynamic(() => import('@/components/StarsCanvas'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen relative px-4 '>
      <Navbar />
      <Heading />
      <Scenes />
      <Introduction />
      <Experience />
      <Technologies />
      <Projects />
      <div className='absolute w-full h-full z-[-10000]' >
        <StarsCanvas />
      </div>
      <Contact />

      <div className='pt-20'></div>
    </div>
  )
}
