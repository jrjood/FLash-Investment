import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';

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
        threshold: 0.2,
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
