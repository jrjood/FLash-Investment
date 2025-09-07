import heroVideo from '../../assets/images/backgrounds/HomePageImages/hero-bg.mp4';
import Wrapper from '../../assets/wrappers/HomePageWrappers/HeroSection';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Wrapper id='hero' className='section-container'>
      <div>
        <div className='overlay' />
        <video
          className='background-video'
          id='hero-video'
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
          type='video/mp4'
        ></video>
      </div>

      <div className='content '>
        <div className='left flex-center'>
          <div className='info'>
            <p>WHERE</p>
            <p>SPEED</p>
            <p>MEETS</p>
            <p>SUCCESS</p>
          </div>
        </div>
        <div className='right '>
          <p>
            At Flash Investment, we believe real estate is more than
            buildings—it’s about shaping communities and creating lasting value.
            With a team of 100+ experts and our headquarters in Cairo, we
            deliver innovative residential and commercial projects that redefine
            Egypt’s property landscape.
          </p>
          <Link className='btn-container' to='about'>
            <button className='btn'>LEARN MORE</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
