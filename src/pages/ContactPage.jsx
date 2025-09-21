import bgImage from '../assets/images/backgrounds/ContactPageImages/contactpage-bg.jpg'; // background image
import { Outlet } from 'react-router-dom';

import {
  PageStarter,
  ContactForm,
  JoinCrewForm,
  NewsletterForm,
  ContactSelectForm,
  SiteVisitForm,
} from '../layout/ContactPage/';

const ContactPage = () => {
  return (
    <>
      <PageStarter title='contact us' imgPath={bgImage} />
      <ContactForm />
      <JoinCrewForm />
      <Outlet />
      <NewsletterForm />
      <SiteVisitForm />
      <ContactSelectForm />
    </>
  );
};

export default ContactPage;
