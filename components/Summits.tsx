import SectionalHeader from "./SectionalHeaders";
import Summit from "../public/airplane-silhouette-svgrepo-com.svg"
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from './MediaCarousel.module.scss';
import { SetStateAction, useState } from "react";
import NewsPlaceHolder from '../public/landscape-placeholder-svgrepo-com.svg'

const data = [
    {
        image: `https://subham1998.github.io/gss-image-service/images/summits/summits1.png`,
        link: "https://twitter.com/primenewstime1/status/1197927947321016320",
        caption: "",
        description: "The Union Minister for Jal Shakti, Shri Gajendra Singh Shekhawat addressing at the signing of an MoU between Central Ground Water Board and MARVI Partners of Australia"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits2.png',
        link: "https://twitter.com/DoWRRDGR_MoJS/status/1197837293412683776",
        caption: "",
        description: "An MoU was signed between CGWB, D/o WR, RD&GR, MoJS and MARVI Partners (including Australian partner)"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits4.png',
        link: "https://twitter.com/IndiainDenmark/status/1569252005935288322",
        caption: "",
        description: "Hon’ble Union Minister of Jal Shakti, Shri Gajendra Singh Shekhawat welcomed in Copenhagen."
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits5.png',
        link: "https://twitter.com/AIBSNews24/status/1569576169506488320",
        caption: "",
        description: "The Union Minister is on a visit to Denmark where he interacted with the Indian diaspora at the India House in Copenhagen."
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits6.png',
        link: "https://twitter.com/IndiainDenmark/status/1569620613714817024",
        caption: "",
        description: "Hon’ble Minister of Jal Shakti, Shri Gajendra Singh Shekhawat @gssjodhpur delivered an inspirational keynote address at the IWA High Level Summit #WorldWaterCongress in Copenhagen"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits7.png',
        link: "https://twitter.com/IndiainDenmark/status/1572180572327317504",
        caption: "",
        description: "Hon’ble Minister of Jal Shakti, Shri Gajendra Singh Shekhawat delivered an inspirational address and had a lively interaction with the vibrant Indian diaspora in Copenhagen"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits8.png',
        link: "https://twitter.com/NHPConnect/status/1578350230797357058",
        caption: "",
        description: "Site visit to Managed Aquifer site in #Australia by Hon’ble Minister Sh. Gajendra Singh Shekhawat."
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits9.png',
        link: "https://twitter.com/NWDA_MOWR/status/1506591958600400897",
        caption: "",
        description: "Shri Gajendra Singh Shekhawat, Hon'ble Mininster for Jal Shakti, Government of India inaugurated MoJS pavilion in Dubai Expo 2020 on 23rd March 2022."
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits10.png',
        link: "https://twitter.com/PBNS_India/status/1506595846640472065",
        caption: "",
        description: "The Jal Shakti Sectoral Floor was inaugurated at India Pavilion by a government delegation led by Gajendra Singh Shekhawat, Minister of Jal Shakti, and Dr. Aman Puri, DCG for India at Expo 2020 Dubai"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits11.png',
        link: "https://twitter.com/DoWRRDGR_MoJS/status/1506598168305500173",
        caption: "",
        description: "Hon'ble Minister of Jal Shakti Shri Gajendra Singh Shekhawat participated in a round table interactive session at the #DubaiExpo 2020"
    },
    {
        image: 'https://subham1998.github.io/gss-image-service/images/summits/summits12.png',
        link: "https://twitter.com/IndEmbDushanbe/status/1534925879473750016",
        caption: "",
        description: "Hon’ble Minister of Jal Shakti Sh. Gajendra Singh Shekhawat participated in the 2nd High-Level International Conference on the International Decade for Action “Water for Sustainable Development 2018-28”held in Dushanbe on June 7th."
    }

]

export default function Summits() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    return <>
        <div className={`my-4`}>
            <SectionalHeader image={Summit} link='#' title="Domestic & International Visits" ></SectionalHeader>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false} className='mt-4'>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <Link href={slide.link} target='_blank'>
                            <Image src={slide.image} alt="pic-1" width={500} height={500} className={styles.image} />
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