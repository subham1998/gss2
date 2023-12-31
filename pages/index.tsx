import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import NewsCarousel from '@/components/NewsCarousel'
import MoreNews from '@/components/MoreNews'
import TuneIn from '@/components/TuneIn'
import MediaCarousel from '@/components/MediaCarousel'
import Actions from '@/components/Actions'
import ArticleCarousel from '@/components/Articles'
import ConstituencyWork from '@/components/ConstituencyWork'
import Summits from '@/components/Summits'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <NewsCarousel></NewsCarousel>
        {/* <MoreNews></MoreNews> */}
        <MediaCarousel></MediaCarousel>
        <Actions></Actions>
        <ArticleCarousel></ArticleCarousel>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <ConstituencyWork></ConstituencyWork>
          </div>
          <div className='col-lg-6 col-md-12'>
            <Summits></Summits>
          </div>
        </div>
      </div>
    </>
  )
}
