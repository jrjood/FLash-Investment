import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import useMediaQuery from '../utils/useMediaQuery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cards = ({ gridRows, cardsData }) => {
  const { t } = useTranslation('home');
  const isMobile = useMediaQuery('(max-width: 48rem)');

  return (
    <>
      {isMobile && (
        <div className='small-screen'>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
          >
            {cardsData.map((proj, i) => (
              <SwiperSlide>
                <>
                  <Link to={proj.link} key={i} className='card-slide'>
                    <img className='img' src={proj.img} alt={t(proj.key)} />
                    <div className='overlay' />
                    <div className='label'>{t(proj.key)}</div>
                  </Link>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className={gridRows}>
        {cardsData.map((proj, i) => (
          <Link
            to={proj.link}
            key={i}
            className={proj.big ? 'card big-card' : 'card'}
          >
            <img className='img' src={proj.img} alt={t(proj.key)} />
            <div className='overlay' />
            <div className='label'>{t(proj.key)}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Cards;
