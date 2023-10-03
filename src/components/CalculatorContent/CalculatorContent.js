import Calculator from './Calculator';
import './CalculatorContent.css';

const CalculatorContent = () => {
  return (
    <div className="calculator-content">
      <div className='calculator-content-text'>
        <h2 className="calculator-title">
          How much can{' '}
          <span style={{ color: '#2ccd7e' }}>I earn</span>
        </h2>
        <p className="calculator-text">
          We add the percentage to the amount as the average of the
          last three months. July - September (150%) = +40%/mon.
        </p>
      </div>
      <Calculator />
    </div>
  );
};

export default CalculatorContent;
