import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/CardsSection';
import { Cards } from '../../components';
import allProjects from '../../utils/allProjects';

const AllProjectsSection = () => {
  const { t } = useTranslation('projects');

  // stable filter values
  const categoryValues = [
    'all',
    'new-cairo',
    'new-capital',
    'sheikh-zayed',
    '6th-october',
    'north-coast',
    'ain-sokhna',
    'maadi',
    'heliopolis',
  ];

  // label mapping through i18n
  const categories = useMemo(
    () =>
      categoryValues.map((value) => ({
        value,
        label: t(`projects.categories.${value}`),
      })),
    [t]
  );

  const [current, setCurrent] = useState('all');

  const filteredProjects =
    current === 'all'
      ? allProjects
      : allProjects.filter((proj) => proj.category.toLowerCase() === current);

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <div className='header'>
          <h2 className='title title-medium'>{t('projects.sectionTitle')}</h2>

          <select
            className='category-select'
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <Cards cardsData={filteredProjects} gridRows='big-screen grid' />
      </div>
    </Wrapper>
  );
};

export default AllProjectsSection;
