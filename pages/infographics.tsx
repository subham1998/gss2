import Image from 'next/image'
import styles from '../styles/infographic.module.scss'
import Infographic from '../public/infographic.svg';
import PipedWaterSupply from '../public/Infographics.png'
import FaceBook from '../public/Facebook_icon.webp';
import Share from '../public/share.svg';
import Link from 'next/link';
import PageHeader from '@/components/PageHeaders';

const infographics = [
    {
        image: PipedWaterSupply,
        caption: 'Piped water supply for Aspirational Districts',
        remoteImageLink: `https://gss2.vercel.app/_next/image?url=%2F_next%2…c%2Fmedia%2FInfographics.f0de314e.png&w=1200&q=75`,
        facebookLink: `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgss2.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%25252%25E2%2580%25A6c%252Fmedia%252FInfographics.f0de314e.png%26w%3D1200%26q%3D75&amp;src=sdkpreparse`
    }
]

const infographicRows = infographics.reduce((rows: any[], key, index) => {
    return (index % 3 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
}, [])

const generateTwitterLink = (caption: string, imageLink: string) => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(caption)}+https://gss2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInfographics.f0de314e.png&w=1200&q=75`
}

export default function Infographics() {
    return <>
        <div className="container mb-4">
            <PageHeader header="Infographics">
                <i className="fa-solid fa-chart-simple"></i>
            </PageHeader>
            <div className='mt-4'>
                {infographicRows.map((row: typeof infographics, index) => {
                    return (<div className='row' key={index}>
                        {row.map((graphic) => {
                            return (<div className={`col-lg-4 col-md-6 col-sm-12 p-4 border border-2 rounded`} key={graphic.caption}>
                                <Image src={graphic.image} alt={graphic.caption} className='w-100 h-auto'></Image>
                                <div className={`${styles.more} mt-4`}>
                                    <div className={`${styles['sm-list']}`}>
                                        <Link href={graphic.facebookLink} className={`${styles.facebook} d-inline-block position-relative`}>
                                            <i className='fab fa-facebook-f position-absolute'></i>
                                        </Link>
                                        {/* <Link href="#" className={`${styles.instagram} d-inline-block position-relative`}>
                                            <i className='fab fa-instagram position-absolute'></i>
                                        </Link>
                                        <Link href="#" className={`${styles.whatsapp} d-inline-block position-relative`}>
                                            <i className='fab fa-whatsapp position-absolute'></i>
                                        </Link> */}
                                        <Link href={generateTwitterLink(graphic.caption, graphic.remoteImageLink)} className={`${styles.twitter} d-inline-block position-relative`}>
                                            <i className="fa-brands fa-x-twitter position-absolute"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>)
                })}
            </div>
        </div>
    </>
}