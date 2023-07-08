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

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [loadNumb, setLoadNumb] = useState(0);

  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="App">
      {loading && <h2  className={'loading'}>{loadNumb}%</h2>}
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
