import { useState, useEffect } from 'react';
import logo from '../../assets/Korax.svg';
import './FixedHeader.css';

const FixedHeader = () => {
  const [displayedText, setDisplayedText] = useState('');
  const text = '  July +115% with AI Trading For Everyone';
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex >= text.length) {
          clearInterval(interval);
          return prevText;
        }
        return prevText + text[currentIndex];
      });

      currentIndex++;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed-wrapper">
      <div className="fixed-header">
        <img className="fixed-img" src={logo} alt="logo" />
        <p className="fixed-text">{displayedText}</p>
        <a href="#premium" className="fixed-button">
          Get Premium
        </a>
      </div>
    </div>
  );
};

export default FixedHeader;
