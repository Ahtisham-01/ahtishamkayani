import Image from 'next/image'
import { Inter } from 'next/font/google'
import Scenes from '../components/ComputersCanvas'
import Navbar from '../components/Navbar'
import Introduction from '@/components/Introduction'
import Heading from '@/components/Heading'
import Experience from '@/components/Experience'
import Technologies from '@/components/Technologies'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen px-4 '>
      <Navbar /> 
      <Heading/>
      <Scenes />
      <Introduction/>
      <Experience/>
      <Technologies/>
      <div className='pt-20'></div>
    </div>
  )
}
