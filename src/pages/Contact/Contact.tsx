import * as React from 'react';

import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

import { Wrapper } from './Contact.styles';

const Contact = () => {
  return (
    <Wrapper id='wrapper'>
      <Header />
      <Footer></Footer>
    </Wrapper>
  );
};

export default Contact;
