import React from 'react'
import { Container } from 'react-bootstrap'
import SubscriptionContent from '../../components/SubscriptionContent/SubscriptionContent'
import './Subscription.css'
const Subscription = () => {
  return (
    <div className='subscription-page'>
        <Container>
            <SubscriptionContent/>
        </Container>
    </div>
  )
}

export default Subscription