import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const SocialIcon = ({link, icon, label}) => {

    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <FontAwesomeIcon icon={icon}/>
        </a>
    );
}
