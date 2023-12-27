import Link from "next/link"
import styles from './Menu.module.scss';

const menuCategories = [
    {
        label: 'About GSS',
        items: [{ label: "Biography", link: '/biography', target: '_Self' }, { label: "Constituency", link: '#' }, { label: "Jal Jeevan Mission", link: 'https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx' }, { label: "Ministry of Jal Shakti", link: 'https://jalshakti-dowr.gov.in/' }, { label: "Vision", link: '#' }]
    },
    {
        label: 'News',
        items: [{ label: 'Media Coverage & News', link: '#media-coverage-news', target: '_self' }, { label: 'Blogs', link: '#' }]
    },
    {
        label: 'Achievements',
        items: [{ label: 'Constituency', link: '#' }, { label: 'Ministry', link: "#" }, { label: 'Work Done in Constituency', link: '/constitutency-work', target: '_Self' }]
    },
    {
        label: 'Connect',
        items: [{ label: 'Contribute Thoughts/Opinions', link: '#' }, { label: 'Write to GSS', link: '/write-to-gss', target: '_self' }, { label: 'Be Part of GSS Family', link: '#' }]
    },
    {
        label: 'GSS Resources',
        items: [{ label: 'Resoruces about Jodhpur', link: '#' }, { label: 'Policies', link: '#' }, { label: 'Saurya Arpan', link: '#' }]
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

export default function Menu({ menuOpen }: { menuOpen: boolean }) {
    return <>
        <div className={`container position-absolute bg-dark bg-gradient ${menuOpen ? styles['menu-open'] : ''}  ${styles.container}`}>
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
        </div>
    </>
}