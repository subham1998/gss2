import Link from 'next/link'
import styles from './PageHeader.module.scss'


export default function PageHeader({ header, children }: { header: string, children: any }) {
    return (<h5 className={`${styles.header}`}>
        <div className={`${styles.icon}`}>
            {children}
        </div>
        <div className={`border-bottom border-2 text-dark justify-content-between pe-2 ${styles['header-name']}`}>
            {header}
            <div className={`${styles.icon} ${styles.home}`}>
                <Link href="/">
                    <i className="fa-solid fa-house"></i>
                </Link>
            </div>
        </div>
    </h5>)
}