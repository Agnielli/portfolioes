import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


emailjs.init('0eFM8pIIFIQo_Kjmt');

export default function Home() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_hb8iaqb', 'template_qpuzxde', form.current, {
          publicKey: 'DmLl8Xvg1G-qNoYUE',
        })
        .then(
          () => {
            handleClose();
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        
    };

   return (
      <Box 
            component={'main'} 
            display={'flex'} 
            flexDirection={{xs: 'column', md: 'row'}} 
            alignItems={'center'}
            justifyContent={'center'} 
            minHeight={'calc(100vh - 175px)'}>

         <Box mt={"1rem"} className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box padding={"1rem"}>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet 
                     key={index} 
                     emoji={bio.emoji} 
                     text={bio.text}
                     link={bio.link}
                     handleShow={handleShow}
                  />
               ))}
               <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
                  <Box component={'span'} 
                     aria-label="cheese"
                     role="img"
                     mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>🖥️</Box> 
                     <a href="#" onClick={(e) => { e.preventDefault(); handleShow(); }}>
                        Send me a message
                     </a>
               </Box>
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
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                autoFocus
                as="textarea" rows={1}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              
            >
              <Form.Label>Send me a message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-dark" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn-dark" onClick={sendEmail}>
            Send message
          </Button>
        </Modal.Footer>
      </Modal>
      </Box>
   )
}