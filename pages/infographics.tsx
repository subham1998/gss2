import Image from 'next/image'
import styles from '../styles/infographic.module.scss'
import Infographic from '../public/infographic.svg';
import PipedWaterSupply from '../public/Infographics.png'
import FaceBook from '../public/Facebook_icon.webp';
import Share from '../public/share.svg';
import Link from 'next/link';

const infographics = [
    {
        image: PipedWaterSupply,
        caption: 'Piped water supply for Aspirational Districts'
    }
]

const infographicRows = infographics.reduce((rows: any[], key, index) => {
    return (index % 3 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
}, [])

export default function Infographics() {
    return <>
        <div className="container mb-4">
            <h5 className={`${styles.header}`}>
                <Image src={Infographic} alt="speeches" width={32} height={32} />
                <div className={`border-bottom border-2 text-dark ${styles['header-name']}`}>
                    Infographics
                </div>
            </h5>
            <div className='mt-4'>
                {infographicRows.map((row: typeof infographics, index) => {
                    return (<div className='row' key={index}>
                        {row.map((graphic) => {
                            return (<div className={`col-lg-4 col-md-6 col-sm-12 p-4 border border-2 rounded`} key={graphic.caption}>
                                <Image src={graphic.image} alt={graphic.caption} className='w-100 h-auto'></Image>
                                <div className={`${styles.more} mt-4`}>
                                    {/* <div className='border border-2 border-dark rounded-circle bg-light bg-gradient p-2'>
                                        <Image src={Share} alt="Share" width={24} height={24}></Image>
                                    </div> */}
                                    <div className={`${styles['sm-list']}`}>
                                        <Link href="#" className={`${styles.facebook} d-inline-block position-relative`}>
                                            <i className='fab fa-facebook-f position-absolute'></i>
                                        </Link>
                                        <Link href="#" className={`${styles.instagram} d-inline-block position-relative`}>
                                            <i className='fab fa-instagram position-absolute'></i>
                                        </Link>
                                        <Link href="#" className={`${styles.whatsapp} d-inline-block position-relative`}>
                                            <i className='fab fa-whatsapp position-absolute'></i>
                                        </Link>
                                        <Link href="#" className={`${styles.twitter} d-inline-block position-relative`}>
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