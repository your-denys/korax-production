import React from 'react'
import { Container } from 'react-bootstrap'
import DescriptionContent from '../../components/DescriptionContent/DescriptionContent'
import './Description.css'

const Description = () => {
  return (
    <div className='description-page'>
        <Container>
            <DescriptionContent/>
        </Container>
    </div>
  )
}

export default Description