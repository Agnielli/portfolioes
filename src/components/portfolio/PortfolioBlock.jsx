import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Style from '../BaseLayout.module.scss'

function PortfolioBlock(props) {
   const {image, live, source, title, darkMode} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'1rem'}
              alignItems={'center'} fontSize={'1.3rem'} py={'2rem'}>
               {!darkMode ? 
                  <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                     🖥️<IconLink link={live} title={'Demo'} />
                  </Box>
               : 
                  <Box p={1} border={'2px solid white'} borderRadius={'25px'}>
                     🖥️<IconLink link={live} title={'Demo'} />
                  </Box>
               }
               
               {!darkMode ? 
                  <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                     {"</>"}<IconLink link={source} title={'Source Code'}/>
                  </Box>
               :
                  <Box p={1} border={'2px solid white'} borderRadius={'25px'}>
                     {"</>"}<IconLink link={source} title={'Source Code'}/>
                  </Box>
               }
            
         </Box>
      </Box>
   );
}

export default PortfolioBlock;