import Image from "next/image";
import NewsIcon from '../public/news-icon.svg'
import NewsPlaceHolder from '../public/landscape-placeholder-svgrepo-com.svg'
import MoreNewsOne from '../public/more-news-1.webp'
import MoreNewsTwo from '../public/more-new-2.jpg'
import MoreNewsThree from '../public/more-news-3.jpg'
import MoreNewsFour from '../public/more-new-4.jpg'
import styles from './MoreNews.module.scss'
import SectionalHeader from "./SectionalHeaders";
import Link from "next/link";

export default function MoreNews() {
    return <>
        <div className={`mt-4`}>
            <SectionalHeader image={NewsIcon} title="More News" link="/news"></SectionalHeader>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className={`card ${styles.card}`}>
                        <Link href="https://timesofindia.indiatimes.com/city/guwahati/every-northeast-household-to-get-piped-water-under-jal-jeevan-mission-by-2024-union-minister-gajendra-singh-shekhawat/articleshow/101557530.cms?from=mdr" target="_blank">
                            <Image className={`card-img-top ${styles['main-news-image']}`} src={MoreNewsOne} alt="Every Northeast household to get piped water under Jal Jeevan Mission by 2024" />
                            <div className={`card-body ${styles['card-body']}`}>
                                <p className={`card-text ${styles['card-text']}`}>Every Northeast household to get piped water under Jal Jeevan Mission by 2024: Union minister Gajendra Singh Shekhawat</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row pb-4">
                        <div className="col-12">
                            <div className={`card ${styles.card}`}>
                                <Link href="https://www.indiatoday.in/india/story/india-committed-investments-of-over-240-bn-in-water-sector-union-jal-shakti-gajendra-singh-shekhawat-2350743-2023-03-24" target="_blank">
                                    <Image className={`card-img-top ${styles['secondary-news-image']}`} src={MoreNewsTwo} alt="India has committed investments of more than $240 billion in the water sector" />
                                    <div className={`card-body ${styles['card-body']}`}>
                                        <p className={`card-text ${styles['card-text']}`}>India has committed investments of more than $240 billion in the water sector</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className={`card ${styles.card}`}>
                                <Link href="https://www.thehindu.com/education/namami-gange-signs-agreement-with-49-universities-to-inspire-youth-towards-water-conservation-river-rejuvenation/article66732281.ece" target="_blank">
                                    <Image className={`card-img-top ${styles['secondary-news-image']}`} src={MoreNewsThree} alt="Namami Gange signs agreement with 49 universities to inspire youth towards water conservation, river rejuvenation" />
                                    <div className={`card-body ${styles['card-body']}`}>
                                        <p className={`card-text ${styles['card-text']}`}>Namami Gange signs agreement with 49 universities to inspire youth towards water conservation, river rejuvenation</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className={`card ${styles.card}`}>
                                <Link href="https://bestcurrentaffairs.com/union-minister-for-jal-shakti-shri-gajendra-singh-shekhawat-jointly-launches-swachhata-hi-seva-2023-campaign/">
                                    <Image className={`card-img-top ${styles['secondary-news-image']}`} src={MoreNewsFour} alt="Card image cap" />
                                    <div className={`card-body ${styles['card-body']}`}>
                                        <p className={`card-text ${styles['card-text']}`}>Union Minister for Jal Shakti, Shri Gajendra Singh Shekhawat Jointly Launches Swachhata Hi Seva 2023 Campaign</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}