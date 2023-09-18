import SectionalHeader from "./SectionalHeaders";
import Radio from "../public/radio-svgrepo-com.svg";
import Image from "next/image";
import GSSYoutube from '../public/GSS265.jpg'
import youtube from '../public/youtube-logo-2431.svg'
import styles from './TuneIn.module.scss'
import Link from "next/link";

const articles = [
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    },
    {
        title: 'Article 1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        link: '#'
    }
]

export default function TuneIn() {
    const redirectToArticle = (event: any, link: string) => {
        window.location.href = link
    }

    return (
        <>
            <div className={`my-4`}>
                <SectionalHeader image={Radio} link='#' title="Tune In" ></SectionalHeader>
            </div>
            <div className="row mb-4">
                <div className="col-lg-6 col-md-12 position-relative">
                    <Link href="https://www.youtube.com/@gajendrasinghshekhawat5254" target="_blank">
                        <Image src={GSSYoutube} alt="youtube" className={styles['youtube']} height={600}></Image>
                        <div className={styles.shadow}></div>
                        <div className={styles.icon}>
                            <Image src={youtube} alt="youtube" width={128} height={128}></Image>
                        </div>
                    </Link>
                </div>
                <div className={`col-lg-6 col-md-12 ${styles['articles']}`}>
                    {articles.map((_article, index) => {
                        return (<>
                            <div className="row text-dark" key={index}>
                                <h3>{_article.title}</h3>
                                <p>{_article.description}</p>
                                <div>
                                    <button type="button" className="btn btn-outline-primary float-end" onClick={(event) => redirectToArticle(event, _article.link)}>Read More</button>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </>
    )
}