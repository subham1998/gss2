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
    }
]

export default function MediaCarousel() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    return <>
        <div className={`my-4`}>
            <SectionalHeader image={Media} link='#' title="Media Coverage" ></SectionalHeader>
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