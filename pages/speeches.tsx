import Image from 'next/image';
import youtube from '../public/youtube-logo-2431.svg'
import SpeechesOne from '../public/speeches-1.jpg'
import SpeechesTwo from '../public/Speeches2.jpg'
import SpeechesThree from '../public/speeches-3.jpg'
import SpeechesFour from '../public/speeches-4.jpg'
import Speech from '../public/microphone-54.svg';
import styles from '../styles/speeches.module.scss'
import Link from 'next/link';

export default function Speeches() {
    const news = [
        {
            title: `सनातन विरोधियों पर गरजे Gajendra Singh Shekhawat | Udhayanidhi Stalin`,
            excrept: `राजस्थान के बाड़मेर में केंद्रीय जल शक्ति मंत्री गजेंद्र सिंह शेखावत ने 5 सितम्बर को सभा को संबोधित करते हुए कहा कि जिस सनातन धर्म को हमारे पूर्वजों ने अपनी जान पर खेलकर बचाए रखा। अब कुछ लोग सनातन धर्म को समाप्त करने की बात कहते हैं, अब हम उनको बर्दाश्त नहीं करेंगे। मैं उन लोगों को कहना चाहता हूं कि जो सनातन के विरोध में बात करेगा। हर शब्द बोलने वाली उस जीभ को हम खींच कर बाहर निकाल देंगे। जो सनातन को तरफ आंख उठाकर देखेगा, उस हरेक आंख को हम उंगली डालकर बाहर निकाल देंगे। गजेंद्रसिंह ने कहा कि हम चुनौती देते हैं सनातन के विरुद्ध बात करने वाला कोई भी व्यक्ति इस देश में जो अपनी राजनीतिक ताकत और हैसियत बनाकर नही रख पाएगा।`,
            link: `https://www.youtube.com/watch?v=sOSKfezVgIk`,
            image: SpeechesOne

        },
        {
            title: `Minister Gajendra Singh Shekhawat's Remarks | Discussion on the working of Ministry of Jal Shakti`,
            excrept: `Rajya Sabha discusses working of Ministry of Jal Shakti`,
            link: `https://www.youtube.com/watch?v=ArcKPQq7EfE`,
            image: SpeechesTwo

        },
        {
            title: `Minister Gajendra Singh Shekhawat Wonderful Speech in front of PM Modi`,
            excrept: ``,
            link: `https://www.youtube.com/watch?v=yOZpzndYefM`,
            image: SpeechesThree

        },
        {
            title: `Address by Gajendra Singh Shekhawat, Jal Shakti Mantri at the launch of #AtalBhoojalMission`,
            excrept: ``,
            link: `https://www.youtube.com/watch?v=kOVNAOKQVh4`,
            image: SpeechesFour

        }
    ]

    return <>
        <div className='container mb-4'>
            <h5 className={`${styles.header}`}>
                <Image src={Speech} alt="speeches" width={32} height={32} />
                <div className={`border-bottom border-2 text-dark ${styles['header-name']}`}>
                    Speeches
                </div>
            </h5>
            {
                news.map((_news, i) => {
                    return (<div className={`row border-bottom p-4 border-3 ${styles['news-row']}`} key={i}>
                        <div className='col-md-4'>
                            <Link href={_news.link} className='position-relative d-inline-block h-100 w-100'>
                                <Image src={_news.image} alt={_news.title} width={300} height={300} className='w-100'></Image>
                                <div className={styles.shadow}></div>
                                <div className={styles.icon}>
                                    <Image src={youtube} alt="youtube" width={64} height={64}></Image>
                                </div>
                            </Link>
                        </div>
                        <div className='col-md-8 text-dark position-relative'>
                            <div className='mb-4 fs-4'>{_news.title}</div>
                            <div className={styles.excrept}>{_news.excrept}</div>
                        </div>
                    </div>)
                })
            }
        </div>
    </>
}