import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SocialIcon({link, icon, label}) {

    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <FontAwesomeIcon icon={icon}/>
        </a>
    );
}

export default SocialIcon;