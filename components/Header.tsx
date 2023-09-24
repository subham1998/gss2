import Link from 'next/link'
import styles from './Header.module.scss'
import Phone from '../public/phone.svg'
import Person from '../public/person-circle.svg'
import Twitter from '../public/twitter-logo.png'
import Image from 'next/image'
import Face from '../public/face.jpg'
import Menu from './Menu'
import { useState } from 'react'

export default function Header() {
    const [menuOpenState, setMenuOpenState] = useState(false);
    const [socialMediamenuOpenState, setSocialMediaMenuOpenState] = useState(false);

    const handleOpenCloseMenu = () => {
        setMenuOpenState((prevValue: boolean) => !prevValue)
    }

    const socialMediaMenuOpen = () => {
        setSocialMediaMenuOpenState((prevValue: boolean) => !prevValue)
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
                        <span>Shekhawat</span>
                    </h1>
                    <h1 className={styles['very-small-screen']}>
                        <span><b>GSS</b></span>
                    </h1>
                </Link>
            </div>
            <div className={styles['header-actions']}>
                <div className={`${styles['social-media-menu']} mb-2 position-relative`}>
                    <Image src={Face} alt="Contact Us" height={32} width={32} className={`rounded-circle ${styles.face}`} onClick={socialMediaMenuOpen}></Image>
                    <ul className={`${styles.menu} position-absolute text-dark ${socialMediamenuOpenState ? styles.open : ''}`}>
                        <li>
                            <Link href="https://www.facebook.com/mpjodhpur/" className={`${styles.facebook} d-inline-block position-relative`} target='_blank'>
                                <i className='fab fa-facebook-f position-absolute'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/gssjodhpur/?hl=en" className={`${styles.instagram} d-inline-block position-relative`} target='_blank'>
                                <i className='fab fa-instagram position-absolute'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/gssjodhpur?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className={`${styles.twitter} d-inline-block position-relative`} target='_blank'>
                                <i className="fa-brands fa-x-twitter position-absolute"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.quora.com/profile/Gajendra-Singh-Shekhawat-6" className={`${styles.quora} d-inline-block position-relative`} target='_blank'>
                                <i className="fa-brands fa-quora position-absolute"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`${styles.whatsapp} d-inline-block position-relative`} target='_blank'>
                                <i className='fab fa-whatsapp position-absolute'></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className={`${styles.live} d-inline-block position-relative`} target='_blank'>
                                <i className="fa-solid fa-tower-broadcast position-absolute"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
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