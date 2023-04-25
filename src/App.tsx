import React, { useRef, useEffect, useState, useCallback } from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';
import { Container, Row, Col } from 'react-bootstrap';

import './App.scss'

enum Operators {
  PLUS = '+',
  MINUS = '-',
  MULTYPLY = 'x',
  DIVISION = '/',
  PERCENT = '%',
  DELETE = 'c',
  DOT = '.',
  COMMA = ','
}

enum Modifiers {
  DELETE = 'c',
  BACKSPACE = 'Backspace',
  NEGATIVE = 'n',
  DOT = ',',
  COMMA = ',',
  MEMORY = 'm'
}

const App = () => {
  const inputReference = useRef(null);
  var lhs = 0;
  var inputNumber = '';
  var emptyInputNumber: boolean = false;
  var operator: Operators | null = null;
  var memory: number | null = null;
  const [screenValue, setScreenValue] = useState<string>('0');

  const handleKeyPress = useCallback((key: string) => {
    if(/^\d+$/.test(key)) {
      if(inputNumber.length < 11) {
        emptyInputNumber ? inputNumber = key : inputNumber = inputNumber + key;
        displayNumber(inputNumber);
        emptyInputNumber = false;
      }
    } else {
      switch(key) {
        case Modifiers.DELETE:
        case Modifiers.BACKSPACE:
          inputNumber = '';
          displayNumber(inputNumber);
          lhs = 0;
          break;
        case Modifiers.DOT:
        case Modifiers.COMMA:
          inputNumber = inputNumber + '.';
          break;
        case Modifiers.MEMORY:
          if(memory === null) {
            memory = Number(inputNumber);
            inputNumber = '';
            displayNumber('0');
          } else {
            inputNumber = memory.toString();
            displayNumber(inputNumber);
          }
          console.log('memory: ' + memory);
          break;
        case Operators.PLUS:
        case Operators.MINUS:
        case Operators.MULTYPLY:
        case Operators.DIVISION:
        case Operators.PERCENT:
          calculate();
          operator = key;
          break;
        case Modifiers.NEGATIVE:
          if(inputNumber === '') {
            inputNumber = '-';
          } else if (inputNumber.substring(0, 1) === '-') {
            inputNumber = inputNumber.substring(1);
            displayNumber(inputNumber);
          } else {
            inputNumber = '-' + inputNumber;
            displayNumber(inputNumber);
          }
          break;
      case '=':
        calculate();
        break;
        default:
          break;
      }
    }
  }, [inputNumber, lhs]);

  const calculate = () => {
    if(lhs === 0) {
      lhs = Number(inputNumber);
      inputNumber = '';
    } else {
      var newValue = 0;

      switch(operator) {
        case Operators.PLUS:
          newValue = lhs + Number(inputNumber);
          break;
        case Operators.MINUS:
          newValue = lhs - Number(inputNumber);
          break;
        case Operators.MULTYPLY:
          newValue = lhs * Number(inputNumber);
          break;
        case Operators.DIVISION:
          newValue = lhs / Number(inputNumber);
          break;
        case Operators.PERCENT:
          newValue = lhs * (Number(inputNumber) / 100);
      }

      lhs = newValue;
      inputNumber = newValue.toString();
      displayNumber(newValue);
      emptyInputNumber = true;
    }
  }

  const displayNumber = (value: string | Number) => {
    if(typeof value === 'string') value = Number(value);
    setScreenValue(value.toLocaleString('hu-HU'));
  }

  useEffect(() => {
    window.addEventListener("keydown", (evt) => handleKeyPress(evt.key));

    return () => {
      window.removeEventListener("keydown", (evt) => handleKeyPress(evt.key));
    };
  }, [handleKeyPress]);

  const buttonClickHandler = (key: string) => {
    handleKeyPress(key)
  }

  return (
    <Container className="p-3">
      <Row>
        <Col xs={{offset: 3}}>
          <div className='calculator-panel'>
            <Row xs={1}>
              <CalculatorScreen value={screenValue} inputReference={inputReference} />
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
              <CalculatorButton text="+/-" color="gold" onClick={() => buttonClickHandler('n')} />
              <CalculatorButton text="=" color="gold" onClick={() => buttonClickHandler('=')} />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default App;
