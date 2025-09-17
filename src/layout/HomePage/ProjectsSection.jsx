import { Link } from 'react-router-dom';
import { Cards } from '../../components';
import projects from '../../utils/projects';
import Wrapper from '../../assets/wrappers/CardsSection';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation('home');

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <h2 className='title title-medium'>{t('projects.title')}</h2>

        <Cards cardsData={projects} gridRows='big-screen grid grid--2--row' />

        <Link className='btn-container' to='projects'>
          <button className='btn'>{t('projects.button')}</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default ProjectsSection;
