import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/AboutPageWrappers/AboutSection';

const AboutSection = () => {
  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img ' aria-label='img'></div>

      <div className='right'>
        <h3 className='title title-big'>WHO WE ARE</h3>
        <p className='text'>
          Since our establishment in 2001, Flash Investment has steadily grown
          into one of Egypt’s trusted real estate companies. Starting with a
          small team in Cairo, we have expanded to more than 100 professionals
          who bring expertise, dedication, and innovation to every project. Our
          portfolio spans residential, commercial, and mixed-use developments,
          each designed with a focus on quality, sustainability, and long-term
          value. Over the years, we have built a solid reputation for delivering
          projects that meet client expectations while contributing to the
          growth of vibrant communities.
        </p>
        <p className='highlight'>
          Our plan for the future is to continue expanding our footprint and to
          set new benchmarks in Egypt’s real estate market.
        </p>
        <Link to='/contact'>
          <button className='btn'>start campaign</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
