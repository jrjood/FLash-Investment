import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import Wrapper from '../../assets/wrappers/HomePageWrappers/AboutSection';

const AboutSection = () => {
  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img ' aria-label='img'></div>

      <div className='right'>
        <Logo />
        <p className='text'>
          At Flash Investment, building isn’t just about bricks and mortar; it’s
          about vision, trust, and creating lasting value. We’re not your
          typical real estate company. We’re the planners, the builders, and the
          innovators shaping Egypt’s property future.
        </p>
        <p className='highlight'>REAL ESTATE IS OUR DNA</p>
        <Link to='contact'>
          <button className='btn'>GET IN TOUCH</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
