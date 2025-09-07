import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100vw;
  height: ${({ $isSticky }) => ($isSticky ? '3rem' : '6rem')};
  padding: 0 4rem;

  /* stick/float behavior */
  position: ${({ $isSticky }) => ($isSticky ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  z-index: 10;

  /* visual transitions (no transform here!) */
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ $isSticky }) =>
    $isSticky ? 'var(--primary-100)' : 'transparent'};
  box-shadow: ${({ $isSticky }) =>
    $isSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'};

  /* animate ONLY the nav bar, not the whole wrapper */
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: transform 0.3s ease-in-out;
    transform: ${({ $isSticky, $showNavbar }) =>
      $isSticky && !$showNavbar ? 'translateY(-110%)' : 'translateY(0)'};

    /* if you were using pointer-events to avoid accidental taps */
    pointer-events: ${({ $isSticky, $showNavbar }) =>
      $isSticky && !$showNavbar ? 'none' : 'auto'};
    will-change: transform;
  }

  .logo-container {
    padding-left: 3rem;
  }

  .logo {
    transition: var(--transition);
    width: ${({ $isSticky }) => ($isSticky ? '6rem' : '11rem')};
  }

  .big-bar {
    display: flex;
    gap: 2rem;
    .nav-link {
      color: ${({ $isSticky }) => ($isSticky ? '#050505' : 'var(--white)')};
      font-size: 0.9rem;
    }
    li {
      &:hover {
        span {
          height: 2rem;
        }
        .nav-link {
          color: ${({ $isSticky }) =>
            $isSticky ? 'var(--primary-900)' : 'var(--primary-300)'};
        }
      }
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    display: block;
    transition: var(--transition);
    text-decoration: none;
    font-weight: 600;
  }
  li {
    text-transform: uppercase;
    position: relative;
    list-style: none;
    transition: var(--transition);
  }
  span {
    position: absolute;
    width: 5px;
    height: 0;
    background-color: var(--white);
    top: -2.7rem;
    left: 50%;
    transform: translate(-50%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.15s ease-in-out;
  }

  .toggle-btn {
    display: none;
    position: fixed; /* stays on viewport */
    top: 1rem;
    left: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 48rem) {
    .toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .big-bar {
      display: none;
    }
    .logo {
      display: none;
    }

    /* mobile: keep wrapper clean; no box-shadow/bg here */
    background-color: transparent;
    box-shadow: none;
  }
`;

export default Wrapper;
