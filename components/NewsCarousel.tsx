"use client";

import Image from 'next/image'
import styles from './NewsCarousel.module.scss'
import CarouselPicOne from '../public/GSS265face.jpg'
import CarouselPicTwo from '../public/govardhan-portal.webp';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

const data = [
  {
    image: CarouselPicOne,
    link: "https://pib.gov.in/PressReleasePage.aspx?PRID=1941662",
    caption: "Swachhata Hi Seva 2023 Campaign",
    description: "Union Minister for Jal Shakti, Shri Gajendra Singh Shekhawat Jointly Launches Swachhata Hi Seva 2023 Campaign"
  },
  {
    image: CarouselPicTwo,
    link: "https://krishijagran.com/news/gajendra-singh-shekhawat-launches-unified-registration-portal-for-gobardhan-to-revolutionize-biogascbg-sector/",
    caption: "GOBARdhan to Revolutionize Biogas/CBG Sector",
    description: "Gajendra Singh Shekhawat Launches Unified Registration Portal for GOBARdhan to Revolutionize Biogas/CBG Sector"
  },
]

export default function NewsCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex: number) => {
  //   debugger;
  //   setIndex(selectedIndex);
  // };

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };


  return (<>
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

    </Carousel>
  </>)
}