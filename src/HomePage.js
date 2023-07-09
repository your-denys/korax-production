import './App.css';
import Home from './view/Home/Home';
import KoraxAI from './view/KoraxAI/KoraxAI';
import Processes from './view/Processes/Processes';
import AboutUs from './view/AboutUs/AboutUs';
import RoadMap from './view/RoadMap/RoadMap';
import Projects from './view/Projects/Projects';
import ContactUs from './view/ContactUs/ContactUs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Mousewheel } from 'swiper';
import { useState, useEffect } from 'react';
import logo from './assets/Korax.svg';
import { Container } from 'react-bootstrap';

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [loadNumb, setLoadNumb] = useState(0);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (loading) {
        event.preventDefault();
      }
    };

    if (loading) {
      document.body.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.removeEventListener('touchmove', handleTouchMove);
    }

    const interval = setInterval(() => {
      setLoadNumb((prevLoadNumb) => prevLoadNumb + 1);
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      document.body.removeEventListener('touchmove', handleTouchMove);
    };
  }, [loading]);

  return (
    <div className="App">
      {loading && loadNumb < 100 && (
        <div className="loading-wrapper">
          <Container>
            <img src={logo} alt="KORAX" />
          </Container>
          <h2 className={'loading'}>{loadNumb}%</h2>
        </div>
      )}
      <div className="app-mobile">
        <div className="app-block">
          <Home />
        </div>
        <div
          className="app-block"
          style={{ backgroundColor: '#fff  !important' }}
        >
          <KoraxAI />
        </div>
        <div className="app-block">
          <Processes />
        </div>
        <div className="app-block">
          <AboutUs />
        </div>
        <div
          className="app-block"
          style={{ backgroundColor: '#fff !important' }}
        >
          <RoadMap />
        </div>
        <div className="app-block">
          <Projects />
        </div>
        <div className="app-block" id="#contact">
          <ContactUs />
        </div>
      </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          enabled: true,
          thresholdTime: 500,
          releaseOnEdges: false,
          thresholdDelta: 35,
        }}
        autoHeight={true}
        modules={[Mousewheel]}
        preventClicks={false}
        className="mySwiper"
      >
        <SwiperSlide className="app-block">
          <Home />
        </SwiperSlide>
        <SwiperSlide className="app-block app-bg">
          <KoraxAI />
        </SwiperSlide>
        <SwiperSlide className="app-block">
          <Processes />
        </SwiperSlide>
        <SwiperSlide className="app-block">
          <AboutUs />
        </SwiperSlide>
        <SwiperSlide className="app-block app-bg">
          <RoadMap />
        </SwiperSlide>
        <SwiperSlide className="app-block">
          <Projects />
        </SwiperSlide>
        <SwiperSlide className="app-block">
          <ContactUs />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage;
