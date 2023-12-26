import SectionalHeader from "./SectionalHeaders";
import Media from "../public/television-icon.svg"
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from './MediaCarousel.module.scss';
import { SetStateAction, useState } from "react";
import MediaCoverageOne from '../public/1703591585089.jpg'

const data = [
    {
        image: 'https://img.youtube.com/vi/0-5WfFPPpCY/sddefault.jpg',
        link: "https://www.youtube.com/watch?v=0-5WfFPPpCY",
        caption: "Union Minister Shri Gajendra Singh Shekhawat addresses press conference at 12, Akbar Road, Delhi",
    },
    {
        image: 'https://img.youtube.com/vi/vj3ga9ANi6w/sddefault.jpg',
        link: "https://www.youtube.com/watch?v=vj3ga9ANi6w",
        caption: "BJP will win 400 plus seats in 2024 Lok Sabha elections: Gajendra Singh Shekhawat",
    },
    {
        image: 'https://img.youtube.com/vi/57KCM-hiRqY/sddefault.jpg',
        link: "https://www.youtube.com/watch?v=57KCM-hiRqY",
        caption: "दो दिवसीय Jaisalmer दौरे पर Gajendra Singh Shekhawat",
    },
    {
        image: 'https://img.youtube.com/vi/BOTwM8VOqPw/sddefault.jpg',
        link: "https://www.youtube.com/watch?v=BOTwM8VOqPw",
        caption: "Gajendra Singh Shekhawat का बड़ा दावा, 2024 में मोदी तीसरी बार बनेंगे PM",
    },
    {
        image: MediaCoverageOne,
        link: "https://youtube.com/shorts/1n4JzbB4dFo?si=CBCgrx5VmIMbGALc",
        caption: "Gajendra Singh Shekhawat ने पूर्व प्रधानमंत्री Atal Bihari Vajpayee की जयंती पर पुष्पांजलि की अर्पित",
    },
    {
        image: 'https://img.youtube.com/vi/wuej46gHObw/sddefault.jpg',
        link: "https://www.youtube.com/watch?v=wuej46gHObw",
        caption: "'विकसित भारत संकल्प यात्रा' कार्यक्रम, केंद्रीय मंत्री Gajendra Singh कर रहे शिरकत",
    },
]

export default function MediaCarousel() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    return <>
        <div id="media-coverage-news" className={`my-4`}>
            <SectionalHeader image={Media} link='/news' title="Media Coverage & News" ></SectionalHeader>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false} className='mt-4'>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <Link href={slide.link} target='_blank'>
                            <Image src={slide.image} alt={slide.caption} className={styles.image} width={500}
                                height={500} />
                            <Carousel.Caption className={`text-light ${styles['carousel-caption']}`}>
                                <h3>{slide.caption}</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                )
            })}

        </Carousel >
    </>
}