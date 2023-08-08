import React from 'react';
import { useState } from 'react';
import './TransactionWindow.css';

const TransactionForm = ({ type, statusform }) => {
  const formInitial = {
    nickname: '',
    id: '',
  };
  const [formDetails, setFormDetails] = useState(formInitial);
  const [buttonText, setButtonText] = useState('Confirm Payment');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    const requestData = { ...formDetails, type };
    const requestBody = JSON.stringify(requestData);
    let response = await fetch(
      'http://3.76.47.169/subscription',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: requestBody,
      }
    );
    setButtonText('Confirm Payment');
    let result = await response.json();
    setFormDetails(formInitial);
    if (result.code === 200) {
      statusform(true)
    } else {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later',
      });
    }
  };
  return (
    <>
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="transaction-wrapper">
        <label>
          {' '}
          Your Telegram Nickname*
          <div>
            <input
              value={formDetails.nickname}
              onChange={(e) =>
                onFormUpdate('nickname', e.target.value)
              }
              className="transaction-input"
              type="text"
              required
            />
          </div>
        </label>
      </div>
      <div className="transaction-wrapper">
        <label>
          {' '}
          Your Transaction ID*
          <div>
            <input
              value={formDetails.id}
              onChange={(e) => onFormUpdate('id', e.target.value)}
              className="transaction-input"
              type="text"
              required
            />
          </div>
        </label>
      </div>
      {status.message && (
        <p style={{ color: '#161616' }} className="mb-3">
          {status.message}
        </p>
      )}
      <button className="transaction-button" type="submit">
        <span>{buttonText}</span>
      </button>
    </form>
    </>
  );
};

export default TransactionForm;
