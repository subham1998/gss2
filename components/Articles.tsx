import SectionalHeader from "./SectionalHeaders";
import Articles from "../public/articles.svg"
import { Carousel } from "react-bootstrap";
import { SetStateAction, useEffect, useState } from "react";
import ImagePopup from "./Image-popup";

const generateArticlesObjects = (images: string[]) => images.map((image) => {
    return { image: `https://subham1998.github.io/gss-image-service/images/articles/${image}`, link: '' }
})



export default function GovernanceCarousel() {

    const [owner] = useState('subham1998');
    const [repo] = useState('gss-image-service');
    const [filePath] = useState('images/articles');
    const [branch] = useState('main');
    const [fileNames, setFileNames] = useState([]);
    const [articles, setArticles] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [carouselInterval, setCarouselInterval] = useState<null | number>(3000);
    const [showControls, setShowControls] = useState(true);

    const fetchFileNames = async () => {
        try {
            const response = await fetch(`/api/file-names?owner=${owner}&repo=${repo}&filePath=${filePath}&branch=${branch}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setFileNames(data.fileNames);
        } catch (error: any) {
            console.error('Error:', error.message);
            setFileNames([]);
        }
    };

    useEffect(() => {
        // Fetch file names on page load
        fetchFileNames();
    }, []);

    useEffect(() => {
        const articlesObject = generateArticlesObjects(fileNames)
        setArticles(articlesObject)
    }, [fileNames]);


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
    }

    return <>
        <div className={`my-4`}>
            <SectionalHeader image={Articles} link='#' title="Articles" ></SectionalHeader>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={carouselInterval} pause={false} controls={showControls} indicators={showControls} className='mt-4'>
            {articles.map((slide, i) => {
                return (
                    <Carousel.Item key={i}>
                        <ImagePopup imageUrl={slide.image} isPopupOpen={handlePopUpOpen} />
                    </Carousel.Item>
                )
            })}

        </Carousel >
    </>
}