import React from "react";
import { Form, Col } from 'react-bootstrap';

import './CalculatorScreen.scss';

const CalculatorScreen = (props) => {
    const {inputReference, value} = props;

    return (
        <Col className="calculator-grid-item">
            <Form.Control
                readOnly
                id="calculator-screen"
                ref={inputReference}
                value={new Intl.NumberFormat("hu-HU", {roundingPriority: 'morePrecision'}).format(value)}
            />
        </Col>
    )
}

export default CalculatorScreen;