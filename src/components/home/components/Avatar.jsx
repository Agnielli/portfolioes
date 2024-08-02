import { Box } from '@mui/material'
import classNames from 'classnames';
import Style from '../Home.module.scss';
import {info} from "../../../info/Info";
import me from '../../../img/self.avif';


export const Avatar = () => {
  return (
    <Box 
      mt={"1rem"} 
      className={classNames(Style.avatar, Style.shadowed)} 
      alt={'image of Enrique'} 
      style={{background: info.gradient}} 
      component={'img'} 
      src={me} 
      width={{xs: '35vh', md: '40vh'}}
      height={{xs: '35vh', md: '40vh'}}
      borderRadius={'50%'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}
    />
  )
}
