import SectionalHeader from "./SectionalHeaders";
import Media from "../public/television-icon.svg"
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from './MediaCarousel.module.scss';
import { SetStateAction, useState } from "react";
import NewsPlaceHolder from '../public/landscape-placeholder-svgrepo-com.svg'
import MediaCoverageOne from '../public/media-coverage-1.jpg'
import MediaCoverageTwo from '../public/media-coverage-2.jpg'
import MediaCoverageThree from '../public/media-coverage-3.jpg'
import MediaCoverageFour from '../public/media-coverage-4.jpg'
import MediaCoverageFive from '../public/media-coverage-5.jpg'
import MediaCoverageSix from '../public/media-coverage-6.jpg'
import MoreNewsOne from '../public/more-news-1.webp'
import MoreNewsTwo from '../public/more-new-2.jpg'
import MoreNewsThree from '../public/more-news-3.jpg'
import MoreNewsFour from '../public/more-new-4.jpg'


const data = [
    {
        image: MediaCoverageOne,
        link: "https://www.youtube.com/watch?v=5UO075HG7rE",
        caption: "Shri Gajendra Singh Shekhawat addresses a press conference in New Delhi",
    },
    {
        image: MediaCoverageTwo,
        link: "https://www.youtube.com/watch?v=7eK1yvm7wjg",
        caption: "BJP Leader Gajendra Singh Shekhawat & Arun Singh Press Conference on Jodhpur Killing",
    },
    {
        image: MediaCoverageThree,
        link: "https://youtube.com/watch?v=FD9NB2VF55M",
        caption: "Rajasthan 'Red Diary' Controversy: Union Minister Gajendra Singh Shekhawat holds Press Conference",
    },
    {
        image: MediaCoverageFour,
        link: "https://youtube.com/watch?v=raiqebLUPys",
        caption: "Gajendra Singh Shekhawat, Union Minister of Jal Shakti EXCLUSIVE on ABP Press Conference",
    },
    {
        image: MediaCoverageFive,
        link: "https://www.youtube.com/watch?v=YgNRFKJWpME",
        caption: "Jal Shakti Min, Gajendra Singh Shekhawat Exclusive On India's Growing Water Crisis",
    },
    {
        image: MediaCoverageSix,
        link: "https://youtube.com/watch?v=fQCxrTXhd1Q",
        caption: "Gajendra Singh Shekhawat का दावा 2023 में कांग्रेस को उखाड़ फेंकेगी BJP",
    },
    {
        image: MoreNewsOne,
        link: "https://timesofindia.indiatimes.com/city/guwahati/every-northeast-household-to-get-piped-water-under-jal-jeevan-mission-by-2024-union-minister-gajendra-singh-shekhawat/articleshow/101557530.cms?from=mdr",
        caption: "Every Northeast household to get piped water under Jal Jeevan Mission by 2024: Union minister Gajendra Singh Shekhawat",
    },
    {
        image: MoreNewsTwo,
        link: "https://www.indiatoday.in/india/story/india-committed-investments-of-over-240-bn-in-water-sector-union-jal-shakti-gajendra-singh-shekhawat-2350743-2023-03-24",
        caption: "India has committed investments of more than $240 billion in the water sector",
    },
    {
        image: MoreNewsThree,
        link: "https://www.thehindu.com/education/namami-gange-signs-agreement-with-49-universities-to-inspire-youth-towards-water-conservation-river-rejuvenation/article66732281.ece",
        caption: "Namami Gange signs agreement with 49 universities to inspire youth towards water conservation, river rejuvenation",
    },
    {
        image: MoreNewsFour,
        link: "https://bestcurrentaffairs.com/union-minister-for-jal-shakti-shri-gajendra-singh-shekhawat-jointly-launches-swachhata-hi-seva-2023-campaign/",
        caption: "Union Minister for Jal Shakti, Shri Gajendra Singh Shekhawat Jointly Launches Swachhata Hi Seva 2023 Campaign",
    }
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
                            <Image src={slide.image} alt="pic-1" className={styles.image} />
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