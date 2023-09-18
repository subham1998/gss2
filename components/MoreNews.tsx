import Image from "next/image";
import NewsIcon from '../public/news-icon.svg'
import NewsPlaceHolder from '../public/landscape-placeholder-svgrepo-com.svg'
import styles from './MoreNews.module.scss'
import Link from "next/link";
import SectionalHeader from "./SectionalHeaders";

export default function MoreNews() {
    return <>
        <div className={`mt-4`}>
            <SectionalHeader image={NewsIcon} title="More News" link="/news"></SectionalHeader>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className={`card ${styles.card}`}>
                        <Image className={`card-img-top ${styles['main-news-image']}`} src={NewsPlaceHolder} alt="Card image cap" />
                        <div className={`card-body ${styles['card-body']}`}>
                            <p className={`card-text ${styles['card-text']}`}>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row pb-4">
                        <div className="col-12">
                            <div className={`card ${styles.card}`}>
                                <Image className={`card-img-top ${styles['secondary-news-image']}`} src={NewsPlaceHolder} alt="Card image cap" />
                                <div className={`card-body ${styles['card-body']}`}>
                                    <p className={`card-text ${styles['card-text']}`}>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className={`card ${styles.card}`}>
                                <Image className={`card-img-top ${styles['secondary-news-image']}`} src={NewsPlaceHolder} alt="Card image cap" />
                                <div className={`card-body ${styles['card-body']}`}>
                                    <p className={`card-text ${styles['card-text']}`}>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className={`card ${styles.card}`}>
                                <Image className={`card-img-top ${styles['secondary-news-image']}`} src={NewsPlaceHolder} alt="Card image cap" />
                                <div className={`card-body ${styles['card-body']}`}>
                                    <p className={`card-text ${styles['card-text']}`}>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}