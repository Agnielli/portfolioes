import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


export let colors = ["#F5EE77", "#E16642"];

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
            text: 'Based in Spain'
        },
        {
            emoji: "💼",
            text: "Web Developer at 18Techs"
        },
        {
            emoji: "📧",
            text: "quiquesaba@gmail.com"
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
    bio: "Hello! My name is Enrique and I’m a Web Developer at 18Techs. I honed my skills in Full Stack Development at the Socratech School of New Technologies and further expanded my knowledge through the ‘Modern Web Application Development’ course offered by the University of Helsinki. When I’m not coding, you can find me enjoying long walks on the beach. I’m a firm believer that artificial intelligence will play a significant role in our future, perhaps even ruling us one day. If you’re looking for a developer who is always on the cutting edge of technology, then look no further. Hire me! This portfolio is inspired by the work of Payton Pierce.",

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
            title: "Project 1",
            live: "https://youtu.be/B4JPTwi-Dq4?si=A0VQqSkDROzKM8oV",
            source: "https://github.com/Agnielli/Ascendio",
            image: mock1
        },
        {
            title: "Gastro Qality",
            live: "https://www.youtube.com/watch?v=QvekfeNYslM",
            source: "https://github.com/Agnielli/Restaurants-Project",
            image: mock2
        },
        {
            title: "Pedro Camacho (UnderConstruction)",
            image: mock3
        }
    ]
}