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
import { Mousewheel } from 'swiper';

function HomePage() {

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
        <div className='app-block'>
          <ContactUs />
        </div>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
          mousewheel={{
            enabled: true,
            thresholdTime: 300,
            releaseOnEdges: true,
          }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide className='app-block' id="home">
          <Home />
        </SwiperSlide>
        <SwiperSlide className='app-block app-bg' id="koraxAI">
          <KoraxAI />
        </SwiperSlide>
        <SwiperSlide className='app-block' id="processes">
          <Processes />
        </SwiperSlide>
        <SwiperSlide className='app-block' id="about-us">
          <AboutUs />
        </SwiperSlide>
        <SwiperSlide className='app-block app-bg' id="road-map">
          <RoadMap />
        </SwiperSlide>
        <SwiperSlide className='app-block' id="projects">
          <Projects />
        </SwiperSlide>
        <SwiperSlide className='app-block' id="contact-us">
          <ContactUs />
        </SwiperSlide>
      </Swiper>
    </div>
    // </MyContext.Provider>
  );
}

export default HomePage