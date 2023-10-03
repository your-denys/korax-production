import tether from '../../assets/tether-usdt.png';
import credit from '../../assets/credit-card.png';

const PaymentChoose = ({card, crypto }) => {

  return (
    <div className="paymant-choose">
        <h5>Select a payment method</h5>
        <div className="payment-wrapper">
            <button className='payment-button' onClick={crypto}><img src={tether} alt='' /></button>
            <button className='payment-button' onClick={card}><img src={credit} alt='' /></button>
        </div>
    </div>
  )
}

export default PaymentChoose