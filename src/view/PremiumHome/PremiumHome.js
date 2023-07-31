import React from 'react';
import Header from '../../components/Header/Header';
import PremiumHomeContent from '../../components/PremiumHomeContent/PremiumHomeContent';
import './PremiumHome.css';
import { Container } from 'react-bootstrap';

const PremiumHome = () => {
  return (
    <div className="premium-home">
      <Header />
      <Container>
        <PremiumHomeContent />
      </Container>
    </div>
  );
};

export default PremiumHome;
