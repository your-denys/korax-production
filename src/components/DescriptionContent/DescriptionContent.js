import React from 'react';
import './DescriptionContent.css';
import video from '../../assets/video.webm';

const DescriptionContent = () => {
  return (
    <section className="description">
      <div className="description-wrapper">
        <h2 className="description-text">
          Lorem ipsum dolor sit amet amet consectetur lorem ipsum
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
