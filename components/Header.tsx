import Link from 'next/link'
import styles from './Header.module.scss'
import Instagram from '../public/intsagram-logo.png'
import FaceBook from '../public/facebook-logo.png'
import Twitter from '../public/twitter-logo.png'
import Image from 'next/image'
import menuOpenIcon from '../public/hamburger.svg'
import Menu from './Menu'
import { useState } from 'react'

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
    const [menuOpenState, setMenuOpenState] = useState(false);

    const handleOpenCloseMenu = () => {
        setMenuOpenState((prevValue: boolean) => !prevValue)
    }


    return (<div className='position-relative'>
        <Menu menuOpen={menuOpenState}></Menu>
        <div className={styles.header}>
        <Link href="/" className={styles.name}>
            <Image src={menuOpenIcon} alt="open-menu" height={40} width={40} onClick={handleOpenCloseMenu}></Image>
            <h1 className={styles['full-name']}>
                <span>Gajendra</span>&nbsp;
                <span>Singh</span>&nbsp;
                <span><b>Shekhawat</b></span>
            </h1>
            <h1 className={styles['very-small-screen']}>
                <span><b>GSS</b></span>
            </h1>
        </Link>
    </div></div>)
}