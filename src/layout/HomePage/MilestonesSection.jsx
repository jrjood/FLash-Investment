import { Counter } from '../../components';
import logo2001 from '../../assets/images/logo-2001.png'; // the big transparent 2001
import Wrapper from '../../assets/wrappers/HomePageWrappers/MilestonesSection';

const MilestonesSection = () => {
  return (
    <Wrapper className='flex-center '>
      <div className='container flex-center'>
        <div className='stats-container'>
          <p className='top-text'>
            Our portfolio showcases a wide range of successful projects that
            highlight our commitment to quality and innovation in real estate.
          </p>
          <div className='stats flex-center'>
            <div className='stat-block'>
              CLIENTS
              <span>
                <Counter start='0' end='100' duration={7} /> +
              </span>
            </div>
            <div className='stat-block'>
              PROJECTS
              <span>
                <Counter start='0' end='200' duration={7} /> +
              </span>
            </div>
          </div>
          <div className='small-screen'>
            <span className='small-since'>Since</span>
            <span className='small-date'>2001</span>
          </div>
        </div>

        <div className='logo-container'>
          <h2 className='since'>SINCE</h2>
          <img src={logo2001} alt='2001' />
        </div>
      </div>
    </Wrapper>
  );
};

export default MilestonesSection;
