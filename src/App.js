import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

import CalculatorButton from './components/CalculatorButton';

import './App.scss'
import { Row, Col } from 'react-bootstrap';

const App = () => (
  <Container className="p-3">
    <Row>
      <Col lg={{span: 6, offset: 3}}>
        <div className='calculator-panel'>
          <CalculatorButton text="1" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default App;
