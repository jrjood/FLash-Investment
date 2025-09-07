// src/pages/Home/ServicesSection.jsx
import Wrapper from '../../assets/wrappers/HomePageWrappers/ServicesSection';
import ServicesCard from '../../components/ServicesCard';

const services = [
  'Swimming_Pools',
  'Health_Club_and_Spa',
  'Commercial_Areas',
  'Security_and_Guarding',
  'Childrens_Area',
  'Bicycle_Paths',
  'Sports_Fields',
  'Parking',
];

const ServicesSection = () => {
  return (
    <>
      <Wrapper className='section-container'>
        <div className='container'>
          <h2 className='title title-medium'>Services</h2>
          <ServicesCard services={services} />
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ServicesSection;
