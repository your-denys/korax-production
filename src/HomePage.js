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
import "swiper/css/scrollbar";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel } from 'swiper/core';
import UAParser from 'ua-parser-js';


function HomePage() {
  
  SwiperCore.use([Mousewheel]);
  const parser = new UAParser();
  const browser = parser.getBrowser();
  const isSafari = browser.name === 'Safari';
  const slidesPerView = isSafari ? 'auto' : 1;
  const mousewheelSettings = isSafari
  ? {
      eventsTarged: '.mySwiper',
      releaseOnEdges: true,
      sensitivity: 20,
      thresholdDelta: 20,
    }
  : {
      enabled: true,
      thresholdTime: 500,
      releaseOnEdges: true,
      sensitivity: 10,
    };

  return (
    <div className="App">
      <div className='app-mobile'>
        <div className='app-block' >
          <Home />
        </div>
        <div className='app-block' style={{ backgroundColor: '#fff  !important' }} >
          <KoraxAI />
        </div>
        <div className='app-block'>
          <Processes />
        </div>
        <div className='app-block'>
          <AboutUs />
        </div>
        <div className='app-block' style={{ backgroundColor: '#fff !important' }}>
          <RoadMap />
        </div>
        <div className='app-block'>
          <Projects />
        </div>
        <div className='app-block' id='contact'>
          <ContactUs />
        </div>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        mousewheel={mousewheelSettings}
        autoHeight={true}
        modules={[Mousewheel]}
        preventClicks={false}
        className="mySwiper"
      >
        <SwiperSlide className='app-block'>
          <Home />
        </SwiperSlide>
        <SwiperSlide className='app-block app-bg'>
          <KoraxAI />
        </SwiperSlide>
        <SwiperSlide className='app-block'>
          <Processes />
        </SwiperSlide>
        <SwiperSlide className='app-block'>
          <AboutUs />
        </SwiperSlide>
        <SwiperSlide className='app-block app-bg'>
          <RoadMap />
        </SwiperSlide>
        <SwiperSlide className='app-block'>
          <Projects />
        </SwiperSlide>
        <SwiperSlide className='app-block'>
          <ContactUs />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage