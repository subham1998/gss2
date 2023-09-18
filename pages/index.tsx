import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import NewsCarousel from '@/components/NewsCarousel'
import MoreNews from '@/components/MoreNews'
import TuneIn from '@/components/TuneIn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <NewsCarousel></NewsCarousel>
        <MoreNews></MoreNews>
        <TuneIn></TuneIn>
      </div>
    </>
  )
}
