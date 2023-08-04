import React from 'react';
import { Container } from 'react-bootstrap';
import StatisticContant from '../../components/StatisticContant/StatisticContant';
import './Statistic.css'
const Statistic = () => {
  return (
    <div className='statistic-page' id='statistic'>
      <Container>
        <StatisticContant />
      </Container>
    </div>
  );
};

export default Statistic;
