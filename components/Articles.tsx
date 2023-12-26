import SectionalHeader from "./SectionalHeaders";
import Articles from "../public/articles.svg"
import { Carousel } from "react-bootstrap";
import { SetStateAction, useState } from "react";
import ImagePopup from "./Image-popup";

const articleImagesNames = [
    'Article_1.jpg', 'Article_2.jpg',
    'Article_4.jpg', 'Article_5.jpg',
    'Article_6.jpg', 'Article_7.jpg',
    'Article_8.jpg', 'Article_9.jpg',
    'Article_10.jpg', 'Article_11.jpg',
    'Article_12.jpg', 'Article_13.jpg',
    'Article_14.jpg', 'Article_15.jpg',
    'Article_16.jpg', 'Article_17.jpg',
    'Article_18.jpg', 'Article_19.jpg'
]

const data = articleImagesNames.map((image) => {
    return { image: `https://subham1998.github.io/gss-image-service/images/articles/${image}`, link: '' }
})



export default function GovernanceCarousel() {

    const [index, setIndex] = useState(0);
    const [carouselInterval, setCarouselInterval] = useState<null | number>(3000);
    const [showControls, setShowControls] = useState(true);
    const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };
    const handlePopUpOpen = (event: boolean) => {
        if (event) {
            setCarouselInterval(null)
            setShowControls(false)
        } else {
            setCarouselInterval(3000)
            setShowControls(true)
        }
        console.log(event);
    }
    return <>
        <div className={`my-4`}>
            <SectionalHeader image={Articles} link='#' title="Articles" ></SectionalHeader>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={carouselInterval} pause={false} controls={showControls} indicators={showControls} className='mt-4'>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <ImagePopup imageUrl={slide.image} isPopupOpen={handlePopUpOpen} />
                    </Carousel.Item>
                )
            })}

        </Carousel >
    </>
}