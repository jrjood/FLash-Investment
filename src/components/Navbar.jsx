import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { Logo, NavLinks } from '.';
import Wrapper from '../assets/wrappers/Navbar';
import MenuButtonWrapper from '../assets/wrappers/MenuButtonWrapper';
import AsideMenu from '../assets/wrappers/AsideMenu';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const location = useLocation();

  function toggleSideBar() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.7,
        rootMargin: '0px',
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isSticky) {
      setShowNavbar(true);
      return;
    }
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setShowNavbar(false); // scroll down, hide
          } else {
            setShowNavbar(true); // scroll up, show
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [isSticky, lastScrollY]);

  return (
    <Wrapper $isSticky={isSticky} $showNavbar={showNavbar}>
      <AsideMenu $open={isOpen}>
        <div className='content'>
          <NavLinks toggle={toggleSideBar} />
        </div>
      </AsideMenu>
      <div className='test'>
        <div className='test2'>
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
          </div>
          <div className='line'></div>
          <Link>News & Guides</Link>
        </div>
        <div>
          <Link>Call Us</Link>
        </div>
      </div>
      <nav className='navbar '>
        <MenuButtonWrapper
          type='button'
          className='toggle-btn'
          onClick={toggleSideBar}
          $open={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <IoIosMenu />}
        </MenuButtonWrapper>
        <Link to='.' className='logo-container'>
          <Logo isSticky={isSticky} />
        </Link>
        <div className='big-bar'>
          <NavLinks />
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
