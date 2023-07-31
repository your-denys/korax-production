import React from 'react';
import './DescriptionContent.css';
import works from '../../assets/works.jpg'

const DescriptionContent = () => {
  return (
    <section className="description">
      <div className="description-wrapper">
        <h2 className='description-text'>
          Lorem ipsum dolor sit amet amet consectetur lorem ipsum
        </h2>
        <div className='description-img'>
            <img src={works} alt='Works' />
        </div>
      </div>
    </section>
  );
};

export default DescriptionContent;
