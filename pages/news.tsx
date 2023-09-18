import Image from 'next/image';
import News1 from '../public/Centre for Sustainable Drinking Water.jpg';
import NewsIcon from '../public/news-icon.svg'
import styles from '../styles/News.module.scss'

export default function News() {
    const news = [
        {
            title: `Union Minister Gajendra Singh inaugurates 'Centre for Sustainable Drinking Water' at IIT Jodhpur`,
            excrept: `Addressing the residents of Jodhpur, Union Minister of Jal Sakthi, Gajendra Singh Shekhawat, said, "I would like to start with appreciating IIT Jodhpur for conceptualising and organising the multisectoral programme UDBHAAS - JAL AUR JEEVAN. IITs continue playing an important role in the overall development of the country, in different domains and in different aspects of life. An approach of critical, analytical and innovative thinking is very important to lead a progressive path."`,
            link: `https://www.indiatoday.in/education-today/news/story/union-minister-gajendra-singh-inaugurates-centre-for-sustainable-drinking-water-at-iit-jodhpur-2004765-2022-09-26`,
            image: News1

        }
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