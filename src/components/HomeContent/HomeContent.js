import Nav from 'react-bootstrap/Nav';
import './HomeContent.css';
import video from '../../assets/video.webm';
// import videoMob from '../../assets/phone-video.mp4';
import videoMob from '../../assets/../../assets/robot-screen.mp4';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import videoPoster from '../../assets/video-poster.webp';

const HomeContent = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const swiper = useSwiper();
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <section className="home-content">
      <article className="content-wrapper">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="purpose"
        >
          purpose of korax
        </motion.p>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="title-home"
        >
          EARLY ADOPTER IN AI-POWERED TRADING
        </motion.h2>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-home"
        >
          Korax is a top fintech firm based in the UK, focusing on
          state-of-the-art trading algorithms powered by advanced
          artificial intelligence. Our game-changing solutions serve
          the needs of individual investors, asset managers, brokers
          and banks, reshaping the financial landscape through
          cutting-edge technology and invaluable expertise.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Nav.Link onClick={() => swiper?.slideTo(6)} href='#contact' className="contact-us">
            <span>CONTACT US</span>
          </Nav.Link>
        </motion.div>
      </article>
      <motion.article
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="wrapper-video"
        >
           {!videoLoaded && <img src={videoPoster} className='video' alt="Robot" />}
        <video
          className="video pc"
          autoPlay
          muted
          loop
          // preload='auto'
          src={video}
          type="video/mp4"
          playsInline
          onLoadedData={handleVideoLoad}
         style={{ display: videoLoaded ? 'block' : 'none' }}
         onContextMenu={handleContextMenu}
        />
        <video
          className="video mobile"
          autoPlay
          muted
          loop
          // preload='auto'
          src={videoMob}
          type="video/mp4"
          playsInline
          onLoadedData={handleVideoLoad}
         style={{ display: videoLoaded ? 'block' : 'none' }}
         onContextMenu={handleContextMenu}
        />
      </motion.article>
    </section>
  );
};

export default HomeContent;
