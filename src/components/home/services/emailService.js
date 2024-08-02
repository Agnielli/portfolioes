import emailjs from '@emailjs/browser';

emailjs.init('0eFM8pIIFIQo_Kjmt');

export const sendEmail = (formData) => {
  return emailjs.sendForm(
      'service_hb8iaqb', 
      'template_qpuzxde', 
      formData, 
      {
        publicKey: 'DmLl8Xvg1G-qNoYUE',
      }
  );
};