import Image from "next/image";
import Link from "next/link";
import styles from './SectionalHeader.module.scss'

export default function SectionalHeader({image, title, link}: {image: any, title: string, link: string}) {
    return <>
      <Link href={link}>
                <h5 className={`${styles.header}`}>
                    <Image src={image} alt="more-news" width={32} height={32} />
                    <div className={`border-bottom border-2 text-dark ${styles['header-name']}`}>
                        {title}
                    </div>
                </h5>
            </Link>      
    </>
}