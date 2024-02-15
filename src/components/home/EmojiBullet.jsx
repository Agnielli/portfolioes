import React from 'react';
import {Box} from "@mui/material";
import { useState } from 'react';

function EmojiBullet({emoji, text, link }) {
    

    return (
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
    );
}

export default EmojiBullet;