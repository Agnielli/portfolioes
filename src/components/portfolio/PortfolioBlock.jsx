import React from 'react';
import IconLink from "./IconLink";
import {Box, Typography} from "@mui/material";
import { faReact, faNodeJs, faHtml5, faBootstrap, faJs, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tailwind from '../../img/tailwind.png'
import astro from '../../img/astro.svg'
import geist from '../../img/geist.png'
import materialUi from '../../img/material-ui.png'

function PortfolioBlock({image, live, source, title, darkMode, setDarkMode, techs}) {
   
   const techIcons = {
      "React": faReact,
      "NodeJS": faNodeJs,
      "MySQL": faDatabase,
      "HTML": faHtml5,
      "Bootstrap": faBootstrap,
      "JavaScript": faJs,
      "CSS": faCss3Alt,
      "Tailwind": tailwind,
      "Astro": astro,
      "Geist": geist,
      "MaterialUi": materialUi
  };

  const techsArray = typeof techs === 'string' ? techs.split(', ') : techs;

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} py={'1rem'}/>
         <h1 className='mb-0' style={{fontSize: '2rem', marginTop: '-2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'1rem'}
              alignItems={'center'} fontSize={'1.3rem'} py={'1rem'}>
                 {!darkMode ? 
                    <Box display="flex" justifyContent="center">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {techsArray && techsArray.map((tech, index) => (
                                 <span key={index} style={{ display: 'inline-block', marginRight: index < techsArray.length - 1 ? '13px' : '0',  verticalAlign: 'middle',  lineHeight: '1.5em' }}>
                                    {typeof techIcons[tech] === 'object' ? (
                                       <FontAwesomeIcon icon={techIcons[tech]} style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/>
                                    ) : (
                                          <img src={techIcons[tech]} alt={tech} style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                    )}
                                    <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}>{tech}</span>
                                    </span>
                                    ))}
                        </ul>
                     </Box>
                 :
                 <Box display="flex" justifyContent="center">
                     <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                           {techsArray && techsArray.map((tech, index) => (
                              <span key={index} style={{ display: 'inline-block', marginRight: index < techsArray.length - 1 ? '13px' : '0',  verticalAlign: 'middle',  lineHeight: '1.5em' }}>
                                 {typeof techIcons[tech] === 'object' ? (
                                 <FontAwesomeIcon icon={techIcons[tech]} style={{ width: '1em', height: '1em', verticalAlign: 'middle' }}/>
                                 ) : (
                                       <img src={techIcons[tech]} alt={tech} style={{ filter: 'invert(100%)', width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                 )}
                                 <span style={{ verticalAlign: 'middle', marginLeft: '5px', color: 'white' }}>{tech}</span>
                                    </span>
                           ))}
                     </ul>
                  </Box>
                 }
                 
                 <div style={{ textAlign: 'center', marginTop: '0' }} >
                     <Box px={1.2} py={0.5} style={{ display: 'inline-block', marginRight: '10px' }}
                        sx={{
                           transition: 'transform 0.3s ease-in-out',
                           border: darkMode ? '2px solid white' : '2px solid black',
                           borderRadius: '12px',
                           display: 'inline-block',
                        '&:hover, &:hover a': {
                           bgcolor: darkMode ? 'white' : 'black',
                           color: darkMode ? 'black' : 'white',
                           
                        },
                        '&:active': {
                           transform: 'scale(0.98)',
                        },
                         }}
                     > 
                     <a  
                        href={live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                     >
                        🖥️ <span style={{ marginRight: '10px' }}></span>Demo</a>
                     </Box>

                     <Box px={1.2} py={0.5}
                        sx={{
                           transition: 'transform 0.3s ease-in-out',
                           border: darkMode ? '2px solid white' : '2px solid black',
                           borderRadius: '12px',
                           display: 'inline-block',
                        '&:hover, &:hover a': {
                           bgcolor: darkMode ? 'white' : 'black',
                           color: darkMode ? 'black' : 'white',
                           
                        },
                        '&:active': {
                           transform: 'scale(0.98)',
                        },
                         }}
                     >
                        <a 
                           href={source} 
                           target="_blank" 
                           rel="noopener noreferrer"
                        >
                           {'</>'}
                           <span style={{ marginRight: '10px' }} />
                           Source Code
                        </a>
                     </Box>
                  </div>
         </Box>
      </Box>

      
   );
}


export default PortfolioBlock;