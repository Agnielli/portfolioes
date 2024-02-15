import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export let colors = ["#F5EE77", "#E16642"];


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

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
            text: 'fueled by tea'
        },
        {
            emoji: '🌍',
            text: 'based in Spain'
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Gastro Qality",
            live: "https://www.youtube.com/watch?v=QvekfeNYslM",
            source: "https://github.com/Agnielli/Restaurants-Project",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        }
    ]
}