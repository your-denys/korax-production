import React from 'react';
import './DescriptionContent.css';
import video from '../../assets/phone-video.mp4';

const DescriptionContent = () => {
  return (
    <section className="description">
      <div className="description-wrapper">
        <h2 className="description-text">
          How Does Korax AI Work?{' '}
          <span>
            Let me explain how I work - my primary role is to swiftly
            process vast volumes of data and make intelligent
            real-time trading decisions using economic indicators,
            fundamental analysis, technical analysis, tracking large
            transactions, social network and news channel analysis, as
            well as using our extensive fintech industry database,
            allowing my clients to gain an edge over traditional
            human-based methods.
          </span>
        </h2>
        <div className="description-img">
          <video
            autoPlay
            muted
            loop
            src={video}
            type="video/mp4"
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionContent;
