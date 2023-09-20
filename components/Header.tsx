import Link from 'next/link'
import styles from './Header.module.scss'
import Phone from '../public/phone.svg'
import Person from '../public/person-circle.svg'
import Twitter from '../public/twitter-logo.png'
import Image from 'next/image'
import menuOpenIcon from '../public/hamburger.svg'
import Menu from './Menu'
import { useState } from 'react'

export default function Header() {
    const [menuOpenState, setMenuOpenState] = useState(false);

    const handleOpenCloseMenu = () => {
        setMenuOpenState((prevValue: boolean) => !prevValue)
    }


    return (<div className='position-relative'>
        <Menu menuOpen={menuOpenState}></Menu>
        <div className={styles.header}>
            <div className='d-flex align-items-center'>
                <div className={`${styles["nav-icon"]} ${menuOpenState ? styles.open : ''}`} onClick={handleOpenCloseMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Link href="/" className={styles.name}>
                    {/* <Image src={menuOpenIcon} alt="open-menu" height={40} width={40} onClick={handleOpenCloseMenu}></Image> */}
                    <h1 className={styles['full-name']}>
                        <span>Gajendra</span>&nbsp;
                        <span>Singh</span>&nbsp;
                        <span><b>Shekhawat</b></span>
                    </h1>
                    <h1 className={styles['very-small-screen']}>
                        <span><b>GSS</b></span>
                    </h1>
                </Link>
            </div>
            <div className={styles['header-actions']}>
                <Link href="#" className={`d-flex text-dark mb-2 ${styles['download-app']}`}>
                    <span>Download App</span>
                    <Image src={Phone} alt="Download App" width={24} height={24}></Image>
                </Link>
                <Link href="#" className={`d-flex text-dark mb-2 ${styles['login-signup']}`}>
                    <span>Login/Sign Up</span>
                    <Image src={Person} alt="Login/SIgnup" width={24} height={24}></Image>
                </Link>
            </div>
        </div>
    </div>)
}