import React from 'react';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

import Wrapper from '../assets/wrappers/ContactsSection';

export default function Footer() {
  return (
    <Wrapper>
      <div className='contact-top flex-center'>
        <div className='contact-item'>
          <a
            className='contact-circle'
            target='_blank'
            href='mailto:hr@investwithflash.com'
          >
            <IoMdMail />
          </a>
          <h4 className='label'>EMAIL US</h4>
          <a
            className='info'
            target='_blank'
            href='mailto:hr@investwithflash.com'
          >
            hr@investwithflash.com
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a target='_blank' className='contact-circle' href='tel:201118883882'>
            <FaPhone />
          </a>
          <h4 className='label'>CALL US</h4>
          <a target='_blank' className='info' href='tel:201118883882'>
            +20 11 18883882
          </a>
        </div>

        <div className='divider' />

        <div className='contact-item'>
          <a
            className='contact-circle'
            target='_blank'
            href='https://maps.app.goo.gl/C5nsLsCCmiKaR37XA'
          >
            <FaLocationDot />
          </a>
          <h4 className='label'>VISIT US</h4>
          <a
            className='info'
            target='_blank'
            href='https://maps.app.goo.gl/C5nsLsCCmiKaR37XA'
          >
            Villa 335, Al Narges 1, 90 St. Fifth Settlement - New Cairo | Egypt
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
