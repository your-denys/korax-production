import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import qr from '../../assets/qr.jpg';
import TransactionForm from './TransactionForm';
import Spinner from 'react-bootstrap/Spinner';
import Thanks from './Thanks';
import PaymentChoose from './PaymentChoose';
import Card from './Card';

const TransactionWindow = ({ show, onHide, type }) => {
  const [load, setLoad] = useState(true);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);
  const [status, setStatus] = useState(false);
  const [payment, setPayment] = useState('');

  const handleCard = () => {
    setPayment('card');
  };
  const handleCrypto = () => {
    setPayment('crypto');
  };

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 3000);
    }
  };

  const handleStatus = (status) => {
    return setStatus(status);
  };

  useEffect(() => {
    if (type) {
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }
  }, [type]);

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={() => setPayment('')} closeButton></Modal.Header>
        {payment === '' ? <PaymentChoose card={handleCard} crypto={handleCrypto} /> : null }

        {payment === 'crypto' ? (
          status ? (
            <Thanks />
          ) : (
            <>
              <Modal.Body>
                <p className="transaction-coin">Coin</p>
                <p className="transaction-tether">
                  Tether TRC (USDT)
                </p>
                {load ? (
                  <Spinner
                    animation="border"
                    className="transaction-spinner"
                  />
                ) : (
                  <img
                    className="transaction-img"
                    src={qr}
                    alt="QR Code"
                  />
                )}
                <p className="transaction-deposit">Deposit Address</p>
                <div className="copy-input">
                  <input
                    style={{ color: load && 'transparent' }}
                    className="transaction-address"
                    ref={inputRef}
                    type="text"
                    value="TCcd8M3TZBgJ9C4cP6aWAAfazfJzoSHumv"
                    readOnly
                  />
                  <button
                    style={{ color: 'black' }}
                    onClick={handleCopy}
                    className={clicked ? 'clicked' : ''}
                  ></button>
                </div>

                <TransactionForm
                  type={type}
                  statusform={handleStatus}
                />
              </Modal.Body>

              <Modal.Footer>
                <p className="transaction-footer">
                  USDT Chain Only <br />
                  Please do not deposit invalid assets to this
                  address.
                  <br />
                  We are not responsible for lost funds.
                </p>
              </Modal.Footer>
            </>
          )
        ) : null}
        {payment === 'card' ? <Card  type={type}/> : null}
      </Modal>
    </div>
  );
};

export default TransactionWindow;
