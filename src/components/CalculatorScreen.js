import React from "react";
import { Form, Col } from 'react-bootstrap';

import './CalculatorScreen.scss';

const CalculatorScreen = () => {
    return (
        <Col className="calculator-grid-item">
            <Form.Control id="calculator-screen" />
        </Col>
    )
}

export default CalculatorScreen;