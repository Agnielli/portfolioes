import self from "../img/self.avif"
import mock1 from "../img/mock1.avif"
import mock2 from "../img/mock2.avif"
import mock3 from "../img/mock3.avif"
import mock4 from "../img/mock4.avif"
import mock5 from "../img/mock5.avif"
import mock6 from "../img/mock6.avif"
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


export let colors = ["#F5EE77", "#E16642"];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

export const info = {
    firstName: "Enrique",
    lastName: "Sabariego",
    initials: "es",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Fueled by tea'
        },
        {
            emoji: '🌍',
            text: 'Based in Garrucha, Almería (Spain)'
        },
        {
            emoji: "📧",
            text: "quiquesaba@gmail.com"
        },
        {
            link: "https://www.18techs.com/",
            emoji: "💼",
            text: "Web Developer at 18Techs"
        }
    ],
    socials: [
        {
            link: "https://github.com/Agnielli",
            icon: faGithub,
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/enrique-sabariego/",
            icon: faLinkedin,
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/e.sabariego/",
            icon: faInstagram,
            label: 'instagram'
        }

    ],
    bio: "Hello! My name is Enrique and I’m a Web Developer at 18Techs. I honed my skills in Full Stack Development at the Socratech School of New Technologies and further expanded my knowledge through the ‘Modern Web Application Development’ course offered by the University of Helsinki. When I’m not coding, you can find me enjoying long walks on the beach. I’m a firm believer that artificial intelligence will play a significant role in our future, perhaps even ruling us one day. If you’re looking for a developer who is always on the cutting edge of technology, then look no further. Hire me! This portfolio was inspired by the work of Payton Pierce.",

    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'express', 'nodejs', 'bootstrap', 'html5', 'css3', 'mySQL'],
            exposedTo: ['react native', 'PowerBI', 'mongoDB', 'figma', 'adobe photoshop']
        }
    ,
    hobbies: [
        {
            label: 'rpg',
            emoji: '🐉 🎲'
        },
        {
            label: 'sports',
            emoji: '🚴🏼 🏃🏻‍♂️'
        },
        {
            label: 'movies',
            emoji: '🧛‍♂️ 🧝‍♀️'
        },
        {
            label: 'to serve',
            emoji: '⭐️ 🔆'
        }
    ],

    portfolio: [ 
        {
            title: "Ascendio",
            live: "https://youtu.be/B4JPTwi-Dq4?si=A0VQqSkDROzKM8oV",
            source: "https://github.com/Agnielli/Ascendio",
            image: mock1
        },
        {
            title: "Gastro Quality",
            live: "https://www.youtube.com/watch?v=QvekfeNYslM",
            source: "https://github.com/Agnielli/Restaurants-Project",
            image: mock2
        },
        {
            title: "WeatherApp",
            live: "https://weather-app-wpir.vercel.app/",
            source: "https://github.com/Agnielli/WeatherApp",
            image: mock6
        },
        {
            title: "Portfolio",
            live: "https://portfolioes.vercel.app/",
            source: "https://github.com/Agnielli/portfolioes",
            image: mock3
        },
        {
            title: "Arkanoid",
            live: "https://arkanoid-sable.vercel.app/",
            source: "https://github.com/Agnielli/Arkanoid",
            image: mock4
        },
        {
            title: "Pedro Camacho",
            image: mock5
        }
    ]
}