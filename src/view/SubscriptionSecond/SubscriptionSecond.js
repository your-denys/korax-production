import React from 'react'
import { Container } from 'react-bootstrap'
import SubscriptionContentSecond from '../../components/SubscriptionContentSecond/SubscriptionContentSecond'
import './Subscription.css'
const Subscription = () => {
  return (
    <div className='subscription-page'>
        <Container>
            <SubscriptionContentSecond/>
        </Container>
    </div>
  )
}

export default Subscription