import React, { useRef, useEffect, useState, useCallback } from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss'

const App = () => {
  const inputReference = useRef(null);
  const [inputNumber, setInputNumber] = useState('');

  const handleKeyPress = useCallback((evt) => {
    if(isFinite(evt.key) && inputNumber.length < 11) {
      setInputNumber(inputNumber + evt.key);
    } else {
      switch(evt.key) {
        case 'c':
        case 'Backspace':
          setInputNumber(inputNumber.slice(0, -1));
          break;
        case '.':
        case ',':
          setInputNumber(inputNumber + '.');
        default:
          // code block
      }
    }
  }, [inputNumber]);

  useEffect(() => {
    console.log(inputNumber);
  }, [inputNumber]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Container className="p-3">
      <Row>
        <Col xs={{offset: 3}}>
          <div className='calculator-panel'>
            <Row xs={1}>
              <CalculatorScreen value={inputNumber} inputReference={inputReference} />
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
  )
};

export default App;
