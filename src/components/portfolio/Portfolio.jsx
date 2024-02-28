import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({darkMode}) {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} sm={6} lg={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} darkMode={darkMode}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};