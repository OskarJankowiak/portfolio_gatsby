import React from 'react';
import styled from 'styled-components';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import ContactForm from 'components/molecules/ContactForm/ContactForm';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};
  width: 100%;
  height: 100%;
`;

const Contact = () => {
  return (
    <Wrapper data-section data-title="Contact" id="contact">
      <SectionHeader secondary titleText="Contact" descriptionText="If you want contact with me, just send me message filling out form puted below or find me on social-media" />
      <ContactForm />
    </Wrapper>
  );
};

export default Contact;