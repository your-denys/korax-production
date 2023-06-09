import React from 'react'
import  Container  from 'react-bootstrap/Container'
import KoraxAIContent from '../../components/KoraxAIContent/KoraxAIContent'
import './KoraxAI.css'

const KoraxAI = () => {
  return (
    <div 
    className='koraxAI-page'
    >
        <Container>
            <KoraxAIContent/>
        </Container>
    </div>
  )
}

export default KoraxAI