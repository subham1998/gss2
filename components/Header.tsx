import Link from 'next/link'
import styles from './Header.module.scss'
import Instagram from '../public/intsagram-logo.png'
import FaceBook from '../public/facebook-logo.png'
import Twitter from '../public/twitter-logo.png'
import Image from 'next/image'
import face from '../public/face.jpg'

const socialMediaLinks = [
    {
        name: 'instagram',
        image: Instagram,
        link: "https://www.instagram.com/gssjodhpur/?hl=en" 
    },
    {
        name: 'facebook',
        image: FaceBook,
        link: 'https://www.facebook.com/mpjodhpur/'
    },
    {
        name: 'X',
        image: Twitter,
        link: 'https://twitter.com/gssjodhpur?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
    }
]

export default function Header() {
    return <div className={styles.header}>
        <Link href="/" className={styles.name}>
            <Image src={face} alt="Gajendra Singh Shekhawat" height={40} width={40} className={styles.face}></Image>
            <h1 className={styles['full-name']}>
                <span>Gajendra</span>&nbsp;
                <span>Singh</span>&nbsp;
                <span><b>Shekhawat</b></span>
            </h1>
            <h1 className={styles['very-small-screen']}>
                <span><b>GSS</b></span>
            </h1>
        </Link>
        <div className={`mb-2 ${styles['social-media']}`}>
            {socialMediaLinks.map((media, index) => {
                return <Link href={media.link} target='_blank' key={index}>
                <Image src={media.image} alt={media.name} width={32} height={32} className={styles.icon}></Image>
            </Link>
            })}
        </div>
    </div>
}