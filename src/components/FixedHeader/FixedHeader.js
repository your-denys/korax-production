import { useState, useEffect } from 'react';
import logo from '../../assets/Korax.svg';
import './FixedHeader.css';

const FixedHeader = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const text = 'July +115% with AI Trading For Everyone';
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [text, currentIndex]);

  return (
    <div className="fixed-wrapper">
      <div className="fixed-header">
        <img className="fixed-img" src={logo} alt="logo" />
        <p className="fixed-text">{displayText}</p>
        <a href="#premium" className="fixed-button">
          Get Premium
        </a>
      </div>
    </div>
  );
};

export default FixedHeader;
