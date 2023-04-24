import React from "react";
import { Form, Col } from 'react-bootstrap';

import './CalculatorScreen.scss';

const CalculatorScreen = (props: { inputReference: any; value: string; }) => {
    const {inputReference, value} = props;

    return (
        <Col className="calculator-grid-item">
            <Form.Control
                readOnly
                id="calculator-screen"
                ref={inputReference}
                value={value}
            />
        </Col>
    )
}

export default CalculatorScreen;