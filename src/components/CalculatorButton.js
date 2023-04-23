import React from "react";
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

import './CalculatorButton.scss';

const CalculatorButton = (props) => {
    const {text, color} = props;

    return (
        <Col className='calculator-grid-item'> 
            <Button variant="calculator" className={color} onClick={() => console.log(text)}>{text}</Button>
        </Col>
    )
}

export default CalculatorButton;