import bgImage from '../assets/images/backgrounds/AboutPageImages/about-bg.png'; // background image
import {
  PageStarter,
  AboutSection,
  InspirationSection,
  ValuesSection,
  PropositionSection,
  SmallSection,
  ContactsSection,
} from '../layout/AboutPage/';

const AboutPage = () => {
  return (
    <>
      <PageStarter title='about us' imgPath={bgImage} />
      <AboutSection />
      <PropositionSection />
      <InspirationSection />
      <ValuesSection />
      <SmallSection />
      <ContactsSection />
    </>
  );
};

export default AboutPage;
