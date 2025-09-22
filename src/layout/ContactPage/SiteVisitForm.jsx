// SiteVisitForm.jsx
import { useRef } from 'react';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';

const SiteVisitForm = () => {
  const dateRef = useRef(null);

  const openPicker = () => {
    // Chromium/Edge/Brave support
    if (dateRef.current?.showPicker) dateRef.current.showPicker();
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>go back &rarr;</button>
        </Link>
        <h2 className='form-title'>Reserve a Site Visit</h2>

        <form
          className='contact-form'
          action='https://api.web3forms.com/submit'
          method='POST'
        >
          <input
            type='hidden'
            name='access_key'
            value='ee1fbee7-4e02-4817-9ac5-c090294e2761'
          />

          <div className='left-fields'>
            <input
              type='text'
              name='fullName'
              placeholder='FULL NAME*'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='EMAIL ADDRESS*'
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder='MOBILE NUMBER*'
              required
            />

            {/* Date input — clicking anywhere opens the picker */}
            <input
              ref={dateRef}
              type='date'
              name='date'
              required
              onClick={openPicker}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openPicker();
                }
              }}
            />
          </div>

          <div className='right-fields'>
            <textarea name='message' placeholder='MESSAGE' rows='15' />
            <button className='btn' type='submit'>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default SiteVisitForm;
