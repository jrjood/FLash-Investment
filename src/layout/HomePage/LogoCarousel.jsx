import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/LogoCarousel';

/* import 'swiper/css';
import 'swiper/css/autoplay'; */

export default function LogoCarousel() {
  return (
    <Wrapper className='section-container'>
      <div className='carousel-container flex-center container'>
        <div className='btn-with-title'>
          <h2 className='title title-medium'>CLIENTS</h2>
          <Link className='btn-container' to='clients'>
            <button className='btn'>Show all Clients &rarr;</button>
          </Link>
        </div>

        <div className='logo-container'>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 5,
              },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className='logo-item'>
                  <img src={logo.src} alt={logo.alt || `logo-${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}
