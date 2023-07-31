import React from 'react'
import { Container } from 'react-bootstrap'
import FaqContent from '../../components/FaqContent/FaqContent'
import './Faq.css'
const Faq = () => {
  return (
    <div className='faq-page'>
        <Container>
            <FaqContent/>
        </Container>
    </div>
  )
}

export default Faq