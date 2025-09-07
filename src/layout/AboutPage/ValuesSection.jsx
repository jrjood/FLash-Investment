import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/ValuesSection';
import { ValuesBox } from '../../components';

const values = [
  {
    icon: <IoMdCheckmarkCircleOutline />,
    title: 'Commitment to Quality',
    text: `Every project we deliver is built on a foundation of excellence. From planning to execution, we focus on quality, durability, and attention to detail ensuring our clients receive developments that stand the test of time.`,
  },
  {
    icon: <LiaHandHoldingHeartSolid />,
    title: 'Client-Centered Approach',
    text: `Our clients are at the heart of everything we do. We listen, understand, and provide solutions tailored to their needs. By building trust and long-term relationships, we create spaces that truly serve the people who live and invest in them.`,
  },
  {
    icon: <TbArrowBigUpLinesFilled />,
    title: 'Continuous Growth',
    text: `We are constantly evolving, seeking new opportunities, and embracing innovation in real estate. From sustainable practices to modern designs, we are committed to growth that benefits our company, our clients, and our communities.`,
  },
  {
    icon: <BsStars />,
    title: 'Integrity & Transparency',
    text: `We believe in doing business the right way—with honesty, accountability, and transparency. Our clients and partners can always count on us to deliver on our promises and uphold the highest standards of professionalism.`,
  },
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        {/* <div className='overlay' /> */}
        <div className='container'>
          <div className='content'>
            <h2 className='title title-big'>values</h2>
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
