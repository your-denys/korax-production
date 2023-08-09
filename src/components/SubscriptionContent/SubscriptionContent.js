import { useState, useRef, useEffect } from 'react';
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

  const [number, setNumber] = useState(
    Number(localStorage.getItem('number')) || 98
  );
  
  useEffect(() => {
    if (number > 27) {
      const delay = Math.floor(Math.random() * (10000 - 6000 + 1)) + 6000;
      console.log(delay);
      const interval = setInterval(() => {
        setNumber((prevNumber) => {
          const newNumber = Math.floor(Math.max(prevNumber - 1, 0));
          localStorage.setItem('number', newNumber);

          return newNumber;
        });
      }, delay);

      return () => clearInterval(interval);
    } else return;
  }, [number]);

  const tagRefs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
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
      <h2 className="subscription-title">Subscription Plans</h2>
      <p className="subscription-text">
        Choose the plan that works for you
      </p>
      <p className="subscription-offer">
        Limited opening offer for 200 people / <span className='offer-red'>{number} left </span>
      </p>
      {isMobile ? (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          initialSlide={1}
          modules={[Pagination]}
          className="subscription-wrapper mySwiper"
        >
          <SwiperSlide className="subscription-card first-card">
            <div className="subscription-content">
              <p className="subscription-days first">
                1 Month subscription
              </p>
              <h2 ref={tagRefs.first}>
                $78{' '}
                <span className="slash">
                  / <span className="old-price">149$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('first')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="subscription-card second-card">
            <div className="subscription-content">
              <p className="subscription-days second">
                Half-Yearly subscription{' '}
              </p>
              <p className="uniq-offer">Uniq offer</p>
              <h2 ref={tagRefs.second}>
                $299{' '}
                <span className="slash">
                  / <span className="old-price">650$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('second')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="subscription-card third-card">
            <div className="subscription-content">
              <p className="subscription-days third">
                Yearly subscription
              </p>
              <h2 ref={tagRefs.third}>
                $499{' '}
                <span className="slash">
                  / <span className="old-price">1000$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('third')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="subscription-wrapper">
          <div className="subscription-card first-card">
            <div className="subscription-content">
              <p className="subscription-days first">
                1 Month subscription
              </p>
              <h2 ref={tagRefs.first}>
                $78{' '}
                <span className="slash">
                  / <span className="old-price">149$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('first')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card second-card">
            <div className="subscription-content">
              <p className="subscription-days second">
                Half-Yearly subscription{' '}
              </p>
              <p className="uniq-offer">Uniq offer</p>
              <h2 ref={tagRefs.second}>
                $299{' '}
                <span className="slash">
                  / <span className="old-price">650$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('second')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </div>
          <div className="subscription-card third-card">
            <div className="subscription-content">
              <p className="subscription-days third">
                Yearly subscription
              </p>
              <h2 ref={tagRefs.third}>
                $499{' '}
                <span className="slash">
                  / <span className="old-price">1000$</span>
                </span>
              </h2>
              <p className="subscription-limited">
                Limited opening discount
              </p>
              <button
                onClick={() => handleButtonClick('third')}
                className="subscription-button"
              >
                Get Premium
              </button>
              <a href="#statistic" className="subscription-link">
                Show last month PNL
              </a>
              <ul className="subscription-list">
                <li>Full scope AI Crypto Signals</li>
                <li>AI Urgently News</li>
                <li>Technical AI Analysis Market</li>
                <li>Personality Premium Support</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <TransactionWindow
        type={typeSubscr}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default SubscriptionContent;
