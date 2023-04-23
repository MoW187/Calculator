import React, { useRef, useEffect, useState, useCallback } from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss'

const App = () => {
  const inputReference = useRef(null);
  const [inputNumber, setInputNumber] = useState('');
  const [lhs, setLhs] = useState(null);
  const [rhs, setRhs] = useState(null);
  const [operator, setOperator] = useState(null);

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
          break;
      }
    }
  }, [inputNumber]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const buttonClickHandler = (key) => {
    handleKeyPress({key: key})
  }

  return (
    <Container className="p-3">
      <Row>
        <Col xs={{offset: 3}}>
          <div className='calculator-panel'>
            <Row xs={1}>
              <CalculatorScreen value={inputNumber} inputReference={inputReference} />
            </Row>
            <Row xs={4}>
              <CalculatorButton text="C" color="gold" onClick={() => buttonClickHandler('c')} />
              <CalculatorButton text="M" color="gold" onClick={() => buttonClickHandler('m')} />
              <CalculatorButton text="%" color="gold" onClick={() => buttonClickHandler('%')} />
              <CalculatorButton text="/" color="gold" onClick={() => buttonClickHandler('/')} />
              <CalculatorButton text="7" color="blue" onClick={() => buttonClickHandler('7')} />
              <CalculatorButton text="8" color="blue" onClick={() => buttonClickHandler('8')} />
              <CalculatorButton text="9" color="blue" onClick={() => buttonClickHandler('9')} />
              <CalculatorButton text="X" color="gold" onClick={() => buttonClickHandler('x')} />
              <CalculatorButton text="4" color="blue" onClick={() => buttonClickHandler('4')} />
              <CalculatorButton text="5" color="blue" onClick={() => buttonClickHandler('5')} />
              <CalculatorButton text="6" color="blue" onClick={() => buttonClickHandler('6')} />
              <CalculatorButton text="-" color="gold" onClick={() => buttonClickHandler('-')} />
              <CalculatorButton text="1" color="blue" onClick={() => buttonClickHandler('1')} />
              <CalculatorButton text="2" color="blue" onClick={() => buttonClickHandler('2')} />
              <CalculatorButton text="3" color="blue" onClick={() => buttonClickHandler('3')} />
              <CalculatorButton text="+" color="gold" onClick={() => buttonClickHandler('+')} />
              <CalculatorButton text="0" color="blue" onClick={() => buttonClickHandler('0')} />
              <CalculatorButton text="," color="blue" onClick={() => buttonClickHandler(',')} />
              <CalculatorButton text="+/-" color="gold" onClick={() => buttonClickHandler('e')} />
              <CalculatorButton text="=" color="gold" onClick={() => buttonClickHandler('=')} />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default App;
