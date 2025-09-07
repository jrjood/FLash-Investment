import Wrapper from '../../assets/wrappers/InspirationSection';

const InspirationSection = () => {
  return (
    <Wrapper style={{ border: 'none' }}>
      <div className='container'>
        <div className='content '>
          <div className='row'>
            <h3 className='title title-extra'>mission</h3>
            <div className='text-box'>
              <p>
                Our mission is to deliver exceptional real estate developments
                that combine modern design, functionality, and sustainability.
                We are committed to providing clients and investors with lasting
                value, while ensuring communities thrive in safe and inspiring
                environments.
              </p>
            </div>
          </div>
          <div className='row'>
            <h3 className='title title-extra'>vision</h3>
            <div className='text-box'>
              <p>
                Our vision is to become a leading name in the real estate sector
                by shaping innovative, sustainable, and high-quality
                developments. We aim to redefine modern living in Egypt and the
                region, building communities that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
