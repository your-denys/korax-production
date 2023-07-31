import React from 'react'
import { Container } from 'react-bootstrap'
import PremiumContactContent from '../../components/PremiumContactContent/PremiumContactContent'
import Footer from '../ContactUs/Footer'
import './PremiumContact.css'


const PremiumContact = () => {
  return (
    <div className='premium-contact-page'>
        <Container>
            <PremiumContactContent/>
            <Footer/>
        </Container>
    </div>
  )
}

export default PremiumContact