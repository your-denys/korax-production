import './ProcessesContent.css';
import { motion } from 'framer-motion';
// import { useEffect, useRef } from 'react';
import  {useState } from 'react';

const AnimationBlock = () => {
  const [description, setDescription] = useState('first');
  // const ref = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const [entry] = entries;
  //     setIsVisible(entry.isIntersecting);
  //   });

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);
  return (
    <section className="processes-content">
      <article className="processes-title">
        <button
          onClick={() => setDescription('first')}
          className={
            description === 'first'
              ? 'title-button title-active1'
              : 'title-button'
          }
          style={{ color: description === 'first' ? '#52C4BC' : '' }}
        >
          <p>Fundamental analysis</p>
          <svg
            className={
              description === 'first' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setDescription('second')}
          className={
            description === 'second'
              ? 'title-button title-active2'
              : 'title-button'
          }
          style={{ color: description === 'second' ? '#52C4BC' : '' }}
        >
          <p>Technical analysis</p>
          <svg
            className={
              description === 'second' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setDescription('third')}
          className={
            description === 'third'
              ? 'title-button title-active3'
              : 'title-button'
          }
          style={{ color: description === 'third' ? '#52C4BC' : '' }}
        >
          <p>Tracking large transactions</p>
          <svg
            className={
              description === 'third' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setDescription('fourth')}
          className={
            description === 'fourth'
              ? 'title-button title-active4'
              : 'title-button'
          }
          style={{ color: description === 'fourth' ? '#52C4BC' : '' }}
        >
          <p>Social Monitoring</p>
          <svg
            className={
              description === 'fourth' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setDescription('fifth')}
          className={
            description === 'fifth'
              ? 'title-button title-active5'
              : 'title-button'
          }
          style={{ color: description === 'fifth' ? '#52C4BC' : '' }}
        >
          <p>Proprietary Market Insights</p>
          <svg
            className={
              description === 'fifth' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setDescription('sixth')}
          className={
            description === 'sixth'
              ? 'title-button title-active6'
              : 'title-button'
          }
          style={{ color: description === 'sixth' ? '#52C4BC' : '' }}
        >
          <p>Economic indicators</p>
          <svg
            className={
              description === 'sixth' ? 'transform-arrow' : ''
            }
            width="57"
            height="35"
            viewBox="0 0 57 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4743 30.423C56.2603 30.1611 56.685 29.3116 56.423 28.5257L52.154 15.7184C51.892 14.9325 51.0425 14.5078 50.2566 14.7698C49.4707 15.0317 49.0459 15.8812 49.3079 16.6671L53.1026 28.0513L41.7184 31.8461C40.9325 32.108 40.5078 32.9575 40.7698 33.7434C41.0317 34.5293 41.8812 34.9541 42.6671 34.6921L55.4743 30.423ZM0.32918 3.34164L54.3292 30.3416L55.6708 27.6584L1.67082 0.658359L0.32918 3.34164Z"
              fill="white"
            />
          </svg>
        </button>
        <svg
          className="svg-animation"
          width="305"
          height="441"
          viewBox="0 0 305 441"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17"
            cy="17"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="313"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="165"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="91"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="387"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="239"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="54"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="350"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="202"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="128"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="424"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="17"
            cy="276"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="253"
            cy="220"
            r="16"
            stroke="white"
            strokeWidth="2"
          />
          <line
            className="line-1"
            x1="33.8224"
            y1="423.824"
            x2="235.822"
            y2="219.824"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-2"
            x1="33.8407"
            y1="386.807"
            x2="235.841"
            y2="219.807"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-3"
            x1="33.8652"
            y1="349.789"
            x2="236.865"
            y2="219.789"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-4"
            x1="33.8954"
            y1="312.773"
            x2="235.895"
            y2="219.773"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-5"
            x1="33.9332"
            y1="275.759"
            x2="235.933"
            y2="219.759"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-6"
            x1="33.9766"
            y1="238.751"
            x2="235.977"
            y2="219.751"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-7"
            x1="34.0221"
            y1="201.751"
            x2="237.022"
            y2="219.751"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-8"
            x1="34.0657"
            y1="164.759"
            x2="236.066"
            y2="219.759"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-9"
            x1="34.1036"
            y1="127.772"
            x2="236.104"
            y2="219.772"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-10"
            x1="33.1341"
            y1="90.789"
            x2="236.134"
            y2="219.789"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-11"
            x1="33.1565"
            y1="56.8051"
            x2="236.157"
            y2="219.805"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line
            className="line-12"
            x1="34.1776"
            y1="16.8241"
            x2="235.178"
            y2="219.824"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M303.004 3H236V2H304.007V3H304.004V438.221H303.004V3ZM304.007 440.846H236V439.846H304.007V440.846Z"
            fill="white"
          />
        </svg>
      </article>
      <article className="processes-description">
        {description === 'first' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Fundamental analysis</h2>
            <p>
              Fundamental analysis involves identifying the factors
              that affect the market. It can be history, trends, news
              (political, economic and social)
            </p>
          </motion.div>
        )}
        {description === 'second' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Technical analysis</h2>
            <p>
              Technical analysis of the market is carried out with the
              help of graphical charts and technical indicators.
              Graphic symbols are built using lines, figures, support
              and resistance levels, etc.
            </p>
          </motion.div>
        )}
        {description === 'third' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Tracking large transactions</h2>
            <p>
              Carefully monitoring the movements and strategies of
              major investors is crucial in the dynamic landscape of
              the financial market, as it offers invaluable insights
              into market trends, investor sentiment, and potential
              investment opportunities.
            </p>
          </motion.div>
        )}
        {description === 'fourth' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Social Monitoring</h2>
            <p>
              By leveraging the analysis of social networks and social
              data, individuals can anticipate market trends, surpass
              competitors, and make well-informed investment decisions
              with greater speed than the market's reaction.
            </p>
          </motion.div>
        )}
        {description === 'fifth' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Proprietary Market Insights</h2>
            <p>
              Leveraging our extensive network and comprehensive
              database within the fintech industry, Korax AI provides
              privileged access to the latest corporate updates and
              emerging trends. This empowers our users with invaluable
              market intelligence, enabling them to proactively
              anticipate opportunities and make well-informed
              decisions for long-term success.
            </p>
          </motion.div>
        )}
        {description === 'sixth' && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Economic indicators</h2>
            <p>
              Interest rate, FRED, Fear & Greed Index, PMI Index, etc.
            </p>
          </motion.div>
        )}
      </article>
    </section>
  );
};

export default AnimationBlock;
