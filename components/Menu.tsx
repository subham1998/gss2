import Instagram from '../public/intsagram-logo.png'
import FaceBook from '../public/facebook-logo.png'
import Twitter from '../public/twitter-logo.png'
import Link from "next/link"
import styles from './Menu.module.scss';
import Image from 'next/image'

const menuCategories = [
    {
        label: 'About GSS',
        items: [{ label: "Biography", link: '/biography', target: '_Self' }, { label: "Constituency", link: '#' }, { label: "Jal Jeevan Mission", link: 'https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx' }, { label: "Ministry of Jal Shakti", link: 'https://jalshakti-dowr.gov.in/' }, { label: "Vision", link: '#' }]
    },
    {
        label: 'News',
        items: [{ label: 'News Updates', link: '#' }, { label: 'Media Coverage', link: '#' }, { label: 'Newsletter', link: '#' }, { label: 'Blogs', link: '#' }]
    },
    {
        label: 'Achievements',
        items: [{ label: 'Constituency', link: '#' }, { label: 'Ministry', link: "#" }, { label: 'Work Done in Constituency', link: '#' }]
    },
    {
        label: 'Connect',
        items: [{ label: 'Contribute Thoughts/Opinions', link: '#' }, { label: 'Merchandise', link: '#' }, { label: 'e-greetings', link: '#' }, { label: 'Contact US', link: '#' }, { label: 'Write to GSS', link: '#' }, { label: 'Be Part of GSS Family', link: '#' }]
    },
    {
        label: 'GSS Resources',
        items: [{ label: 'Speeches', link: '#' }, { label: 'Interviews', link: '#' }, { label: 'Resoruces about Jodhpur', link: '#' }, { label: 'Policies', link: '#' }, { label: 'Saurya Arpan', link: '#' }]
    },
    {
        label: 'GSS Library',
        items: [{ label: 'Rajasthani Literature', link: '#' }, { label: 'Books on Marwar', link: '#' }, { label: 'Explore Jodhpur', link: '#' }, { label: 'About Rajasthan', link: '#' }]
    },
    {
        label: 'Categories',
        items: [{ label: 'Water Award', link: '#' }, { label: 'Water Talk', link: '#' }, { label: 'Ted Talks', link: '#' }, { label: 'Water Heroes', link: '#' }]
    }
]

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

export default function Menu({ menuOpen }: { menuOpen: boolean }) {
    return <>
        <div className={`container position-absolute ${menuOpen ? styles['menu-open'] : ''}  ${styles.container}`}>
            <div className={styles["menu-container"]}>
                {menuCategories.map((_category, index) => {
                    return <>
                        <div key={index}>
                            <ul className={`${styles["menu-category"]}`}>
                                <li className={`mb-1 ${styles["title"]}`}>{_category.label}</li>
                                {_category.items.map((_item, i) => {
                                    return <>
                                        <li key={i}>
                                            <Link className={`${styles['menu-item']}`} href={_item.link} target={_item.target || '_blank'}>{_item.label}</Link>
                                        </li>
                                    </>
                                })}
                            </ul>
                        </div>
                    </>
                })}
            </div>
            <div className={`mt-2 ${styles["social-media-icons"]}`}>
                {socialMediaLinks.map((media, index) => {
                    return <Link href={media.link} target='_blank' key={index}>
                        <Image src={media.image} alt={media.name} width={32} height={32} className={styles.icon}></Image>
                    </Link>
                })}
            </div>
        </div>
    </>
}