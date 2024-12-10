import React from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import OperatorPad from './OperatorPad';
import './Calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftNumber: '',
            operator: '',
            rightNumber: '',
            result: ''
        };
        this.addNumber = this.addNumber.bind(this);
        this.addOperator = this.addOperator.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
    }

    addNumber(e) {
        const value = e.target.innerHTML;
        if (this.state.operator === '') {
            this.setState((prevState) => ({
                leftNumber: prevState.leftNumber + value
            }));
        } else {
            this.setState((prevState) => ({
                rightNumber: prevState.rightNumber + value
            }));
        }
    }

    addOperator(e) {
        const value = e.target.innerHTML;
        if (value !== '=') {
            this.setState({ operator: value });
        } else {
            this.calculateResult();
        }
    }

    calculateResult() {
        const allOperators = {
            '+': (num1, num2) => num1 + num2,
            '-': (num1, num2) => num1 - num2,
            'X': (num1, num2) => num1 * num2,
            '÷': (num1, num2) => num1 / num2
        };
        const operation = allOperators[this.state.operator];
        const result = operation(+this.state.leftNumber, +this.state.rightNumber);
        this.setState({
            leftNumber: result.toString(),
            operator: '',
            rightNumber: '',
            result: result
        });
    }

    render() {
        let displayValue = this.state.rightNumber || this.state.leftNumber;
        return (
            <div className="component-Calculator">
                <Display newNumber={displayValue} />
                <NumberPad addNumber={this.addNumber} />
                <OperatorPad addOperator={this.addOperator} />
            </div>
        );
    }
}

export default Calculator;
