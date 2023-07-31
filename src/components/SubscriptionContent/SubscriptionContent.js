import { useState, useRef } from 'react';
import './SubscriptionContent.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { motion } from 'framer-motion';
import { Pagination } from 'swiper';
import TransactionWindow from '../TransactionWindow/TransactionWindow';

const SubscriptionContent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [typeSubscr, setTypeSubscr] = useState('');

  const tagRefs = {
    grey: useRef(null),
    black: useRef(null),
    green: useRef(null),
  };
  const isMobile = window.innerWidth <= 820;

  const handleButtonClick = (cardType) => {
    const tagRef = tagRefs[cardType];
    setModalShow(true);
    if (tagRef.current && tagRef.current.textContent) {
      setTypeSubscr(tagRef.current.textContent);
    }
  };

  return (
    <div className="subscription" id="premium">
      <h2 className="subscription-title">
        Lorem ipsum dolor sit amet consectetur
      </h2>
      {isMobile ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          initialSlide={1}
          modules={[Pagination]}
          className="subscription-wrapper mySwiper"
        >
          <SwiperSlide className="subscription-card grey-card">
            <div className="subscription-content">
              <p className="subscription-days 7-days">7 Days</p>
              <h2 ref={tagRefs.grey}>$39</h2>
              <button
                onClick={() => handleButtonClick('grey')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="subscription-card black-card">
            <div className="subscription-content">
              <p className="subscription-days 1-month">1 Month</p>
              <h2 ref={tagRefs.black}>$99</h2>
              <button
                onClick={() => handleButtonClick('black')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="subscription-card green-card">
            <div className="subscription-content">
              <p className="subscription-days 7-days">1 Year</p>
              <h2 ref={tagRefs.green}>$900</h2>
              <button
                onClick={() => handleButtonClick('green')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="subscription-wrapper">
          <div className="subscription-card grey-card">
            <div className="subscription-content">
              <p className="subscription-days 7-days">7 Days</p>
              <h2 ref={tagRefs.grey}>$39</h2>
              <button
                onClick={() => handleButtonClick('grey')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card black-card">
            <div className="subscription-content">
              <p className="subscription-days 1-month">1 Month</p>
              <h2 ref={tagRefs.black}>$99</h2>
              <button
                onClick={() => handleButtonClick('black')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card green-card">
            <div className="subscription-content">
              <p className="subscription-days 7-days">1 Year</p>
              <h2 ref={tagRefs.green}>$900 </h2>
              <button
                onClick={() => handleButtonClick('green')}
                className="subscription-button"
              >
                Buy Now
              </button>
              <ul className="subscription-list">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <TransactionWindow
        type = {typeSubscr}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default SubscriptionContent;
