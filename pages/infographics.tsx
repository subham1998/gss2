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
        remoteImageLink: `https://pbs.twimg.com/media/F7LBwcraAAAk7VI?format=jpg&name=900x900`,
        facebookLink: `https://www.facebook.com/sharer/sharer.php?u=https%3A//pbs.twimg.com/media/F7LBwcraAAAk7VI?format=jpg%26name=900x900`,
        whatsappLink: `https://api.whatsapp.com/send?text=Piped water supply for Aspirational Districts%0ahttps://pbs.twimg.com/media/F7LBwcraAAAk7VI?format=jpg&name=900x900`
    }
]

const infographicRows = infographics.reduce((rows: any[], key, index) => {
    return (index % 3 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
}, [])

const generateTwitterLink = (caption: string, imageLink: string) => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(caption)}+${imageLink}`
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
                                        </Link> */}
                                        <Link href={graphic.whatsappLink} className={`${styles.whatsapp} d-inline-block position-relative`}>
                                            <i className='fab fa-whatsapp position-absolute'></i>
                                        </Link>
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