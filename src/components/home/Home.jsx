import { Box } from "@mui/material";
import { EmojiBullet, SocialIcon, ContactModal } from "./";
import {info} from "../../info/Info";
import { useContactForm } from './hooks/useContactForm';
import { Avatar } from './components/Avatar';


export const Home = () => {

   const { show, handleClose, handleShow, form, handleSubmit } = useContactForm();


   return (
      <Box 
            component={'main'} 
            display={'flex'} 
            flexDirection={{xs: 'column', md: 'row'}} 
            alignItems={'center'}
            justifyContent={'center'} 
            minHeight={'calc(100vh - 175px)'}>

         <Avatar />

         <Box padding={"1rem"}>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span>
            </h1>
            <h2>I'm {info.position}.</h2>

            <Box 
               component={'ul'} 
               p={'0.8rem'} 
               className='no-style-override'
            >

               {info.miniBio.map((bio, index) => (
                  <EmojiBullet 
                     key={index} 
                     id={index} 
                     emoji={bio.emoji} 
                     text={bio.text}
                     link={bio.link}
                  />
               ))}
               <EmojiBullet 
                  emoji="💬" 
                  text="Send me a message" 
                  onClick={(e) => { e.preventDefault(); handleShow(); }}
               />
               
            </Box>
            <Box display={'flex'} gap={'2.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>

               {info.socials.map((social, index) => (
                  <SocialIcon 
                     key={index} 
                     link={social.link} 
                     icon={social.icon} 
                     label={social.label} 
                  />
               ))}
            </Box>
         </Box>

            <ContactModal 
               form = {form}
               handleSubmit={handleSubmit}
               show={show}
               handleClose={handleClose}
            />

      </Box>
   )
}