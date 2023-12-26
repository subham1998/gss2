import Image from 'next/image';
import News1 from '../public/Centre for Sustainable Drinking Water.jpg';
import NewsIcon from '../public/news-icon.svg'
import styles from '../styles/News.module.scss'
import MoreNewsOne from '../public/more-news-1.webp'
import MoreNewsTwo from '../public/more-new-2.jpg'
import MoreNewsThree from '../public/more-news-3.jpg'
import MoreNewsFour from '../public/more-new-4.jpg'

export default function News() {
    const news = [
        {
            title: `Union Minister Gajendra Singh inaugurates 'Centre for Sustainable Drinking Water' at IIT Jodhpur`,
            excrept: `Addressing the residents of Jodhpur, Union Minister of Jal Sakthi, Gajendra Singh Shekhawat, said, "I would like to start with appreciating IIT Jodhpur for conceptualising and organising the multisectoral programme UDBHAAS - JAL AUR JEEVAN. IITs continue playing an important role in the overall development of the country, in different domains and in different aspects of life. An approach of critical, analytical and innovative thinking is very important to lead a progressive path."`,
            link: `https://www.indiatoday.in/education-today/news/story/union-minister-gajendra-singh-inaugurates-centre-for-sustainable-drinking-water-at-iit-jodhpur-2004765-2022-09-26`,
            image: News1

        },
        {
            image: MoreNewsOne,
            excrept: `Despite lagging behind states, which have completed the target of supplying piped water to every household, Union Jal Shakti minister Gajendra Singh Shekhawat said the northeastern states have made significant progress in respect of the Jal Jeevan Mission (JJM) implementation. He hoped that most NE states will achieve the goal by 2024.`,
            link: "https://timesofindia.indiatimes.com/city/guwahati/every-northeast-household-to-get-piped-water-under-jal-jeevan-mission-by-2024-union-minister-gajendra-singh-shekhawat/articleshow/101557530.cms?from=mdr",
            title: "Every Northeast household to get piped water under Jal Jeevan Mission by 2024: Union minister Gajendra Singh Shekhawat",
        },
        {
            image: MoreNewsTwo,
            link: "https://www.indiatoday.in/india/story/india-committed-investments-of-over-240-bn-in-water-sector-union-jal-shakti-gajendra-singh-shekhawat-2350743-2023-03-24",
            title: "India has committed investments of more than $240 billion in the water sector",
            excrept: 'Union Jal Shakti Minister Gajendra Singh Shekhawat has said India has committed investments of more than 240 billion dollars in the water sector.'
        },
        {
            image: MoreNewsThree,
            link: "https://www.thehindu.com/education/namami-gange-signs-agreement-with-49-universities-to-inspire-youth-towards-water-conservation-river-rejuvenation/article66732281.ece",
            excrept: 'Namami Gange signs agreement with 49 universities to inspire youth towards water conservation, river rejuvenation.The MoU aims to bring the student community to the forefront of the mass movement for creating a sustainable ecosystem of the river',
            title: "Namami Gange signs agreement with 49 universities to inspire youth towards water conservation, river rejuvenation",
        },
        {
            image: MoreNewsFour,
            link: "https://bestcurrentaffairs.com/union-minister-for-jal-shakti-shri-gajendra-singh-shekhawat-jointly-launches-swachhata-hi-seva-2023-campaign/",
            title: "Union Minister for Jal Shakti, Shri Gajendra Singh Shekhawat Jointly Launches Swachhata Hi Seva 2023 Campaign",
        },
    ]

    const redirectToNews = (event: any, link: string) => {
        window.location.href = link
    }

    return <>
        <div className='container'>
            <h5 className={`${styles.header}`}>
                <Image src={NewsIcon} alt="more-news" width={32} height={32} />
                <div className={`border-bottom border-2 text-dark ${styles['header-name']}`}>
                    News
                </div>
            </h5>
            {
                news.map((_news, i) => {
                    return (<div className={`row border-bottom pb-4 border-3 ${styles['news-row']}`} key={i}>
                        <div className='col-md-2'>
                            <Image src={_news.image} alt={_news.title} width={200} height={200}></Image>
                        </div>
                        <div className='col-md-10 text-dark'>
                            <div className='mb-4 fs-4'>{_news.title}</div>
                            <div className={styles.excrept}>{_news.excrept}</div>
                            <div>
                                <button type="button" className="btn btn-outline-primary float-end" onClick={(event) => redirectToNews(event, _news.link)}>Read More</button>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    </>
}