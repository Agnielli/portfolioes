import { useState, useRef } from 'react';
import { sendEmail } from '../services/emailService';

export const useContactForm = () => {
  const [show, setShow] = useState(false);
  const form = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.current) {
      sendEmail(form.current)
        .then((result) => {
          console.log('SUCCESS!', result.text);
          handleClose();
          // Aquí puedes añadir una notificación de éxito
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
          // Aquí puedes añadir una notificación de error
        });
    } else {
      console.error('Form reference is not available');
    }
  };

  return { show, handleClose, handleShow, form, handleSubmit };
};