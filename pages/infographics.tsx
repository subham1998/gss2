import Image from 'next/image'
import styles from '../styles/infographic.module.scss'
import Link from 'next/link';
import PageHeader from '@/components/PageHeaders';
import getFacebookShareLink from '../scripts/fb-link-generator';
import generateWhatsAppShareLink from '../scripts/wa-link-generator';
import generateTwitterShareLink from '../scripts/x-link-generator';
import { useEffect, useState } from 'react';

const generateInfographicsObjects = (images: string[]) => images.map((image) => {
    const imageLink = `https://subham1998.github.io/gss-image-service/images/infographics/${image}`
    return {
        image: imageLink,
        caption: '',
        facebookLink: getFacebookShareLink(imageLink),
        whatsappLink: generateWhatsAppShareLink(imageLink),
        twitterLink: generateTwitterShareLink(imageLink)
    }
})

const generateInfographicRows = (epoch: number, infographics: any[]) => infographics.reduce((rows: any[], key, index) => {
    return (index % 4 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
}, [])

export default function Infographics() {
    const [owner] = useState('subham1998');
    const [repo] = useState('gss-image-service');
    const [filePath] = useState('images/infographics');
    const [branch] = useState('main');
    const [fileNames, setFileNames] = useState([]);
    const [infographics, setInfographics] = useState<any[]>([])
    const [infographicRows, setInfographicsRow] = useState<any[]>([])

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
        const infographicObjects = generateInfographicsObjects(fileNames)
        setInfographics(infographicObjects)
    }, [fileNames]);

    useEffect(() => {
        const infographicRows = generateInfographicRows(4, infographics)
        setInfographicsRow(infographicRows)
    }, [infographics]);

    return <>
        <div className="container mb-4">
            <PageHeader header="Infographics">
                <i className="fa-solid fa-chart-simple"></i>
            </PageHeader>
            <div className='mt-4'>
                {infographicRows.map((row: typeof infographics, index) => {
                    return (<div className={`row ${styles['infographic-row']}`} key={index}>
                        {row.map((graphic) => {
                            return (<div className={`col-lg-3 col-md-6 col-sm-12 p-2 ${styles.infographic}`} key={graphic.caption}>
                                <div className='border border-2 rounded p-2'>
                                    <Image src={graphic.image} alt={graphic.caption} width={500} height={400} className='w-100'></Image>
                                    <div className={`${styles.more} mt-4`}>
                                        <div className={`${styles['sm-list']}`}>
                                            <Link href={graphic.facebookLink} className={`${styles.facebook} d-inline-block position-relative`}>
                                                <i className='fab fa-facebook-f position-absolute'></i>
                                            </Link>
                                            <Link href={graphic.whatsappLink} className={`${styles.whatsapp} d-inline-block position-relative`}>
                                                <i className='fab fa-whatsapp position-absolute'></i>
                                            </Link>
                                            <Link href={graphic.twitterLink} className={`${styles.twitter} d-inline-block position-relative`}>
                                                <i className="fa-brands fa-x-twitter position-absolute"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>)
                })}
            </div>
        </div>
    </>
}