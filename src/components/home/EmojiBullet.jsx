import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet({emoji, text, link, id }) {
    

    return (
        <Box>
          {id === 3 ? 
            <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
              <Box component={'span'} 
              aria-label="cheese"
              role="img"
              mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> 
                 <a target="_blank"
              rel="noopener noreferrer" href={link}>
              {text}
          </a>
            </Box>
          : 
            <Box fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
              <Box component={'span'} 
              aria-label="cheese"
              role="img"
              mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> 
                <a target="_blank"
              rel="noopener noreferrer" href={link}>
              {text}
          </a>
            </Box>
          }
          
        </Box>
      );
}

export default EmojiBullet;