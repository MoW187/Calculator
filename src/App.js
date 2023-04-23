import React from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss'

const App = () => (
  <Container className="p-3">
    <Row>
      <Col xs={{offset: 3}}>
        <div className='calculator-panel'>
          <Row xs={1}>
            <CalculatorScreen />
          </Row>
          <Row xs={4}>
            <CalculatorButton text="C" color="gold" />
            <CalculatorButton text="M" color="gold" />
            <CalculatorButton text="%" color="gold" />
            <CalculatorButton text="/" color="gold" />
            <CalculatorButton text="7" color="blue" />
            <CalculatorButton text="8" color="blue" />
            <CalculatorButton text="9" color="blue" />
            <CalculatorButton text="X" color="gold" />
            <CalculatorButton text="4" color="blue" />
            <CalculatorButton text="5" color="blue" />
            <CalculatorButton text="6" color="blue" />
            <CalculatorButton text="-" color="gold" />
            <CalculatorButton text="1" color="blue" />
            <CalculatorButton text="2" color="blue" />
            <CalculatorButton text="3" color="blue" />
            <CalculatorButton text="+" color="gold" />
            <CalculatorButton text="0" color="blue" />
            <CalculatorButton text="," color="blue" />
            <CalculatorButton text="+/-" color="gold" />
            <CalculatorButton text="=" color="gold" />
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
);

export default App;
