import React from 'react'
import { Container } from 'react-bootstrap'
import CalculatorContent from '../../components/CalculatorContent/CalculatorContent.js'
import './Calculator.css'

const Calculator = () => {
  return (
    <div className='caluctor-page'>
        <Container>
            <CalculatorContent/>
        </Container>
    </div>
  )
}

export default Calculator