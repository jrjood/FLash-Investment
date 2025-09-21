import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactSelectForm';

const ContactSelectForm = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <div className='contact-top flex-center'>
        <div className='contact-item'>
          <button
            className='btn btn-contact'
            target='_blank'
            rel='noopener noreferrer'
            href={`tel:${t('contact.phone')}`}
          >
            Contact Us
          </button>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <button
            className='btn btn-contact'
            target='_blank'
            rel='noopener noreferrer'
            href={`tel:${t('contact.phone')}`}
          >
            Site Visit
          </button>
        </div>

        <div className='divider' />
        <div className='contact-item'>
          <button
            className='btn btn-contact'
            target='_blank'
            rel='noopener noreferrer'
            href={`tel:${t('contact.phone')}`}
          >
            Join Us
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactSelectForm;
