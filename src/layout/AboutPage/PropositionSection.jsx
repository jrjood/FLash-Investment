/* import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs'; */

import Wrapper from '../../assets/wrappers/AboutPageWrappers/PropositionSection';
import { ValuesBox } from '../../components';

const values = [
  {
    icon: false,
    title: 'Originality',
    text: `We design developments with unique character and modern appeal. Every project is approached with creativity to ensure it stands out while meeting the practical needs of residents and investors.`,
  },
  {
    icon: false,
    title: 'Time Management',
    text: `We value our clients’ time. With a skilled team and strong project management, we deliver on schedule without compromising quality ensuring every handover happens as promised.`,
  },
  {
    icon: false,
    title: 'Experience',
    text: `With over two decades of presence in the market, our experience is reflected in the trust of our clients and the quality of our projects. We’ve consistently delivered developments that enhance communities and create lasting value.`,
  },
  {
    icon: false,
    title: 'Quality',
    text: `Quality is at the core of everything we build. From materials and design to finishing and after-sales service, we ensure every detail meets the highest standards, creating homes and spaces that endure.`,
  },
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        {/* <div className='overlay' /> */}
        <div className='container'>
          <div className='content'>
            <h2 className='title title-big'>VALUE PROPOSITION</h2>
            <div className='cards-grid'>
              {values.map((value, index) => (
                <ValuesBox
                  icon={value.icon}
                  title={value.title}
                  text={value.text}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ServicesSection;
