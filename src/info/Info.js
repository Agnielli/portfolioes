import self from "../img/self.png"
import mock1 from "../img/mock1.avif"
import mock2 from "../img/mock2.avif"
import mock3 from "../img/mock3.avif"
import mock4 from "../img/mock4.avif"
import mock6 from "../img/mock6.avif"
import mock7 from "../img/mock7.avif"
import { faInstagram, faGithub, faLinkedin, faReact, faNodeJs, faHtml5, faBootstrap, faGitlabSquare} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'


export let colors = ["#8586ED", "#22E1B5"];

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
            emoji: '🌍',
            text: 'Based in Garrucha, Almería (Spain)'
        },
        {
            link: "https://darkpos.com/",
            emoji: "💼",
            text: "Web Developer at DARK POS"
        },
        {
            emoji: "📧",
            text: "quiquesaba@gmail.com"
        },
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
            link: "https://gitlab.com/quiquesaba",
            icon: faGitlabSquare,
            label: 'gitlab'
        }

    ],
    bio: `Hello! My name is Enrique and I work remotely as a Software Developer at 18Techs and Dark POS, companies from Alpharetta, State of Georgia (USA) since January 2024. I honed my skills in Full Stack Development at the Socratech School of New Technologies and further expanded my knowledge through the ‘Modern Web Application Development’ course offered by the University of Helsinki. 
    
    Among my licenses and certifications are - JavaScript Programming from Fundación Telefónica - English for IT B2 from Cisco Networking Academy - Mobile App Development Course from the Complutense University of Madrid - Computer Science 101 from Stanford University Online - CS50 Introduction to Computer Science from Harvard University Online. 
    
    When I’m not coding, you can find me enjoying long walks on the beach and enjoying time with my family while volunteering in the community. I’m a firm believer that artificial intelligence will play a significant role in our future, perhaps even ruling us one day. If you’re looking for a developer who is always on the cutting edge of technology, then look no further. Hire me! Thank you, Payton Pierce, for inspiring my work and teaching me so much.`,

    skills:
        {
            proficientWith: ['JavaScript', 'React', 'Git', 'Github', 'Express', 'NodeJS', 'Bootstrap', 'HTML5', 'CSS3', 'mySQL',  'Adobe Photoshop'],
            exposedTo: ['React Native', 'TypeScript', 'Astro', 'Tailwind', 'PowerBI', 'MongoDB', 'Figma', 'C', 'Geist', 'Material-Ui']
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
            techs: ["React", "NodeJS", "MySQL"],
            live: "https://youtu.be/B4JPTwi-Dq4?si=A0VQqSkDROzKM8oV",
            source: "https://github.com/Agnielli/Ascendio",
            image: mock1
        },
        {
            title: "Gastro Quality",
            techs: ["NodeJS", "HTML", "Bootstrap"],
            live: "https://www.youtube.com/watch?v=QvekfeNYslM",
            source: "https://github.com/Agnielli/Restaurants-Project",
            image: mock2
        },
        {
            title: "WeatherApp",
            techs: ["React", "HTML", "Geist"],
            live: "https://weather-app-wpir.vercel.app/",
            source: "https://github.com/Agnielli/WeatherApp",
            image: mock6
        },
        {
            title: "Tesla Landing Clon",
            techs: ["Astro", "HTML", "Tailwind"],
            live: "https://tesla-landing-clon.vercel.app/",
            source: "https://github.com/Agnielli/tesla-landing-clon",
            image: mock7
        },
        {
            title: "Portfolio",
            techs: ["React", "HTML", "MaterialUi"],
            live: "https://portfolioes.vercel.app/",
            source: "https://github.com/Agnielli/portfolioes",
            image: mock3
        },
        {
            title: "Arkanoid",
            techs: ["JavaScript", "HTML", "CSS"],
            live: "https://arkanoid-sable.vercel.app/",
            source: "https://github.com/Agnielli/Arkanoid",
            image: mock4
        },
    ]    
}