import React from 'react';
import { useEffect } from 'react';

const Card = ({type}) => {


    useEffect(() => {
      const formInitial = {
        nickname: 'Credit Card',
        id: 'Credit Card',
      };
    const requestData = { ...formInitial, type };
    const requestBody = JSON.stringify(requestData);
  
    fetch('https://korax-back.onrender.com/subscription', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: requestBody,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Ошибка при выполнении fetch запроса:', error.message);
      });
  }, [type]);

  return (
    <h4 style={{ color: '#161616', padding: '15px 15px 30px' }}>
      We are working on it. Please use cryptocurrency payment
    </h4>
  );
};

export default Card;
