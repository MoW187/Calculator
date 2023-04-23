import React from "react";
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

import './CalculatorButton.scss';

const CalculatorButton = (props) => {
    const {text, color, onClick} = props;

    return (
        <Col className='calculator-grid-item'> 
            <Button variant="calculator" className={color} onClick={onClick}>{text}</Button>
        </Col>
    )
}

export default CalculatorButton;