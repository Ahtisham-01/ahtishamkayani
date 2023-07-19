import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'
const Navbar =dynamic(() => import('@/components/Navbar'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen relative px-4 '>
      <Navbar />
    

      <div className='pt-20'></div>
    </div>
  )
}
