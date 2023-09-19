import SectionalHeader from "./SectionalHeaders";
import Global from "../public/earth.svg"
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from './MediaCarousel.module.scss';
import { SetStateAction, useState } from "react";
import NewsPlaceHolder from '../public/landscape-placeholder-svgrepo-com.svg'

const data = [
    {
        image: NewsPlaceHolder,
        link: "#",
        caption: "Some Caption",
        description: "Some Description"
    },
    {
        image: NewsPlaceHolder,
        link: "#",
        caption: "Some Caption",
        description: "Some Description"
    },
    {
        image: NewsPlaceHolder,
        link: "#",
        caption: "Some Caption",
        description: "Some Description"
    },
    {
        image: NewsPlaceHolder,
        link: "#",
        caption: "Some Caption",
        description: "Some Description"
    },
    {
        image: NewsPlaceHolder,
        link: "#",
        caption: "Some Caption",
        description: "Some Description"
    }
]

export default function GlobalRecognition() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    return <>
        <div className={`my-4`}>
            <SectionalHeader image={Global} link='#' title="Global Recognition" ></SectionalHeader>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false} className='mt-4'>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <Link href={slide.link} target='_blank'>
                            <Image src={slide.image} alt="pic-1" className={styles.image} />
                            <Carousel.Caption className={`text-light ${styles['carousel-caption']}`}>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                )
            })}

        </Carousel >
    </>
}