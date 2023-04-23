import React from "react";
import Button from 'react-bootstrap/Button';

const CalculatorButton = (props) => {
    const {text} = props;

    return (
        <Button onClick={() => console.log(text)}>{text}</Button>
    )
}

export default CalculatorButton;