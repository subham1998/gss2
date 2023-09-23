import Image from "next/image"
import styles from "../styles/biography.module.scss"
import biograhyOne from '../public/biography-1.jpg';
import biograhyTwo from '../public/biography-2.jpg';

export default function Biography() {
    return (<div className="container mb-4">
        <h5 className={`${styles.header}`}>
            <div className={`${styles.icon}`}>
                <i className="fa-solid fa-book"></i>
            </div>
            <div className={`border-bottom border-2 text-dark ${styles['header-name']}`}>
                Biography
            </div>
        </h5>
        <div className="text-dark">
            <Image src={biograhyTwo} alt="Shri Gajendra Singh Sekhawat" width={400} height={600} className="float-start me-4 rounded"></Image>
            <div className={`${styles['text']}`}>
                MR. GAJENDRA SINGH SHEKHAWAT is an Indian Politician who is currently serving as Cabinet Minister for Jal Shakti.
                As a Member of Parliament representing Jodhpur and having won the Indian General Elections, 2019 with a margin of 2,70,000 votes, Mr. Gajendra Singh Shekhawat is seen as a member of the youth brigade, a symbol of a farmer who is progressive and a technocrat, the reason why he has been exclusively handpicked by the Prime Minister with a responsibility to align policy objectives with dynamic optimism and work ethics.
                As the Minister for Jal Shakti, “Gajju Bana” as he is lovingly called has been given the herculean responsibility and opportunity of reversing the water scenario of the country, the task of taking India from being water scarce to water secure. He is now leading the crusade to bring water to 14 Crore Households through the Prime Minister’s ambitious “Jal Jeevan Mission”, this scheme also called as “Har Ghar Nal sey Jal” scheme is an opportunity to solve the household water distress in large swathes across India’s topography.
                Armed with a clinical understanding of the bevy of problems that plague the particular water sector, he is expected to accomplish the promise of Jal Jeevan Mission by 2024. Known for his extremely amicable nature and grounded personality, Mr. Shekhawat is a philosopher by education and a farmer by profession. Thrust into politics at an early age, he was elected as president of Student union of JNVU University in 1992 under the banner of Akhil Bhartiya Vidhyarthi Parishad .
                For the better part of his life he had chosen nation building over a political career and held several positions like being the co-convener of the Swadeshi Jagran Manch, the General Secretary of Seema Jan Kalyan Samiti, an organisation dedicated to strengthening of national security by developing border towns and villages. As the General Secretary, Mr. Shekhawat was instrumental in building a second line of defense that consisted of civilians residing near the border area of Rajasthan.
                He was also instrumental in furthering the impact of civil defense by setting up 40 schools and 4 hostels along the Indo-Pak border. Extremely approachable on Social Media, he is massively popular on Twitter, Facebook and Youtube. Also has the distinction of being the most followed Indian Politician on Quora. His Quora profile has more than 70,000 followers and his answers on the social media platform has been viewed a record 6.8 Million times, more than that of former U.S.A President Barrack Obama.
                As an example worth emulation, he led an internship program that leveraged his cult following on Quora to create a nationwide youth led development initiative, something that impressed the Prime Minister because of its unique approach towards problem solving for public policy issues and challenges.
            </div>
        </div>
    </div>)
}