import styled from 'styled-components';

const AsideMenu = styled.aside`
  display: none;

  @media (max-width: 48rem) {
    display: flex;
  }

  position: fixed;
  inset: 0;

  background-color: var(--black);
  color: var(--white);

  align-items: center;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, opacity 0.4s ease-in-out;
  transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  .content {
    width: 100%;
    max-width: 28rem;
    padding: 4rem 2rem;
    margin-inline: auto;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0;
    gap: 1rem;
  }

  .nav-link {
    margin: 0.5rem 0;
    font-family: 'Rama Gothic M';
    color: var(--white);
    font-size: 2rem;
    transition: var(--transition);
  }

  li .active {
    color: var(--primary-700);
  }
  span {
    display: none;
  }
`;

export default AsideMenu;
