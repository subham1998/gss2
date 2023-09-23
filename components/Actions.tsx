import Infographic from '../public/infographic.svg';
import Speeches from '../public/microphone-54.svg';
import Gallery from '../public/gallery.svg';
import WriteTo from '../public/pencil_and_paper.svg';
import NewsIcon from '../public/news-icon.svg'
import Library from '../public/closed-book-svgrepo-com.svg'
import Image from 'next/image';
import Link from 'next/link';
import styles from './Actions.module.scss'


const data = [
    {
        label: 'Infographics',
        image: Infographic,
        link: '/infographics'
    },
    {
        label: 'Speeches',
        image: Speeches,
        link: '/speeches'
    },
    {
        label: 'Gallery',
        image: Gallery,
        link: '#'
    },
    {
        label: 'Write to GSS',
        image: WriteTo,
        link: '#'
    },
    {
        label: 'Subscribe to Newsletter',
        image: NewsIcon,
        link: '#'
    },
    {
        label: 'GSS Library',
        image: Library,
        link: '#'
    }
]

export default function Actions() {
    return <>
        <div className={`row my-4 text-dark border-top border-bottom py-4 ${styles['actions-container']}`}>
            {data.map((_data, index) => {
                return <>
                    <div className='col-lg-4 col-md-6 col-sm-12 py-4' key={index}>
                        <Link href={_data.link} target='_self' className={`d-flex flex-column align-items-center border-right ${styles['action-items']} ${styles[_data.label.toLowerCase().split(' ').join('-')]}`}>
                            <Image src={_data.image} alt={_data.label} width={100} height={100}></Image>
                            <span>{_data.label}</span>
                        </Link>
                    </div>
                </>
            })}
        </div>
    </>
}