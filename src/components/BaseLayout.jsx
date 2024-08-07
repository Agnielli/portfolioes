import {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import { Home } from "./home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Style from './BaseLayout.module.scss'

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(() => {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === null ? true : JSON.parse(savedMode);
   });

   useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
   }, [darkMode]);

   function handleToggleDarkMode() {
      setDarkMode(prevMode => !prevMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>Enrique Sabariego &copy; 2024</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

