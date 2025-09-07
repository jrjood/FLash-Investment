import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='social-container'>
        <div className='social-icons'>
          <a
            target='_blank'
            className='facebook'
            href='https://www.facebook.com/p/Flash-investment-61559102775358/'
          >
            <FaFacebookF />
          </a>
          <a
            target='_blank'
            className='whatsapp'
            href='https://api.whatsapp.com/send?phone=%2B201118883882&context=AfdU1Gbx80Rb5EBFtcc1WIaGQngzVqllH80wE9tNruDRPdQp8A5xgU9YrmIIr95RDt20G-BumoaH5J1yjhsCfoGwifkhkfb3pTR-idgh8xgXOZUQsq6ns2zSHmcPMbt3LXD1ap0ZCZculE5tUldZkTAv5A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExSE1OZmd1cVh6YjJjWHhUNwEe0gdTAAKTmGdviMnEgCNyNaHua0iLGiKzghtdXeaGNJKILDQlxhLl9loQF0I_aem_bYn6wvZx2jU5JfKPdtKgCA'
          >
            <FaWhatsapp />
          </a>
          <a
            target='_blank'
            className='instagram'
            href='https://www.instagram.com/flash.investment/'
          >
            <FaInstagram />
          </a>

          <a
            target='_blank'
            className='linkedin'
            href='https://www.linkedin.com/company/108218609/admin/dashboard/'
          >
            <FaLinkedin />
          </a>
        </div>

        <div className='copy-text'>
          <p className='developed-by'>
            Flash Investment 2025. All Rights Reserved. Developed & Designed By.
            <a
              target='_blank'
              href='https://portfolio-webpage-jrd.vercel.app/'
              className='designer-link'
            >
              JORDI
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
